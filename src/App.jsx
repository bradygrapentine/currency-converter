import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { ConvertedValues } from './ConvertedValues'
import { RateDisplay } from './RateDisplay'

export function App() {
  const [conversionRates, setConversionRates] = useState({
    rates: {},
  })

  const [amount, setAmount] = useState(0)

  // @ts-ignore
  useEffect(async () => {
    const response = await axios.get(
      'http://api.exchangeratesapi.io/v1/latest?access_key=97e88214d9d99d1b66646cfba969b121'
    )
    setConversionRates(response.data)
    console.log(response.data)
  }, [])

  return (
    <>
      <header>
        <h1>Currency Converter</h1>
        <section>
          <p>Value in EUR</p>
          <input
            value={amount}
            onChange={(event) =>
              // @ts-ignore
              event.target.value >= 0
                ? setAmount(Number(event.target.value))
                : 0
            }
          />
        </section>
      </header>
      <main>
        <RateDisplay conversionRates={conversionRates} />
        <ConvertedValues conversionRates={conversionRates} amount={amount} />
      </main>
    </>
  )
}
