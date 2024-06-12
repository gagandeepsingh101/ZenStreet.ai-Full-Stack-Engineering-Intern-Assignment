import axios, { AxiosResponse } from "axios";
import React from "react";

// Define a type for the feedback item
type FeedbackItem = {
    name: string;
    feedback: string;
};

// Fetch the feedback list and update state
export const fetchFeedBackList = async (
    setFeedBackList: React.Dispatch<React.SetStateAction<FeedbackItem[]>>
) => {
    try {
        const res: AxiosResponse<{ success: boolean; feedbackList: FeedbackItem[] }> = await axios.get("http://localhost:8000/feedback");
        if (res.data.success) {
            setFeedBackList(res.data.feedbackList);
            console.log(res)
        } else {
            console.error("Failed to fetch feedback list: success flag is false");
        }
    } catch (error) {
        console.error("Error fetching feedback list:", error);
    }
};

// Add new feedback
export const addNewFeedBack = async (feedback: FeedbackItem, setFeedBackList: React.Dispatch<React.SetStateAction<FeedbackItem[]>>) => {
    try {
        const res: AxiosResponse<{ success: boolean; message: string }> = await axios.post("http://localhost:8000/feedback", feedback, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (res.data.success) {
            setFeedBackList((prev) => [...prev, feedback])
            console.log("Feedback added successfully:", res.data);
        }
        else {
            console.error(res.data.message);
        }
    } catch (error) {
        console.error("Error adding new feedback:", error);
    }
};
