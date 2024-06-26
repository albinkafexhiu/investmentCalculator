import React, { useState } from "react";

import "../index.css";
import classes from "./Form.module.css"

const initialUserInput ={
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10,
};

const Form = (props) => {
//   const [enteredSavings, setSavings] = useState(10000);
//   const [enteredContribution, setContribution] = useState(1200);
//   const [enteredExpectedReturn, setExpectedReturn] = useState(7);
//   const [enteredDuration, setDuration] = useState(10);

  const[userInput,setUserInput] = useState(initialUserInput);
  

  const submitHandler = (event) => {
    event.preventDefault();
    
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    console.log("RESET");
    setUserInput(initialUserInput)
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value, 
      };
    });
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={userInput['current-savings']}
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            value={userInput['yearly-contribution']}
            id="yearly-contribution"
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput['expected-return']}
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput['duration']}
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
