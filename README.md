# Knowledge Sharing Platform – Backend

This is the backend service for the **Knowledge Sharing Platform with AI Assist**.

Built using:

- Node.js
- Express.js
- MySQL
- JWT Authentication

It provides REST APIs for authentication, article management, search, and AI-assisted content improvement.

---

## 🔹 Approach

### Architecture Overview

The backend follows a modular MVC-inspired structure:

- **Routes** handle API endpoints
- **Controllers** contain business logic
- **Models** manage database interaction
- **Middleware** handles authentication and security
- **Config** manages database connection

This separation ensures scalability, maintainability, and clean API design.

---

### Folder Structure

npm install


### Run Server

npm start


---

## 🔐 Environment Variables

Create `.env` file:


PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=knowledge_platform
JWT_SECRET=your_secret
GEMINI_API_KEY=your_api_key


---

## 🔗 API Base URL

http://localhost:5000/api
