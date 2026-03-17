const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const API_BASE_URL = `${SUPABASE_URL}/functions/v1`;

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

interface PortfolioData {
  profile: {
    id: string;
    full_name: string;
    email: string;
    title: string;
    bio: string;
    avatar_url: string;
  };
  projects: Array<{
    id: string;
    title: string;
    description: string;
    technologies: string[];
    image_url: string;
    github_url: string;
    live_url: string;
  }>;
  skills: Array<{
    id: string;
    name: string;
    category: string;
    proficiency: number;
  }>;
  experience: Array<{
    id: string;
    company: string;
    position: string;
    description: string;
    start_date: string;
    end_date: string;
    current: boolean;
  }>;
}

export async function submitContact(data: ContactPayload): Promise<{
  success: boolean;
  message: string;
  id?: string;
}> {
  const response = await fetch(`${API_BASE_URL}/contact-submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to submit contact form');
  }

  return response.json();
}

export async function getPortfolioData(): Promise<PortfolioData> {
  const response = await fetch(`${API_BASE_URL}/get-portfolio`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to fetch portfolio data');
  }

  return response.json();
}
