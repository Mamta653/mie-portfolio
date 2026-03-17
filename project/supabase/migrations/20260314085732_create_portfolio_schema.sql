/*
  # Create Portfolio Database Schema
  
  1. New Tables
    - `profiles` - User profile information
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text, unique)
      - `title` (text)
      - `bio` (text)
      - `avatar_url` (text)
      - `featured` (boolean) - Show on public portfolio
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      
    - `projects` - Portfolio projects
      - `id` (uuid, primary key)
      - `profile_id` (uuid, foreign key)
      - `title` (text)
      - `description` (text)
      - `technologies` (text[])
      - `image_url` (text)
      - `github_url` (text)
      - `live_url` (text)
      - `featured` (boolean)
      - `order` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      
    - `contact_messages` - Contact form submissions
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `read` (boolean)
      - `created_at` (timestamp)
      
    - `skills` - Technical skills
      - `id` (uuid, primary key)
      - `profile_id` (uuid, foreign key)
      - `name` (text)
      - `category` (text)
      - `proficiency` (integer)
      - `order` (integer)
      - `created_at` (timestamp)
      
    - `experience` - Work experience
      - `id` (uuid, primary key)
      - `profile_id` (uuid, foreign key)
      - `company` (text)
      - `position` (text)
      - `description` (text)
      - `start_date` (date)
      - `end_date` (date)
      - `current` (boolean)
      - `created_at` (timestamp)
      
  2. Security
    - Enable RLS on all tables
    - Public read access for featured content
    - Authenticated users can only modify their own data
*/

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY,
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  title text NOT NULL DEFAULT 'Full Stack Developer',
  bio text,
  avatar_url text,
  featured boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  technologies text[] DEFAULT '{}',
  image_url text,
  github_url text,
  live_url text,
  featured boolean DEFAULT true,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  name text NOT NULL,
  category text NOT NULL,
  proficiency integer DEFAULT 5 CHECK (proficiency >= 1 AND proficiency <= 5),
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS experience (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  company text NOT NULL,
  position text NOT NULL,
  description text,
  start_date date NOT NULL,
  end_date date,
  current boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable"
  ON profiles FOR SELECT
  USING (featured = true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Featured projects are public"
  ON projects FOR SELECT
  USING (featured = true);

CREATE POLICY "Users can view own projects"
  ON projects FOR SELECT
  TO authenticated
  USING (auth.uid() = profile_id);

CREATE POLICY "Users can create projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can update own projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (auth.uid() = profile_id)
  WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can delete own projects"
  ON projects FOR DELETE
  TO authenticated
  USING (auth.uid() = profile_id);

CREATE POLICY "Anyone can submit contact"
  ON contact_messages FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admin can read messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles p
      WHERE p.id = auth.uid() AND p.featured = true
    )
  );

CREATE POLICY "Public can view skills"
  ON skills FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = skills.profile_id AND featured = true
    )
  );

CREATE POLICY "Users can manage own skills"
  ON skills FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can update own skills"
  ON skills FOR UPDATE
  TO authenticated
  USING (auth.uid() = profile_id)
  WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can delete own skills"
  ON skills FOR DELETE
  TO authenticated
  USING (auth.uid() = profile_id);

CREATE POLICY "Public can view experience"
  ON experience FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = experience.profile_id AND featured = true
    )
  );

CREATE POLICY "Users can manage own experience"
  ON experience FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can update own experience"
  ON experience FOR UPDATE
  TO authenticated
  USING (auth.uid() = profile_id)
  WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can delete own experience"
  ON experience FOR DELETE
  TO authenticated
  USING (auth.uid() = profile_id);

CREATE INDEX IF NOT EXISTS idx_projects_profile_id ON projects(profile_id);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_skills_profile_id ON skills(profile_id);
CREATE INDEX IF NOT EXISTS idx_experience_profile_id ON experience(profile_id);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created ON contact_messages(created_at);
