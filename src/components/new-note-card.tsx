import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import { toast } from 'sonner'

export default () => {
    
    const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true)
    const [content, setContent] = useState('')

    function handleStartEditor () {
        setShouldShowOnboarding(false)
    }

    function handleContentChanged (event: ChangeEvent<HTMLTextAreaElement>) {
        const { value } = event.target

        if (value == '')
            setShouldShowOnboarding(true)

        setContent(value)

    }

    function handleSaveNote (event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        console.log(content)

        toast.success('Nota criada com sucesso')
        
    }

    function handleCloseEditor () {
        setShouldShowOnboarding(true)
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger className="text-left outline-none rounded-md bg-slate-700 
                p-5 gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-300 
                focus-visible:ring-2 focus-visible:ring-lime-400 flex flex-col">
                <span className="text-sm font-medium text-slate-200">
                    Adicionar nota
                </span>
                <p className="text-sm leading-6 text-slate-400">
                    Grave uma nota em áudio que será convertida em texto automaticamente
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t 
                from-black/60 to-black/0 pointer-events-none" />
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-slate-800/60" />
                <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 
                -translate-y-1/2 max-w-[650px] w-full bg-slate-700 rounded-md flex 
                flex-col outline-none h-[60vh]">
                    <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100" onClick={handleCloseEditor}>
                        <X className="size-6" />
                    </Dialog.Close>
                    <form onSubmit={handleSaveNote} className="flex flex-col flex-1">
                        <div className="flex flex-1 flex-col gap-3 p-5">
                            <span className="text-sm font-medium text-slate-200">
                                Adicionar nota
                            </span>
                            {shouldShowOnboarding ? (
                                <p className="text-sm leading-6 text-slate-400">
                                    Comece <button className="font-medium text-lime-400 hover:underline">gravando uma nota</button> em áudio ou se preferir <button className="font-medium text-lime-400 hover:underline" onClick={handleStartEditor}>utilize apenas texto</button>.
                                </p>
                            ) : (
                                <textarea autoFocus className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none" onChange={handleContentChanged} />
                            )}
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-lime-400 text-lime-950 py-4 text-center text-sm outline-none font-medium hover:bg-lime-500">
                            Salvar nota
                        </button>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>

        </Dialog.Root>
        
    )
}
