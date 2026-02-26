# Knowledge Sharing Platform – Backend

## 📌 Overview
This backend powers a Knowledge Sharing Platform that allows users to create, manage and explore technical articles with AI assistance.

It handles:
- User authentication using JWT
- Article CRUD operations
- AI-powered content improvement
- AI-generated summaries

---

## ⚙️ Tech Stack
- Node.js
- Express.js
- MySQL
- JWT Authentication
- Gemini AI API

---

## 🧠 Architecture

The backend follows a modular MVC-inspired structure:

config/ → Database configuration  
controllers/ → Business logic  
middleware/ → JWT auth protection  
models/ → Database interaction  
routes/ → API endpoints  
utils/ → AI integration logic  
server.js → App entry point  

---

## ✨ Features

### 🔐 Authentication
- User Signup
- User Login
- JWT-based authorization

### 📝 Article Management
- Create Article
- Edit Article
- Delete Article
- View Articles

### 🤖 AI Features
- Improve Article Content using Gemini
- Generate AI-based Article Summary

### 🔎 Search Support
APIs support filtered and searchable article data.

---

## 🤖 AI Usage

Gemini AI was integrated to enhance content creation.

AI helps in:
- Rewriting content clearly
- Improving grammar
- Making content concise
- Generating summaries

AI responses are processed via utility services and exposed through API endpoints.

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js
- MySQL

### Install Dependencies
