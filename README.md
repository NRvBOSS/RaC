# 🚗 RaC – Rent a Car Platform

**RaC (Rent a Car)** is a modern full-stack web application designed for car rental and sales services. The platform allows users to browse available cars, rent them for specific dates, or purchase them. It's built with a focus on user experience, security, and clean architecture using the MEVN stack.

## 🛠️ Tech Stack (MEVN)

- **MongoDB** – NoSQL database for storing user and car data
- **Express.js** – Backend REST API framework
- **Vue.js** – Frontend JavaScript framework
- **Node.js** – Runtime environment for server-side logic
- **JWT (JSON Web Token)** – Secure user authentication

## ✨ Key Features

- 🔐 User Registration & Login with JWT-based authentication
- 🚗 Car listing with search, filter, and sort capabilities
- 📅 Date-based car availability and rental requests
- 👤 User account dashboard for tracking rentals or purchases

## 📁 Project Structure

RaC/
├── backend/ # Express.js API and MongoDB configuration
       ├──docker/ # Docker - related files
├── frontend/ # Vue.js UI application
└── README.md # Project documentation


## 🚀 Getting Started (Local Setup)

```bash
# Backend
cd backend
npm install
npm run dev

# Docker
cd backend
cd docker
docker-compose up

# Frontend
cd frontend
npm install
npm run dev
