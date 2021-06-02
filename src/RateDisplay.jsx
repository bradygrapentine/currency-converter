import React from 'react'

export function RateDisplay(props) {
  return (
    <ul>
      <h4>Conversion Rates: </h4>
      {Object.entries(props.conversionRates.rates).map((currency) => {
        return (
          <li key={currency[0]}>
            <strong>
              {currency[0]}/{props.conversionRates.base}: {currency[1]}
            </strong>{' '}
          </li>
        )
      })}
    </ul>
  )
}
