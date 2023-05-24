import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import morgan from 'morgan';
import authenticateUser from './middleware/auth.js';

// db and authenticateUser

// routers
import authRouter from './routes/authRoutes.js';
import subscriptionsRouter from './routes/subscriptionsRoutes.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

// cookieParser
import cookieParser from 'cookie-parser';

//Load config
dotenv.config({ path: '../.env' });

const app: Application = express();
const PORT = process.env.PORT || 5002;

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cookieParser());

app.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.send('Hello World!');
});

// Register the authRouter
app.use('/api/v1/auth', authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async (): Promise<void> => {
  try {
    app.listen(PORT, (): void => {
      console.log(`    🎧 Server is listening on port ${PORT}... 🎧`);
    });
  } catch (error) {
    console.error("🛑 Couldn't connect to the database 🛑");
    console.error(`❌ Error: ${error.message} ❌`);
  }
};

start();
