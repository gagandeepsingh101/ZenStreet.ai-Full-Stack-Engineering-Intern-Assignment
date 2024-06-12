import React, { useEffect } from 'react';
import { fetchFeedBackList } from '../utils/feedback.utils';

// Define the Props type for the FeedbackList component
type Props = {
    setFeedBackList: React.Dispatch<React.SetStateAction<{
        name: string;
        feedback: string;
    }[]>>;
    feedbackList: {
        name: string,
        feedback: string
    }[];
};

// FeedbackList component definition
const FeedbackList: React.FC<Props> = ({ feedbackList, setFeedBackList }) => {

    // useEffect hook to fetch the feedback list when the component mounts
    useEffect(() => {
        fetchFeedBackList(setFeedBackList); // Fetch the feedback list and update the state
    }, [setFeedBackList]); // Dependency array ensures the effect runs only when setFeedBackList changes

    console.log(feedbackList); // Log the feedback list to the console for debugging

    return (
        <div className="w-full h-fit flex flex-col items-center justify-evenly mx-auto lg:w-1/3 lg:h-full">
            <h5 className="text-xl font-bold lg:text-2xl my-2 lg:my-3">Previous Feedback</h5>
            <div className='w-full lg:h-5/6 lg:overflow-hidden lg:overflow-y-auto'>
                {/* Map through the feedbackList and render each feedback */}
                {feedbackList.map(({ name, feedback }) => (
                    <div className='bg-gray-300 w-10/12 mx-auto my-2 px-1 py-2 rounded-xl' key={name}>
                        <p><span className='font-semibold lg:font-bold'>FeedBackName: </span>{name}</p>
                        <p className='text-wrap'><span className='font-semibold lg:font-bold'>FeedBackDetail: </span>{feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedbackList;
