import React, { useEffect } from 'react';
import BillCalculedField from '../BillCalculedField';
import Fieldset from '../Fieldset';
import Label from "../Label";
import { Container, TipPercentCustomInput, ResetButton, TipPercentButton } from './styles';

function Main(props) {
  const changeTipSelected = tipPositionInObj => {
    const newTipSelected = { 0: "", 1: "", 2: "", 3: "", 4: "", 5: "" }
    const tipClickedIsTheSameAsSelected = props.tipSelected[tipPositionInObj] !== "active"

    if (tipClickedIsTheSameAsSelected) newTipSelected[tipPositionInObj] = "active"

    props.setTipSelected(newTipSelected)
  }
  const changeBillAndNumberOfPeopleInputValue = (inputValue, dispatch, isNumberOfPeople) => {
    let mensage = valideteInput(inputValue)

    if (isNumberOfPeople && !mensage) mensage = isZero(inputValue)

    if (mensage) {
      dispatch({ type: "wrong-input", payload: { newValue: inputValue, mensage: mensage } })
    } else {
      dispatch({ type: "update-value", payload: inputValue })
    }
  }
  const valideteInput = (inputValue, isCustomInput = false) => {
    inputValue = inputValue.replaceAll(",", ".")
    let mensage = ""

    if (isNaN(inputValue)) {
      mensage = "Only numbers"
    } else if (inputValue < 0) {
      mensage = "Must be a positive value"
    }

    return isCustomInput ? !!mensage : mensage
  }
  const isZero = inputValue => inputValue == 0 && inputValue !== "" ? "Can't be zero" : ""
  const changeCustomInputValue = inputValue => {
    inputValue = removeIfHaveLastPercentageSignal(inputValue)
    const foundErro = valideteInput(inputValue, true)

    if (foundErro) {
      props.dispatchCustomTipInput({ type: "wrong-input", payload: inputValue })
    } else {
      props.dispatchCustomTipInput({ type: "update-value", payload: inputValue })
    }
  }
  const removeIfHaveLastPercentageSignal = value => value.endsWith("%") ? value.slice(0, -1) : value
  const calculateTip = () => {
    const tip = getTip()

    const tipInDecimal = tip / 100

    const result = (props.bill.inputValue * tipInDecimal) / props.numberOfPeople.inputValue

    return result && isFinite(result) ? result : 0
  }
  const getTip = () => {
    let tip;

    for (const key in props.tipSelected) {
      if (props.tipSelected[key] === "active") {
        tip = props.tipSelected[5] === "active" ? props.customTipInput.customValue : props.tipValue
      }
    }

    if (tip) {
      tip = removeIfHaveLastPercentageSignal(tip)

      return !isNaN(tip) ? tip : 0
    }

    return 0
  }
  const calculateBill = tip => {
    const result = props.bill.inputValue / props.numberOfPeople.inputValue + tip

    return result && isFinite(result) ? result : 0
  }
  const clearFields = () => {
    const currentTipSelected = document.querySelector(".tip.active")

    if (currentTipSelected) changeTipSelected(currentTipSelected.dataset.tipPosObj)
    props.dispatchBill({ type: "update-value", payload: "" })
    props.dispatchNumberOfPeople({ type: "update-value", payload: "" })
    props.dispatchCustomTipInput({ type: "update-value", payload: "" })
    props.setResetActive("")
  }
  useEffect(() => {
    const totalTipCalculed = calculateTip()

    props.setTipAmount(totalTipCalculed.toFixed(2))

    const totalBillCalculed = calculateBill(totalTipCalculed)

    props.setTotalBill(totalBillCalculed.toFixed(2))

    if (totalBillCalculed != 0) props.setResetActive("active")
  }, [props.tipSelected, props.customTipInput.customValue, props.bill.inputValue, props.numberOfPeople.inputValue])

  return (
    <Container data-main="" as="main">
      <Container className='bill-data' as="section">
        <Fieldset
          labelName="Bill"
          imageName="dollar"
          inputState={props.bill}
          dispatch={props.dispatchBill}
          changeBillAndNumberOfPeopleInputValue={changeBillAndNumberOfPeopleInputValue}
          isNumberOfPeople={false} />

        <Container className='tip-field'>
          <Label labelName="Select Tip %" />

          <Container className='tips'>
            <TipPercentButton
              className={`tip ${props.tipSelected[0]}`}
              data-tip-pos-obj={0}
              value="5%"
              onClick={e => {
                changeTipSelected(e.target.dataset.tipPosObj)
                props.setTipValue(e.target.value)
              }} />
            <TipPercentButton
              className={`tip ${props.tipSelected[1]}`}
              data-tip-pos-obj={1}
              value="10%"
              onClick={e => {
                changeTipSelected(e.target.dataset.tipPosObj)
                props.setTipValue(e.target.value)
              }} />
            <TipPercentButton
              className={`tip ${props.tipSelected[2]}`}
              data-tip-pos-obj={2}
              value="15%"
              onClick={e => {
                changeTipSelected(e.target.dataset.tipPosObj)
                props.setTipValue(e.target.value)
              }} />
            <TipPercentButton
              className={`tip ${props.tipSelected[3]}`}
              data-tip-pos-obj={3}
              value="25%"
              onClick={e => {
                changeTipSelected(e.target.dataset.tipPosObj)
                props.setTipValue(e.target.value)
              }} />
            <TipPercentButton
              className={`tip ${props.tipSelected[4]}`}
              data-tip-pos-obj={4}
              value="50%"
              onClick={e => {
                changeTipSelected(e.target.dataset.tipPosObj)
                props.setTipValue(e.target.value)
              }} />
            <TipPercentCustomInput
              className={`tip ${props.tipSelected[5]} ${props.customTipInput.inputWrong}`}
              data-tip-pos-obj={5}
              value={props.customTipInput.customValue}
              onClick={e => changeTipSelected(e.target.dataset.tipPosObj)}
              onChange={e => changeCustomInputValue(e.target.value)} />
          </Container>
        </Container>

        <Fieldset
          labelName="Number of People"
          imageName="person"
          inputState={props.numberOfPeople}
          dispatch={props.dispatchNumberOfPeople}
          changeBillAndNumberOfPeopleInputValue={changeBillAndNumberOfPeopleInputValue}
          isNumberOfPeople={true} />
      </Container>

      <Container className='bill-calculed-result' as="section">
        <Container className='container'>
          <BillCalculedField
            billTitle="Tip Amount"
            result={props.tipAmount} />
          <BillCalculedField
            billTitle="Total"
            result={props.totalBill} />
        </Container>

        <ResetButton
          className={props.resetActive}
          title="clear all fields"
          onClick={props.resetActive ? clearFields : () => {}}>Reset</ResetButton>
      </Container>
    </Container>
  );
}

export default Main;