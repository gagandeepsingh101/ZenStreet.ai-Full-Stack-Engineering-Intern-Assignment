import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState({
    name: "",
    feedback: ""
  });

  const [feedbackList, setFeedbackList] = useState<{ name: string, feedback: string }[]>([]);

  return (
    <div className="w-screen min-h-screen bg-slate-200 flex flex-col gap-3 lg:h-screen overflow-hidden">
      <h1 className="text-center py-4 text-xl font-bold md:text-2xl lg:h-1/6"> Simple Feedback Management System</h1>
      <div className=" w-full h-fit flex flex-col p-2 lg:flex-row lg:h-5/6 justify-evenly">
        <FeedbackForm setFeedback={setFeedback} feedback={feedback} setFeedBackList={setFeedbackList} />
        <FeedbackList setFeedBackList={setFeedbackList} feedbackList={feedbackList} />

      </div>
    </div>
  )
}

export default App
