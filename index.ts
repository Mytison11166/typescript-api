import express from 'express';
  import env from 'env';
  import usersRouter from './routes/users';

  dotenv.config();

  const app = express();
  const port = process.env.PORT || 3000;

  // Middleware to parse JSON
  app.use(express.json());

  // Use the users router
  app.use('/api/users', usersRouter);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });