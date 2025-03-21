import React, { useState } from 'react'
import { Header } from './components/Header'
import { ResultsList } from './components/ResultsList'
import { UserInput } from './components/UserInput'

function App() {
  const [investmentDetails, setInvestmentDetails] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = () => {
    return (
      investmentDetails.initialInvestment > 0 &&
      investmentDetails.annualInvestment > 0 &&
      investmentDetails.expectedReturn > 0 &&
      investmentDetails.duration > 1
    )
  }

  return (
    <div>
      <Header></Header>

      <UserInput
        investmentDetails={investmentDetails}
        setInvestmentDetails={setInvestmentDetails}
      ></UserInput>
      {
        !inputIsValid() && (
          <div className="center">
            Please enter valid input
          </div>
        )
      }

      {
        inputIsValid() && (
          <ResultsList investmentDetails={investmentDetails}></ResultsList>
        )
      }
    </div>
  )
}

export default App
