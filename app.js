import express from 'express';
import { usersRouter, rootRouter } from './src/router.js'
const app = express();
const port = process.env.PORT || 5000;

app.use('/', rootRouter)
app.use('/api/users', usersRouter)

export default app