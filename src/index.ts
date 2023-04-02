import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { userRouter } from './routes/user.route';
import { departmentRouter } from './routes/department.route';
import swaggerUi from "swagger-ui-express";
import { loggerMiddleware } from './middlewares/logger.middleware';

const app = express();

// middlewares
app.use(loggerMiddleware);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// swagger docs
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
        
      },
    
    }));

app.use('/users', userRouter);
app.use('/departments', departmentRouter);

app.listen(3000, () => {

    console.log('Server is running on port 3000');
    });