import express from 'express';
import { usersRouter, rootRouter } from './src/router.js'
const app = express();

app.use('/', rootRouter)
app.use('/api/users', usersRouter)

export default app