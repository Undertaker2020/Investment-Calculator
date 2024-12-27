import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import Results from "./components/Results.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    })
    console.log(userInput)

    const inputIsValid = userInput.duration >= 1;

    const handleChange = (inputIdentifier, newValue) => {
        if (inputIdentifier === 'duration') {

            newValue = Math.max(1, +newValue)

        }
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: parseInt(newValue, 10),
            }
        });
    };
    console.log(typeof userInput.initialInvestment);
  return (
      <>
          <Header/>
          <UserInput onChange={handleChange} userInput={userInput} />
          {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
          {inputIsValid && <Results userInput={userInput}/>}
      </>
  )
}

export default App
