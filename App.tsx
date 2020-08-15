import React from 'react'
import {Routes} from './src/routes/Routes'
import {UserProvider} from './src/store/userStore'
import {NoteProvider} from './src/store/noteStore'

const App: React.FC = () => {
  return (
    <UserProvider>
      <NoteProvider>
        <Routes />
      </NoteProvider>
    </UserProvider>
  )
}

export default App
