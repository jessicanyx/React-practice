import React, { useReducer } from "react";
import '../Styles/calculator.css';

const initialState = {
  num1: 0,
  num2: 0,
  result: "no result yet",
};

function reducer(state, action) {
  if (action.type === "SET_NUM_ONE") return { ...state, num1: action.number };
  if (action.type === "SET_NUM_TWO") return { ...state, num2: action.number };
  if (action.type === "ADD")
    return { ...state, result: state.num1 + state.num2 };
  if (action.type === "SUBSTRACT")
    return { ...state, result: state.num1 - state.num2 };
  if (action.type === "CLEAR") return initialState;
}

export default function SimpleCalculator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="content">
      <div className="numBar">
        <h2>Number 1</h2>
        {numbers.map((number) => (
          <button className="numBtn"
            key={number}
            onClick={() => dispatch({ type: "SET_NUM_ONE", number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="numBar">
        <h2>Number 2</h2>
        {numbers.map((number) => (
          <button className="numBtn"
            key={number}
            onClick={() => dispatch({ type: "SET_NUM_TWO", number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="numBar">
        <h2>Actions</h2>
        <button className="numBtn" onClick={() => dispatch({ type: "ADD" })}>+</button>
        <button className="numBtn" onClick={() => dispatch({ type: "SUBSTRACT" })}>-</button>
        <button className="numBtn" onClick={() => dispatch({ type: "CLEAR" })}>C</button>
      </div>
      <div className="resultBar">
        <h2>Result: {state.result}</h2>
      </div>
    </div>
  );
}
