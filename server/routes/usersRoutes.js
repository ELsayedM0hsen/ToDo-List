import express from 'express';
import { getAllUsers } from '../controllers/usersControllers.js';
import { verifyToken } from '../controllers/verifyJWT.js';


const router = express.Router();

router.use(verifyToken)
router.get("/",getAllUsers);



export default router;