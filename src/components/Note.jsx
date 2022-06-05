import "./styles/note.module.css"
import DeleteIcon from '@mui/icons-material/Delete';

function Note(note) {
    return (
        <>
            <main>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
                <button onClick={() => {
                    note.delete(note.id)
                }}>
                    <DeleteIcon />
                </button>
            </main>
        </>
    );
}

export default Note;