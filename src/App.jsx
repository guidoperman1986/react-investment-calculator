import React from 'react'
import { Header } from './components/Header'
import { UserInput } from './components/UserInput'
import { ResultsList } from './components/ResultsList'

function App() {
  return (
    <div>
      <Header></Header>

      <UserInput></UserInput>

      <ResultsList></ResultsList>
    </div>
  )
}

export default App
