import React, { useReducer, useRef, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { Container} from './Container';

const reducerBillAndPeople = (state, action) => {
  switch (action.type) {
    case "update-value":
      return {
        ...state,
        inputValue: action.payload,
        inputWrong: "",
        spanMensage: ""
      }

    case "wrong-input":
      return {
        ...state,
        inputValue: action.payload.newValue,
        inputWrong: "error",
        spanMensage: action.payload.mensage
      }

    default:
      return state
  }
}

const reducerCustomTipInput = (state, action) => {
  switch (action.type) {
    case "update-value":
      return {
        ...state,
        customValue: action.payload,
        inputWrong: "",
      }

    case "wrong-input":
      return {
        ...state,
        customValue: action.payload,
        inputWrong: "error",
      }
  
    default:
      return state
  }
}

const inicialState = {
  inputValue: "",
  inputWrong: "",
  spanMensage: "",
}

function App() {
  const [tipSelected, setTipSelected] = useState({0:"",1:"",2:"",3:"",4:"",5:""})
  const [tipValue, setTipValue] = useState("")
  const [customTipInput, dispatchCustomTipInput] = useReducer(reducerCustomTipInput, {inputWrong: "", customValue: ""})
  const [bill, dispatchBill] = useReducer(reducerBillAndPeople, inicialState)
  const [numberOfPeople, dispatchNumberOfPeople] = useReducer(reducerBillAndPeople, inicialState)
  const [totalBill, setTotalBill] = useState("")
  const [tipAmount, setTipAmount] = useState("")
  const [resetActive, setResetActive] = useState("")
  
  return (
    <Container>
      <Header />
      <Main 
        tipSelected={tipSelected}
        setTipSelected={setTipSelected}
        tipValue={tipValue}
        setTipValue={setTipValue}
        customTipInput={customTipInput}
        dispatchCustomTipInput={dispatchCustomTipInput}
        bill={bill}
        dispatchBill={dispatchBill}
        numberOfPeople={numberOfPeople}
        dispatchNumberOfPeople={dispatchNumberOfPeople}
        totalBill={totalBill}
        setTotalBill={setTotalBill}
        tipAmount={tipAmount}
        setTipAmount={setTipAmount}
        resetActive={resetActive}
        setResetActive={setResetActive}
      />
      <Footer />
    </Container>
  );
}

export default App;