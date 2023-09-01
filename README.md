# AcademiaXpress-Blog
## MERN Stack Blog App

This is a simple MERN (MongoDB, Express.js, React, Node.js) stack blog application with JWT authentication and file upload using Multer.

## Features

- User authentication using JWT
- Create, read, update, and delete blog posts
- Upload images for blog posts using Multer
- Front-end built with React and Vite
- Data stored in MongoDB

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- Multer for file upload
- CORS for cross-origin resource sharing

### Frontend

- React
- Vite

## Getting Started

1. Clone the repository: `git clone https://github.com/raouffilali/mern-blog-app.git`
2. Navigate to the backend directory: `cd mern-blog-app/backend`
3. Install backend dependencies: `npm install`
4. Create a `.env` file in the `backend` directory and add your MongoDB connection string and JWT secret:
   `MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret`
  5. Start the backend server: `npm start`

6. Navigate to the frontend directory: `cd ../frontend`
7. Install frontend dependencies: `npm install`
8. Start the frontend development server: `npm run dev`

## API Routes

- `POST /api/auth/signup`: User registration
- `POST /api/auth/login`: User login
- `GET /api/posts`: Get all blog posts
- `GET /api/posts/:id`: Get a specific blog post
- `POST /api/posts`: Create a new blog post
- `PUT /api/posts/:id`: Update a blog post
- `DELETE /api/posts/:id`: Delete a blog post

## Frontend Components

- `LoginPage`: User login page
- `SignupPage`: User registration page
- `HomePage`: Display list of blog posts
- `SinglePostPage`: Display a single blog post
- `CreatePostPage`: Create a new blog post
- `EditPostPage`: Edit an existing blog post

## Deployment

You can deploy the backend and frontend parts separately, for example, deploying the backend on a platform like Heroku and the frontend on Vercel or Netlify.

Make sure to update the necessary environment variables and configuration settings for deployment.

## Conclusion

This is a basic outline of a MERN stack blog app with JWT authentication and file upload using Multer. Feel free to customize and expand upon it to match your project requirements.
special thanks to Mohammad Rezaei AKA Moonfo for the grateful help 

Happy coding!
 
