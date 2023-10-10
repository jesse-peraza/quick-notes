import { useState, useEffect } from 'react';
import * as notesAPI from '../../utilities/notes-api';
import NoteCard from '../../components/NoteCard/NoteCard';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';


export default function NotesListPage({notes, setNotes}) {
  const [newNotes, setNewNotes] = useState([])

  useEffect(function() {
    (async function() {
      const allNotes = await notesAPI.getAll()
      setNotes([...allNotes])
    })()
  }, [newNotes])

  const notesList = notes.map((note) => <NoteCard note={ note }/> )
  
  return (
    <>
      <NewNoteForm setNewNotes={ setNewNotes } />
      {notes ? notesList : 'No Notes Yet!'}
    </>
  );
}