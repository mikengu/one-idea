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
  setNote: (note: string) => void
}

const contextDefault = {
  note: [],
  setNote: () => {}
}

const NoteContext = createContext<NoteContextValue>(contextDefault)

export const NoteProvider: React.FC<ContextProps> = ({children}) => {
  const [note, settingNote] = useState<Note []>([])

  const setNote = useCallback(text => {
    const newNote = [...note, {id: idGen(), text}]
    settingNote(newNote)
  }, [note])

  const value = useMemo(() => ({note, setNote: setNote}), [note, setNote])

  return (
    <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
  )
}

export const useNoteStore = () => {
  return useContext(NoteContext)
}
