# KGRCET Public Website

Official public website for KG Reddy College of Engineering & Technology (KGRCET).

## Features

- **Home Page**: Upcoming events, achievements, and announcements
- **Clubs Page**: 8 student clubs with join and details options
  - Blockchain
  - Data Science
  - Web & App Development
  - 3D Printing
  - Green House
  - Dramatix
  - Pixel
  - Cultural
- **Sports Page**: Sports activities and upcoming tournaments
- **About KGR**: College information, principal details, location map, and campus videos
- **Contact Page**: Event coordinators, club contacts, and general information
- **Registration Page**: Ekarus event registration with Supabase integration

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend/Database**: Supabase (PostgreSQL + Storage)
- **Styling**: Custom CSS with modern, responsive design

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/KGRCET.git
cd KGRCET
```

### 2. Configure Supabase

1. Copy the example config file:
   ```bash
   cp assets/js/config.example.js assets/js/config.js
   ```

2. Edit `assets/js/config.js` and add your Supabase credentials:
   - Get your Supabase URL and anon key from [Supabase Dashboard](https://app.supabase.com)
   - Replace the placeholder values in `config.js`

### 3. Supabase Database Setup

Run these SQL commands in your Supabase SQL Editor:

```sql
-- Create registrations table
create table if not exists public.registrations (
  id text primary key,
  student_name text not null,
  student_college text not null,
  registration_for text not null,
  email text not null,
  image_url text not null,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.registrations enable row level security;

-- Allow insert/select for anon (public website)
create policy "Allow insert for anon" on public.registrations
  for insert to anon with check (true);

create policy "Allow select for anon" on public.registrations
  for select to anon using (true);
```

### 4. Supabase Storage Setup

1. Create a storage bucket named `registrations`
2. Make it public
3. Add these policies in Storage → Policies:

```sql
-- Allow public uploads
create policy "Public can upload registration files"
on storage.objects for insert
to anon
with check (bucket_id = 'registrations');

-- Allow public reads
create policy "Public can read registration files"
on storage.objects for select
to public
using (bucket_id = 'registrations');
```

### 5. Run Locally

Simply open `index.html` in your browser, or use a local server:

**Python:**
```bash
python -m http.server 5500
```

**Node.js:**
```bash
npx serve -l 5500
```

Then visit `http://localhost:5500`

## File Structure

```
KGRCET/
├── index.html
├── clubs.html
├── sports.html
├── about.html
├── contacts.html
├── registration.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── app.js
│       ├── config.example.js
│       ├── config.js (create from example)
│       └── supabaseClient.js
├── .gitignore
└── README.md
```

## Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select branch (usually `main`) and folder (`/root`)
4. Your site will be live at `https://YOUR_USERNAME.github.io/KGRCET`

### Netlify/Vercel

1. Connect your GitHub repository
2. Deploy with default settings
3. Your site will be live automatically

**Note**: Make sure `assets/js/config.js` is included in your deployment (it should be, as it's needed for production).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

Copyright © 2025 KGRCET. All rights reserved.

## Contact

For questions or support, please contact the website administrators.


