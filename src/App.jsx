import React, { useState } from 'react'
import { Header } from './components/Header'
import { UserInput } from './components/UserInput'
import { ResultsList } from './components/ResultsList'

function App() {
  const [investmentDetails, setInvestmentDetails] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  })

  return (
    <div>
      <Header></Header>

      <UserInput
        setInvestmentDetails={setInvestmentDetails}
      ></UserInput>

      <ResultsList></ResultsList>
    </div>
  )
}

export default App
