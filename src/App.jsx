import { useState } from "react";

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";


function App() {
  const [userInput,setUserInput]= useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

const inputIsValid = userInput.duration >= 1; 

function handleChange (inputIdentifier, newvalue) {
  setUserInput(prevUserInput => {
    return {
      ...prevUserInput,
      [inputIdentifier]: +newvalue
    };
  });
}
  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    {!inputIsValid && (
      <p className="center">AYYA!!! pls enter a valid duration .</p>
      )}
    { inputIsValid && <Results input={userInput} /> }
    </>
  )
}

export default App
