import React from 'react';

import { LabelCustom } from './styles';

function Label(props) {
  return <LabelCustom>{props.labelName}</LabelCustom>;
}

export default Label;