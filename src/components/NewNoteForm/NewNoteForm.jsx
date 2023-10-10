import { useState } from 'react';
import * as notesAPI from '../../utilities/notes-api'

export default function NewOrderForm({ setNewNotes }) {
  const [formData, setFormData] = useState({ text: '' })

  function handleChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value}
    setFormData(newFormData)
}

  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
        notesAPI.createNote(formData)
        setNewNotes(formData)
        setFormData({text: ''})
    } catch(err) {
        console.log(err)
    }
}

return(
    <form onSubmit={handleSubmit}>
        <label>Note Text: </label>
        <input type="text" name="text" onChange={handleChange} value={formData.text}/>
        <button type="submit">Add Note</button>
    </form>
)
}