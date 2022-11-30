import express from "express"

import { usersController } from "./users/users-controller.js";

const router = express.Router(); 
export const usersRouter = router
    .get('/', usersController.fetchAll)
    .get('/:username/details', usersController.fetchDetailsByUsername)
    .get('/:username/repos', usersController.fetchReposByUsername)

export const rootRouter = router.get('/', (req, res)=> res.status(200).send('App is working as it should'));