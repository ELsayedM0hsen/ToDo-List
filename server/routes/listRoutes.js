import express from "express";
import { createTask, allUserTasks, updateTask, deleteTask } from "../controllers/listControllers.js";
import { verifyToken } from "../controllers/verifyJWT.js";



const router = express.Router();
router.use(verifyToken);
router.post('/list',createTask);
// router.get('/list', allUserTasks);
router.get('/list', allUserTasks);
router.put('/list/:taskId', updateTask);
router.delete('/list/:taskId',deleteTask);

export default router;
