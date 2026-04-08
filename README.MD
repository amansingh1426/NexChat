# NexChat

A full-stack real-time chat platform built with React, Node.js, Express, MongoDB, and Socket.io.

![NexChat Preview](https://raw.githubusercontent.com/amansingh1426/NexChat/main/frontend/public/nexchat-login-preview.png?v=20260408)

## Overview

NexChat is designed for fast team communication with secure authentication, live messaging, and a polished modern interface.

## Core Features

- JWT-based authentication and protected routes
- Real-time 1:1 messaging with Socket.io
- Online/offline presence indicators
- Image sharing in conversations
- Typing and notification sounds with toggle control
- Welcome email flow via Resend
- Cloudinary media upload support
- Rate limiting and request protection with Arcjet

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, DaisyUI, Zustand
- Backend: Node.js, Express, Socket.io
- Database: MongoDB with Mongoose
- Services: Cloudinary, Resend, Arcjet

## Project Structure

```text
NexChat/
  backend/
  frontend/
  package.json
```

## Environment Variables

Create `backend/.env` from `backend/.env.example` and fill your real values.

```bash
PORT=3000
MONGO_URI=your_mongo_uri_here
NODE_ENV=development
JWT_SECRET=your_jwt_secret
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email_from_address
EMAIL_FROM_NAME=your_email_from_name
CLIENT_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

## Local Development

1. Install backend dependencies and start backend server:

```bash
cd backend
npm install
npm run dev
```

2. Install frontend dependencies and start frontend app:

```bash
cd frontend
npm install
npm run dev
```

## Production Build

From the project root:

```bash
npm run build
npm run start
```
