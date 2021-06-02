import React from 'react'

export function ConvertedValues(props) {
  return (
    <ul>
      <h4>Converted Totals: </h4>
      {Object.entries(props.conversionRates.rates).map((currency) => {
        return (
          <li key={currency[0]}>
            <strong>
              {currency[0]}/{props.conversionRates.base}:{' '}
              {(Math.floor(currency[1] * props.amount * 100) / 100).toFixed(2)}
            </strong>
          </li>
        )
      })}
    </ul>
  )
}
