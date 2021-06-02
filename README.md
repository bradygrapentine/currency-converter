# Currency Converter

![SDG](./docs/button.png)

ACCESS KEY: cbd692cf88946332fe6505adff3b3fa1

LATEST RATES ENDPOINT: https://api.exchangeratesapi.io/v1/latest?access_key=cbd692cf88946332fe6505adff3b3fa1
&base=USD

API Response:

{
"success": true,
"timestamp": 1519296206,
"base": "USD",
"date": "2021-03-17",
"rates": {
"GBP": 0.72007,
"JPY": 107.346001,
"EUR": 0.813399,
}
}

HISTORICAL RATES ENDPOINT: https://api.exchangeratesapi.io/v1/2013-12-24?access_key=cbd692cf88946332fe6505adff3b3fa1&base=USD

API Response:

{
"success": true,
"historical": true,
"date": "2013-12-24",
"timestamp": 1387929599,
"base": "GBP",
"rates": {
"USD": 1.636492,
"EUR": 1.196476,
"CAD": 1.739516
}
}

In this assignment, you will create a React application that will convert various currencies.

Objectives

    Work with an API to display data
    Work with React
    Work with the React lifecycle (componentDidMount with classes or useEffect with hooks)

Requirements

    Use this API documentation to build a page that allows for conversion between multiple currencies - Note, do not specify the optional list of currencies, allow your code to dynamically determine them.

Explorer Mode

    - Create a page that loads and shows the current currency conversion rates.

<!-- DONE -->

    - Design the page yourself or use utility CSS libraries like: Bootstrap or Bulma or Tailwind
    Use USD as the base currency.

<!-- DONE -->

    - Allow the user to enter a currency amount (allow for decimal amounts like 42.12) in USD.

<!-- DONE -->

    - Show the converted amount in each of the available currencies.
        Either update as the user types or include a button that performs the conversion when clicked.

<!-- DONE -->

    - Show the currency only two decimal places. For example, do not show 42.123456789 only show 42.12
    -- You may need this method to help. How is your code dealing with the truncation? Is it rounding? Is it rounding fairly? How might you change this behavior?

<!-- DONE -->

Adventure Mode

    - Ensure that invalid data is not converted. If the input cannot be interpreted as a number, do not convert that input. Do you want to allow negative numbers?

<!-- DONE -->

    - Change the style of the input field to indicate when the number is invalid, perhaps change the input's color to red, or put a border around it?

    <!-- - Allow the user to choose a new base currency other than USD. -->

    - Allow the user to use a specific day in the past.

        HINT
        Fetch the conversion rates for that day.
        Show the updated conversion rates and converted amount.

Epic Mode

    - Use react router to allow the user to specify the base currency in the URL
