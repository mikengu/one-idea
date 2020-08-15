import React from 'react'
import {Routes} from './src/routes/Routes'
import {UserProvider} from './src/store/userStore'

const App: React.FC = () => {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  )
}

export default App
