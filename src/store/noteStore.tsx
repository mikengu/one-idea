import React, {createContext, useState, useMemo, ReactNode, useContext, useCallback} from 'react'

const idGen = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

interface ContextProps {
  children: ReactNode
}

interface Note {
  id: string
  text: string
  favorite: boolean
}

interface NoteContextValue {
  note: Note[]
  addNote: (note: string) => void
  toggleFavorite: (id: string) => void
}

const contextDefault = {
  note: [],
  addNote: () => {},
  toggleFavorite: () => {}
}

const NoteContext = createContext<NoteContextValue>(contextDefault)

export const NoteProvider: React.FC<ContextProps> = ({children}) => {
  const [note, setNote] = useState<Note []>([])

  const addNote = useCallback(text => {
    const newNote = [...note, {id: idGen(), text, favorite: false}]
    setNote(newNote)
  }, [note])

  const toggleFavorite = useCallback(id => {
    const editedNote = note.map(obj => obj.id === id ? {...obj, favorite: !obj.favorite} : obj)
    setNote(editedNote)
  }, [note])

  const value = useMemo(() => ({note, addNote, toggleFavorite}), [note, addNote, toggleFavorite])

  return (
    <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
  )
}

export const useNoteStore = () => {
  return useContext(NoteContext)
}
