import React, { useState } from "react";
import "../src/style.css"; // Assuming this is your CSS file

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  // Function to display the clicked value on the input
  function display(value) {
    setInputValue(inputValue + value);
  }

  // Function to calculate the result
  function calculate() {
    try {
      let result = eval(inputValue);
      setInputValue(result.toString());
    } catch (error) {
      setInputValue("Error");
    }
  }

  // Function to clear the input
  function clear() {
    setInputValue("");
  }

  return (
    <div className="calculator-container">
      <div className="calculator">
        <input
          type="text"
          className="value"
          value={inputValue}
          readOnly
          placeholder="Enter a number"
        />
        <span className="num clear" onClick={clear}>C</span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display("+")}>+</span>
        <span onClick={() => display(".")}>.</span>
        <span onClick={calculate}>=</span>
      </div>
      <footer className="footer">
        All copyrights are reserved with @kanicodes
      </footer>
    </div>
  );
};

export default Calculator;
