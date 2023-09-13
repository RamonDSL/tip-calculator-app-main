import React from 'react';

import { Container } from './styles';

function Header() {
  return (
    <Container as="header">
        <img src="./logo.svg" alt="logo icon" />
    </Container>
  );
}

export default Header;