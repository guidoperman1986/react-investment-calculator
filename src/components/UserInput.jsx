import React from 'react'

export const UserInput = () => {
  return <div id="user-input">
    <div className="input-group">
      <p>
        <label htmlFor="initial">Initial Investment</label>
        <input id="initial" type="number" />
      </p>
      <p>
        <label htmlFor="anual">Annual Investment</label>
        <input id="annual" type="number" />
      </p>

    </div>

    <div className="input-group">
      <p>
        <label htmlFor="initial">Initial Investment</label>
        <input id="initial" type="number" />
      </p>
      <p>
        <label htmlFor="anual">Annual Investment</label>
        <input id="annual" type="number" />
      </p>
    </div>
  </div>
}
