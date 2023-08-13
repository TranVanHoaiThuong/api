import express from 'express';
import 'dotenv/config';
import userRouter from './routes/userRoutes.js';
const app = express();

app.use('/users', userRouter);

// Create app
app.listen(process.env.PORT, () => {
    console.log('this server using port ' + process.env.PORT);
});