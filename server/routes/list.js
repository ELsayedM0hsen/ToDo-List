import express from "express";
import { createItem, allItem, updateItem, deleteItem } from "../controllers/list.js";


const router = express.Router();

router.post("/",createItem);
router.get("/list",allItem);
router.put("/:itemId",updateItem);
router.delete("/:itemId",deleteItem);

export default router;