import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import feedbackRouter from './routes/feedback.routes';
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(feedbackRouter);



export default app;