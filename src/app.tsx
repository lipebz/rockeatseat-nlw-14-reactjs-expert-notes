import logo from './assets/logo-nlw-white.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} />

      <form className="w-full">
        <input 
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight 
          outline-none placeholer:text-slate-500" 
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard />
        <NoteCard note={{date: new Date, content: 'asdasd'}} />
        <NoteCard note={{date: new Date, content: 'asdasd'}} />
        <NoteCard note={{date: new Date, content: 'asdasd'}} />
        <NoteCard note={{date: new Date, content: 'asdasd'}} />
        <NoteCard note={{date: new Date, content: 'asdasd'}} />
        <NoteCard note={{date: new Date, content: 'asdasd'}} />
      </div>
    </div>
  )
}
