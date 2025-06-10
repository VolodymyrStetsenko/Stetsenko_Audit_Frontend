# Stetsenko Audit Frontend

Frontend application for the Stetsenko Audit platform - an AI-powered smart contract auditing tool.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_URL=http://localhost:3000
```

3. Start the development server:
```bash
npm run dev
```

## Features

- Modern, responsive UI with dark/light theme support
- AI-powered smart contract analysis
- Professional audit report generation
- User authentication and account management
- Educational resources about smart contract security

## Tech Stack

- React 18
- TypeScript
- TailwindCSS
- Framer Motion
- Supabase
- Vite

## Development

The project uses:
- TailwindCSS for styling
- Framer Motion for animations
- React Router for navigation
- Supabase for authentication and data storage

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
