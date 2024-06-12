import express, { Router } from 'express';
import rateLimit from 'express-rate-limit'; 
import { addNewFeedback, fetchFeedbackList } from '../controller/feedback.controller'; 

// Define rate limiting middleware
const limiter = rateLimit({
    windowMs: 10 * 1000, // 10 seconds window
    max: 1, // Limit each IP to 1 request per windowMs
    message: { // Response message for rate limit exceeded
        success: false,
        message: "Too many requests from this IP, please try again after 10 seconds"
    }
});

// Create a new router instance
const feedbackRouter: Router = express.Router();

// Define a route for fetching feedback list
feedbackRouter.get("/feedback", fetchFeedbackList);

// Define a route for adding new feedback with rate limiting applied
feedbackRouter.post("/feedback", limiter, addNewFeedback);

// Export the router to be used in other parts of the application
export default feedbackRouter;
