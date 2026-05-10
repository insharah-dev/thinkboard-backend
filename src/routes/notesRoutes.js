import express from "express";
import { createNotes, deleteNotes, getAllNOtes, getNoteById, updateNotes } from "../controllers/notesController.js";

const router = express.Router();

router.get("/getAll", getAllNOtes);
router.get("/getOne/:id", getNoteById);
router.post("/create", createNotes);
router.put("/update/:id", updateNotes);
router.delete("/delete/:id", deleteNotes);

export default router;