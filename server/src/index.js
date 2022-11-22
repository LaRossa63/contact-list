import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { AuthRouter, ListContactRouter } from './router/index.js';
import { ErrorMiddlewares } from './middlewares/index.js';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(morgan('dev'));

app.use('/api', AuthRouter, ListContactRouter);
app.use(ErrorMiddlewares);

const AppStart = async () => {
  try {
    await mongoose.connect(process.env.BD_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(process.env.PORT || 4000);
  } catch (e) {
    console.log(e);
  }
};

AppStart();
