import express from "express"

import { rootController } from "./users/root-controller.js";
import { usersController } from "./users/users-controller.js";

const router = express.Router(); 
export const rootRouter = router.get('/', rootController.sendWelcomeMessage);
export const usersRouter = router
    .get('/', usersController.fetchAll)
    .get('/:username/details', usersController.fetchDetailsByUsername)
    .get('/:username/repos', usersController.fetchReposByUsername)
