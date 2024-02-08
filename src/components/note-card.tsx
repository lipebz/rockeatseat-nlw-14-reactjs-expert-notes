interface NoteCardProps {
    note: {
        date: Date
        content: string
    }
}

export function NoteCard({ note }: NoteCardProps) {
    return (
        <button className="text-left outline-none rounded-md bg-slate-800 p-5 
        gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-300 
        focus-visible:ring-2 focus-visible:ring-lime-400 flex flex-col">
            <span className="text-sm font-medium text-slate-200">
                {note.date.toISOString()}
            </span>
            <p className="text-sm leading-6 text-slate-400">
                {note.content}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t 
            from-black/60 to-black/0 pointer-events-none" />
        </button>
    )
}