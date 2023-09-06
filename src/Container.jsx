import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  width: 100%;
  min-height: 100vh;
  padding: 20px 0;
  background-color: ${props => props.theme.colors.LightGrayishCyan};
`;
