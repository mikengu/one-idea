import React, {createContext, useState, useMemo, ReactNode, useContext, useCallback} from 'react'

const idGen = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

interface ContextProps {
  children: ReactNode
}

interface Note {
  id: string;
  text: string;
}

interface NoteContextValue {
  note: Note[],
  addNote: (note: string) => void
}

const contextDefault = {
  note: [],
  addNote: () => {}
}

const NoteContext = createContext<NoteContextValue>(contextDefault)

export const NoteProvider: React.FC<ContextProps> = ({children}) => {
  const [note, setNote] = useState<Note []>([])

  const addNote = useCallback(text => {
    const newNote = [...note, {id: idGen(), text}]
    setNote(newNote)
  }, [note])

  const value = useMemo(() => ({note, addNote}), [note, addNote])

  return (
    <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
  )
}

export const useNoteStore = () => {
  return useContext(NoteContext)
}
