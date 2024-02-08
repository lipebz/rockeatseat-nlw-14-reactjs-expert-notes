export function NoteCard() {
    return (
        <button className="text-left outline-none rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden 
        relative hover:ring-2 hover:ring-slate-300 focus-visible:ring-2 focus-visible:ring-lime-400">
            <span className="text-sm font-medium text-slate-200">
                Adicionar nota
            </span>
            <p className="text-sm leading-6 text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam perspiciatis soluta itaque nisi aspernatur rerum corrupti ratione obcaecati quasi, sint porro maxime qui quis sed provident minima tempora esse!
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t 
            from-black/60 to-black/0 pointer-events-none" />
        </button>
    )
}