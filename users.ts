import { Router, Request, Response } from 'express';

  const router = Router();

  // Example: Protect this route with a token
  router.get('/', (req: Request, res: Response) => {
    const token = req.query.token as string;

    // Validate the token (this is a simple example)
    if (token === process.env.API_TOKEN) {
      // Redirect to a success URL if the token is valid
      res.redirect('https://example.com/success');
    } else {
      // Redirect to an error URL if the token is invalid
      res.redirect('https://example.com/error');
    }
  });

  export default router;