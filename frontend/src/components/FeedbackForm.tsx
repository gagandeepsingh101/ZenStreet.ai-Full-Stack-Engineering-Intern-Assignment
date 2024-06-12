import React, { useState } from 'react';
import { addNewFeedBack } from '../utils/feedback.utils';

// Define the Feedback type
type Feedback = {
    name: string;
    feedback: string;
};

// Define the Props type for the FeedbackForm component
type Props = {
    setFeedback: React.Dispatch<React.SetStateAction<Feedback>>;
    feedback: Feedback;
    setFeedBackList: React.Dispatch<React.SetStateAction<{
        name: string;
        feedback: string;
    }[]>>;
};

// FeedbackForm component definition
const FeedbackForm: React.FC<Props> = ({ setFeedback, feedback, setFeedBackList }) => {
    // State for managing the loading status of the form submission
    const [isLoading, setIsLoading] = useState(false);
    // State for managing error messages
    const [error, setError] = useState<string | null>(null);

    // Handle changes in input fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        // Update the feedback state with the new value
        setFeedback(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Basic validation: check if both fields are filled
        if (!feedback.name || !feedback.feedback) {
            setError("Both fields are required"); // Set error message
            return; // Stop form submission
        }

        setIsLoading(true); // Set loading state to true
        try {
            // Call the addNewFeedBack function to submit the feedback
            await addNewFeedBack(feedback, setFeedBackList);
            // Reset the feedback state after successful submission
            setFeedback({
                name: "",
                feedback: ""
            });
            setError(null); // Clear any existing error messages
        } catch (error) {
            console.error("Error submitting feedback:", error); // Log error to console
            setError("Failed to submit feedback. Please try again."); // Set error message
        } finally {
            setIsLoading(false); // Set loading state to false
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-5/6 mx-auto h-fit gap-3 lg:px-4 lg:w-1/3">
            <label className="font-semibold" htmlFor="name">Enter Feedback Name</label>
            <input
                value={feedback.name}
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                className="focus:outline-none px-2 py-1 rounded-md shadow-lg lg:px-3 lg:py-2"
                aria-required="true" // Accessibility attribute indicating the field is required
            />
            <label className="font-semibold" htmlFor="feedback">Enter Feedback Detail</label>
            <textarea
                value={feedback.feedback}
                onChange={handleChange}
                name="feedback"
                id="feedback"
                className="focus:outline-none px-2 py-1 resize-none rounded-md shadow-lg h-20 lg:px-3 lg:py-2"
                aria-required="true" // Accessibility attribute indicating the field is required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error message if any */}
            <button
                type="submit"
                className={`bg-gray-500 text-white px-3 py-2 w-fit mx-auto rounded-md mt-4 font-bold hover:bg-gray-700 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isLoading} // Disable the button while loading
            >
                {isLoading ? "Submitting..." : "Add Feedback"} {/* Show loading text while submitting */}
            </button>
        </form>
    );
};

export default FeedbackForm;
