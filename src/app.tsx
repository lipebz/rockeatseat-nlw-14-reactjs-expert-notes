import { ChangeEvent, useState } from 'react'
import logo from './assets/logo-nlw-white.svg'
import NewNoteCard from './components/new-note-card'
import NoteCard from './components/note-card'

interface Note {
  id: number
  date: Date
  content: string
}

export default () => {
  
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState<Note[]>(() => {

    const storagedNotes = localStorage.getItem('notes')

    if (storagedNotes) {
      return JSON.parse(storagedNotes)
    }

    return []
  })

  function onNoteCreated(content: string): void {
    const newNote = {
      id: notes.length + 1,
      date: new Date(),
      content
    }

    const notesArray = [newNote, ...notes]

    setNotes(notesArray)

    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  function onNoteDeleted(id: number) {
    const notesArray = notes.filter(note => note.id!== id)

    setNotes(notesArray)

    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>): void {

    const value = event.target.value

    setSearch(value)

  }

  const filteredNotes = search !== ''
    ? notes.filter(note => note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()) )
    : notes

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <img src={logo} />

      <form className="w-full">
        <input 
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight 
          outline-none placeholer:text-slate-500"
          onChange={handleSearch} 
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        
        {filteredNotes.map(note => (<NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted} />))}
      </div>
    </div>
  )
}
