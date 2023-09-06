import React, { useContext } from 'react';
import Label from "../Label";
import { Container, SpanError, Input } from './styles';

function Fieldset(props) {
  return (
    <Container data-main="">
        <Container className="label-field">
            <Label labelName={props.labelName}/>
            <SpanError>{props.inputState.spanMensage}</SpanError>
        </Container>

        <Container className={`input-field ${props.inputState.inputWrong}`}>
          <img src={`./src/assets/icon-${props.imageName}.svg`} alt={`${props.imageName} icon`}/>
          
          <Input 
            placeholder={props.imageName === "dollar" ? 0 : 1}
            value={props.inputState.inputValue}
            onChange={e => props.changeBillAndNumberOfPeopleInputValue(
                                    e.target.value, 
                                    props.dispatch, 
                                    props.isNumberOfPeople)}/>
        </Container>
    </Container>
  );
}

export default Fieldset;