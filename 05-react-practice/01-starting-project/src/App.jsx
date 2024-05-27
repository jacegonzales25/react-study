import { useState } from "react"

import Header from "./components/Header"
import Input from "./components/Input"
import Results from "./components/Results";

function App() {

  const [investments, setInvestments] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const validInput = investments.duration >= 1

  function handleChange(investmentIdentifier, newValue) {
    setInvestments((prevInvestments) => {
      return {
        ...prevInvestments,
        // the + value makes the string into a number
        [investmentIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <Input onChange={handleChange} investments={investments}/>
      {!validInput && <p className="center">Please add valid input</p>}
      {validInput && <Results investments={investments}/>}
    </>
  )
}

export default App
