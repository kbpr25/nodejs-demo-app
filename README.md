# Node.js Demo App - CI/CD Pipeline

A simple Node.js Express application demonstrating CI/CD pipeline with GitHub Actions and Docker.

## Features
- Express.js web server
- Docker containerization
- Automated CI/CD with GitHub Actions
- Docker Hub deployment

## API Endpoints
- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /about` - Application info

## Local Development

### Prerequisites
- Node.js 18+
- Docker Desktop

### Run Locally
npm install
npm start

### Run with Docker
docker build -t nodejs-demo-app .
docker run -p 3000:3000 nodejs-demo-app

## CI/CD Pipeline
Automated build and deployment triggered on push to `main` branch.

## Tech Stack
- Node.js
- Express.js
- Docker
- GitHub Actions