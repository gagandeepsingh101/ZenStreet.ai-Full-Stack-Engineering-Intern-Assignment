# ZenStreet.ai Full-Stack Engineering Intern Assignment

This repository contains a full-stack web application built with a Node.js backend and a React frontend. Below is an overview of the project setup and structure.

## Project Structure

```
.
├── backend
│   ├── src
│   │   ├── controller
│   │   │   └── feedbackController.ts
│   │   ├── routes
│   │   │   └── feedbackRoutes.ts
│   │   ├── store
│   │   │   └── feedbackStore.ts
│   │   ├── type.ts
│   │   └── app.ts
│   ├── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .gitignore
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── FeedbackForm.tsx
│   │   │   └── FeedbackList.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── utils
│   │       └── api.ts
│   ├── public
│   │   └── vite.svg
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── postcss.config.cjs
│   ├── tailwind.config.cjs
│   └── .gitignore
├── README.md
└── .gitignore
```

## Backend

The backend is built using Node.js and Express.js. It handles HTTP requests and serves the API endpoints for the application.

- **Entry Point**: `index.ts` - Starts the Express server.
- **Source Code**: `src/`
  - **Controller**: `controller/feedbackController.ts` - Handles feedback-related HTTP requests.
  - **Routes**: `routes/feedbackRoutes.ts` - Defines routes for feedback-related requests with rate-limiting.
  - **Store**: `store/feedbackStore.ts` - Stores feedback data.
  - **Types**: `type.ts` - Defines TypeScript interfaces.
  - **App Setup**: `app.ts` - Sets up the Express app, middleware, and routes.

### Getting Started with Backend

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Frontend

The frontend is built using React, TypeScript, and Vite. It provides the user interface for the application.

- **Entry Point**: `index.html` - The main HTML file.
- **Source Code**: `src/`
  - **Components**: Contains React components.
    - `FeedbackForm.tsx` - Form for submitting feedback.
    - `FeedbackList.tsx` - Displays a list of feedback.
  - **Main Component**: `App.tsx` - Main React component.
  - **Utilities**: `utils/api.ts` - Utility functions for API calls.
  - **Main Entry**: `main.tsx` - Entry point for the React application.

### Getting Started with Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Additional Notes

- **ESLint Configuration**: The frontend uses ESLint for linting with some recommended rules for React and TypeScript.
- **Tailwind CSS**: Tailwind CSS is used for styling the frontend.
- **Rate Limiting**: The backend applies rate-limiting to feedback-related routes to prevent abuse.
- **TypeScript**: Both the backend and frontend are written in TypeScript for type safety.
