import express from 'express';
import { getUsersRouter} from './src/router.js'
const app = express();
const port = 5000;

app.listen(port, (req, res) => {
    console.log(`App is listening at port ${port}`)
})

app.use('/api/users', getUsersRouter)