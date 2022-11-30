import express from "express"

import { usersController } from "./users/users-controller.js";

const router = express.Router(); 
export const usersRouter = router
    .get('/', usersController.fetchAll)
    .get('/:username/details', usersController.fetchDetailsByUsername)
    .get('/:username/repos', usersController.fetchReposByUsername)