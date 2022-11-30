import express from "express"

import * as users from "./users/users-controller.js";

const router = express.Router(); 
export const getUsersRouter = router
    .get('/', users.fetchAll)
    .get('/:username/details', users.fetchDetailsByUsername)
    .get('/:username/repos', users.fetchReposByUsername)