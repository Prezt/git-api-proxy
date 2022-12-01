import express from "express"
import { usersController } from "./users/users-controller.js";

const router = express.Router(); 
export const appRouter = router
    .get('/', async (req, res) =>  { 
        res.send("<html><head>API HOSTED ON /api/users/</head><body><p>Available endpoints: <ol><li>/api/users/</li><li>/api/users/:username/details</li><li>/api/users/:username/repos</li></ol></p></body></html>") 
    })
    .get('/api/users', usersController.fetchAll)
    .get('/api/users/:username/details', usersController.fetchDetailsByUsername)
    .get('/api/users/:username/repos', usersController.fetchReposByUsername)
