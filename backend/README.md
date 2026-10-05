# Saurabh Kumar Portfolio - Backend API

Production-ready Node.js & Express RESTful API for Saurabh Kumar's 3D Portfolio.

## Features
- **Express.js API** with clean modular architecture (Routes, Controllers, Middleware, Models, Config).
- **MongoDB & Mongoose integration** for persistent contact submissions and project records.
- **Resilient Fallback Mode**: If MongoDB is not running locally, the API seamlessly operates in memory and returns rich portfolio seed data without crashing.
- **Nodemailer integration** for forwarding contact messages directly to email.
- **Input validation & sanitization** preventing malformed requests.
- **Centralized error handling & logging**.
- **CORS enabled** for local Vite dev server and production domains.

## API Endpoints
- `GET  /api/health` - API health check and server uptime
- `GET  /api/projects` - List all portfolio projects (supports `?category=Web` and `?search=react`)
- `GET  /api/projects/:idOrSlug` - Get deep project details by slug or MongoDB ID
- `GET  /api/skills` - List categorized technical skill inventory
- `POST /api/contact` - Submit a message from portfolio contact form
- `GET  /api/contact` - Retrieve message history

## Setup & Running Locally
```bash
cd backend
npm install
npm run dev
```

For production:
```bash
npm start
```
