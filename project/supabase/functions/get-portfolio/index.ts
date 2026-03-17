import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    if (req.method !== "GET") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");

    const profileResponse = await fetch(
      `${supabaseUrl}/rest/v1/profiles?featured=eq.true&limit=1`,
      {
        headers: {
          apikey: supabaseAnonKey || "",
        },
      }
    );

    if (!profileResponse.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch profile" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const profiles = await profileResponse.json();
    if (!profiles || profiles.length === 0) {
      return new Response(
        JSON.stringify({ error: "Portfolio not found" }),
        {
          status: 404,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const profileId = profiles[0].id;

    const [projectsRes, skillsRes, experienceRes] = await Promise.all([
      fetch(
        `${supabaseUrl}/rest/v1/projects?profile_id=eq.${profileId}&featured=eq.true&order=order.asc`,
        {
          headers: { apikey: supabaseAnonKey || "" },
        }
      ),
      fetch(
        `${supabaseUrl}/rest/v1/skills?profile_id=eq.${profileId}&order=order.asc`,
        {
          headers: { apikey: supabaseAnonKey || "" },
        }
      ),
      fetch(
        `${supabaseUrl}/rest/v1/experience?profile_id=eq.${profileId}&order=start_date.desc`,
        {
          headers: { apikey: supabaseAnonKey || "" },
        }
      ),
    ]);

    const projects = await projectsRes.json();
    const skills = await skillsRes.json();
    const experience = await experienceRes.json();

    const portfolioData = {
      profile: profiles[0],
      projects: projects || [],
      skills: skills || [],
      experience: experience || [],
    };

    return new Response(JSON.stringify(portfolioData), {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
