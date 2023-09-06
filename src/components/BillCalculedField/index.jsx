import React from 'react';

import { BillTltle, BillValue, Container } from './styles';

function BillCalculedField(props) {
  return (
    <Container data-main="">
        <Container className='container'>
            <BillTltle>{props.billTitle}</BillTltle>

            <small>/ person</small>
        </Container>
        <Container className='container'>
            <img src="./src/assets/icon-dollar.svg" alt="dollar icon"/>

            <BillValue>{props.result}</BillValue>
        </Container>
    </Container>
  );
}

export default BillCalculedField;