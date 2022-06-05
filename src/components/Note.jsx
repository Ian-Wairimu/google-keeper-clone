import "./styles/note.module.css"

function Note(note) {
    return (
        <>
            <main>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
                <button onClick={() => {
                    note.delete(note.id)
                }}>DELETE</button>
            </main>
        </>
    );
}

export default Note;