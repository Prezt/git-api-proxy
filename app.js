import express from 'express';
import { usersRouter } from './src/router.js'
const app = express();
const port = 5000;

app.listen(port, (req, res) => {
    console.log(`App is listening at port ${port}`)
})

app.use('/api/users', usersRouter)

export default app