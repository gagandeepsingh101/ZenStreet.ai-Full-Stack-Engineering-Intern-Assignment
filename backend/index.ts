import { Request, Response } from 'express';
import dotenv from 'dotenv';
import app from './src/app';

dotenv.config();


const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Server start successfully'
  });
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
