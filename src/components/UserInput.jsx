import React from 'react'

export const UserInput = ({ investmentDetails, setInvestmentDetails }) => {
  const { initialInvestment, annualInvestment, expectedReturn, duration } = investmentDetails;

  function onInvestmentDetailsChange(event) {
    setInvestmentDetails(prevData => {
      return {
        ...prevData,
        [event.target.id]: +event.target.value
      }
    });
  }
  
  return <div id="user-input">
    <div className="input-group">
      <p>
        <label htmlFor="initial">Initial Investment</label>
        <input id="initialInvestment" type="number" value={initialInvestment} onChange={onInvestmentDetailsChange} />
      </p>
      <p>
        <label htmlFor="anual">Annual Investment</label>
        <input id="annualInvestment" type="number" value={annualInvestment} onChange={onInvestmentDetailsChange} />
      </p>

    </div>

    <div className="input-group">
      <p>
        <label htmlFor="initial">Expected Return</label>
        <input id="expectedReturn" type="number" value={expectedReturn} onChange={onInvestmentDetailsChange} />
      </p>
      <p>
        <label htmlFor="anual">Duration</label>
        <input id="duration" type="number" value={duration} onChange={onInvestmentDetailsChange} />
      </p>
    </div>
  </div>
}
