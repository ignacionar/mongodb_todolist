import { Router } from "express";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo.js";

// FOLDER TREE
const router = Router();

// /api/v1/todo
router.get('/', getTodos).put('/', updateTodo).post('/', createTodo);

// DYNAMIC URL
//            REQ PARAMS
router.delete('/:id', deleteTodo)

export { router as TodoRouter };