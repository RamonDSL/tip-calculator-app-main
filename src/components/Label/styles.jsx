import styled from 'styled-components';

export const LabelCustom = styled.label`
    display: inline-block;
    color: ${props => props.theme.colors.DarkGrayishCyan};
    font-weight: ${props => props.theme.fontWeight};
    font-size: 1.3rem;
    letter-spacing: 1px;
    margin-bottom: 8px;
`;
