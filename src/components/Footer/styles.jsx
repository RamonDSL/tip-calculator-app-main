import styled from 'styled-components';

export const Container = styled.div`
  p {
    color: ${props => props.theme.colors.DarkGrayishCyan};
    font-size: 1rem;
    
    a {
        color: ${props => props.theme.colors.StrongCyan};
        font-weight: ${props => props.theme.fontWeight};
        font-size: 1.2em;

        &:hover {filter: brightness(150%);}
    }
  }

  @media (min-width: 768px) {
    a {
        transition: filter .5s ease-out;

        &:hover {filter: brightness(120%);}
    }
  }
`;
