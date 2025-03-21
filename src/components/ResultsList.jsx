import React, { useId } from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment';

export const ResultsList = ({ investmentDetails }) => {
  const resultsData = calculateInvestmentResults(investmentDetails);

  if (!resultsData.length) return;

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return <div id="result">
    <table>
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData, index) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;

          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td> {yearData.year} </td>
              <td> {formatter.format(yearData.valueEndOfYear)}   </td>
              <td> {formatter.format(yearData.interest)} </td>
              <td> {formatter.format(totalInterest)} </td>
              <td> {formatter.format(totalAmountInvested)} </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
}
