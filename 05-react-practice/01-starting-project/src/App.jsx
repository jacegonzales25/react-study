import { useState } from "react"

import Header from "./components/Header"
import Input from "./components/Input"

function App() {

  const [investments, setInvestments] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(investmentIdentifier, newValue) {
    setInvestments((prevInvestments) => {
      return {
        ...prevInvestments,
        [investmentIdentifier]: newValue,
      };
    });
  }


  return (
    <>
      <Header />
      <Input onChange={handleChange}/>

    </>
  )
}

export default App
