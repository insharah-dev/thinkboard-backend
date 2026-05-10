import note from "../models/Note.js";
import Note from "../models/Note.js"

export async function getAllNOtes(_, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 })
        res.status(200).json(notes)
    } catch (error) {
        console.error("error in getAllNotes controller", error);
        res.status(500).json({ message: "Error in fetching notes" })
    }
}

export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id)
        if (!note) return res.status(404).json({ message: "note not found" })
        res.json(note)
    } catch (error) {
        console.error("error in getNoteById controller", error);
        res.status(500).json({ message: "error in fecting specific note" })
    }
}


export async function createNotes(req, res) {
    try {
        const { title, content } = req.body
        const note = new Note({ title, content })
        const savednote = await note.save()
        res.status(201).json(savednote)
    } catch (error) {
        console.error("error in createNote controller", error);
        res.status(500).json({ message: "All field required!" })
    }
}

export async function updateNotes(req, res) {
    try {
        const { title, content } = req.body;
        const updatedNote = await note.findByIdAndUpdate(
            req.params.id,
            { title, content },
            {
                new: true,
            }
        );
        if (!updatedNote) return res.status(404).json({ message: "Note not found" })
        res.status(200).json({ updatedNote })

    } catch (error) {
        console.error("error in updatedNote controller", error);
        res.status(500).json({ message: "error in updating notes" })
    }
}

export async function deleteNotes(req, res) {
    try {
        const { title, content } = req.body;
        const deletedNote = await note.findByIdAndDelete(req.params.id, { title, content })

        if (!deletedNote) return res.status(404).json({ message: "Note not found" })
        res.status(200).json({ message: "note deleted successfully!" })
    } catch (error) {
        console.error("error in daletedNote controller", error);
        res.status(500).json({ message: "error in deleting notes." })
    }
}