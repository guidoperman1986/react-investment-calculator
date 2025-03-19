import React from 'react'

export const UserInput = ({ setInvestmentDetails }) => {

  function onInvestmentDetailsChange(event) {
    setInvestmentDetails(prevData => {
      return {
        ...prevData,
        [event.target.id]: event.target.value
      }
    });
  }
  
  return <div id="user-input">
    <div className="input-group">
      <p>
        <label htmlFor="initial">Initial Investment</label>
        <input id="initialInvestment" type="number" onChange={onInvestmentDetailsChange} />
      </p>
      <p>
        <label htmlFor="anual">Annual Investment</label>
        <input id="annualInvestment" type="number" onChange={onInvestmentDetailsChange} />
      </p>

    </div>

    <div className="input-group">
      <p>
        <label htmlFor="initial">Expected Return</label>
        <input id="expectedReturn" type="number" onChange={onInvestmentDetailsChange} />
      </p>
      <p>
        <label htmlFor="anual">Duration</label>
        <input id="duration" type="number" onChange={onInvestmentDetailsChange} />
      </p>
    </div>
  </div>
}
