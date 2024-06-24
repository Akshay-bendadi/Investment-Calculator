import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [userInput, SetUserInput] = useState({
    InitialInvestment: 10000,
    AnnualInvestment: 1200,
    ExpectedReturn: 6,
    Duration: 10,
  });

  const inputValidation = userInput.Duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    SetUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputValidation && (
        <p className="center">Duration should be greater than 1</p>
      )}
      {inputValidation && <Result input={userInput} />}
    </>
  );
}

export default App;
