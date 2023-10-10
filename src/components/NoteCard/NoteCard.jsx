export default function NoteCard ({ note }) {
    return (
        <>
            <h2>{note.text}</h2>
            <p>{note.createdAt.toLocaleString()}</p>
        </>
    )
}