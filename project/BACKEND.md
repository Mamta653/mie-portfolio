# Backend Architecture & Database Setup

## Overview

This portfolio uses **Supabase** for backend infrastructure, providing:
- PostgreSQL database for data persistence
- Edge Functions for serverless API endpoints
- Built-in authentication (ready for future integration)
- Row-Level Security (RLS) for data protection

## Database Schema

### Tables

#### `profiles`
User profile information
- `id` (uuid, PK) - Auth user ID
- `full_name` (text) - Full name
- `email` (text, UNIQUE) - Email address
- `title` (text) - Professional title
- `bio` (text) - Professional biography
- `avatar_url` (text) - Profile picture URL
- `featured` (boolean) - Show on public portfolio
- `created_at`, `updated_at` (timestamptz)

#### `projects`
Portfolio projects
- `id` (uuid, PK)
- `profile_id` (uuid, FK) - Project owner
- `title`, `description` (text)
- `technologies` (text[]) - Tech stack
- `image_url`, `github_url`, `live_url` (text)
- `featured` (boolean) - Show on public portfolio
- `order` (integer) - Display order
- `created_at`, `updated_at` (timestamptz)

#### `contact_messages`
Contact form submissions
- `id` (uuid, PK)
- `name`, `email`, `message` (text)
- `read` (boolean) - Admin read status
- `created_at` (timestamptz)

#### `skills`
Technical skills
- `id` (uuid, PK)
- `profile_id` (uuid, FK)
- `name`, `category` (text) - Skill name and category
- `proficiency` (integer 1-5) - Skill level
- `order` (integer)
- `created_at` (timestamptz)

#### `experience`
Work experience
- `id` (uuid, PK)
- `profile_id` (uuid, FK)
- `company`, `position`, `description` (text)
- `start_date`, `end_date` (date)
- `current` (boolean)
- `created_at` (timestamptz)

## Security

### Row-Level Security (RLS) Policies

- **Profiles**: Public read for featured profiles, authenticated users can modify own
- **Projects**: Featured projects are public, users manage own
- **Contact Messages**: Public submit, admin view only
- **Skills**: Public read if profile is featured, user management
- **Experience**: Public read if profile is featured, user management

## Edge Functions

### 1. `contact-submit` (POST)
Submits contact form messages to the database

**Endpoint**: `https://[PROJECT_URL]/functions/v1/contact-submit`

**Request**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Contact message submitted successfully",
  "id": "uuid"
}
```

**Error Handling**:
- Missing fields → 400 Bad Request
- Database error → 500 Internal Server Error
- Invalid method → 405 Method Not Allowed

### 2. `get-portfolio` (GET)
Fetches complete portfolio data (profile, projects, skills, experience)

**Endpoint**: `https://[PROJECT_URL]/functions/v1/get-portfolio`

**Response**:
```json
{
  "profile": { ... },
  "projects": [ ... ],
  "skills": [ ... ],
  "experience": [ ... ]
}
```

**Error Handling**:
- Portfolio not found → 404 Not Found
- Fetch error → 500 Internal Server Error

## Frontend Integration

### API Service (`src/services/api.ts`)

```typescript
// Submit contact form
await submitContact({
  name: string,
  email: string,
  message: string
})

// Fetch portfolio data
const data = await getPortfolioData()
```

### Supabase Client (`src/lib/supabase.ts`)

Direct database access for authenticated operations:

```typescript
import { supabase } from '@/lib/supabase'

// Fetch profile
const { data, error } = await supabase
  .from('profiles')
  .select('*')
  .eq('featured', true)
  .maybeSingle()
```

## Environment Variables

Required `.env` variables:
```
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

These are automatically configured in your Supabase project.

## Development Workflow

### 1. Adding New Data
Use the Supabase dashboard or programmatically:

```typescript
const { data, error } = await supabase
  .from('projects')
  .insert([
    {
      profile_id: userId,
      title: 'My Project',
      description: 'Description',
      technologies: ['React', 'TypeScript'],
      featured: true
    }
  ])
```

### 2. Querying Data
```typescript
// Fetch featured projects
const { data: projects } = await supabase
  .from('projects')
  .select('*')
  .eq('featured', true)
  .eq('profile_id', userId)
```

### 3. Real-time Subscriptions
```typescript
supabase
  .from('contact_messages')
  .on('INSERT', (payload) => {
    console.log('New message:', payload.new)
  })
  .subscribe()
```

## Deployment

The Edge Functions are automatically deployed to Supabase. No additional configuration needed.

### CORS Headers
All Edge Functions include proper CORS headers:
- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type, Authorization, X-Client-Info, Apikey`

## Future Enhancements

1. **Authentication**: Add user login/registration
2. **Admin Dashboard**: Manage portfolio content
3. **Email Notifications**: Notify admin of new contact messages
4. **File Upload**: Support for project images and assets
5. **Analytics**: Track portfolio visits and engagement

## Useful Links

- [Supabase Documentation](https://supabase.com/docs)
- [Edge Functions Guide](https://supabase.com/docs/guides/functions)
- [PostgreSQL RLS](https://supabase.com/docs/guides/auth/row-level-security)
