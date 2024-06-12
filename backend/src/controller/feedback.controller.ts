import { Request, Response } from "express";
import feedbackList from "../store/feedback.store";
import { FeedBack } from "../type";

// Function to fetch the feedback list
export const fetchFeedbackList = (req: Request, res: Response) => {
    return res.json({
        success: true, // Indicate the success of the operation
        feedbackList // Send the feedback list as part of the response
    });
};

// Function to add new feedback
export const addNewFeedback = (req: Request, res: Response) => {
    const { name, feedback }: FeedBack = req.body;

    // Validate the input - check if name and feedback are provided
    if (!name || !feedback) {
        return res.status(400).json({ // Send a 400 Bad Request status code
            success: false, // Indicate the failure of the operation
            message: "Please provide name and feedback" // Error message
        });
    }

    // Add the new feedback to the feedback list
    feedbackList.push({ name, feedback });

    return res.status(201).json({
        success: true, // Indicate the success of the operation
        message: "New feedback submitted successfully" // Success message
    });
};
