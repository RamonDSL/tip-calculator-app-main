import styled from 'styled-components';

export const Container = styled.div`
    .label-field,
    .input-field {
        display: flex;
        align-items: center;
        justify-content: space-between

    }

    .input-field {
        background-color: ${props => props.theme.colors.VeryLightGrayishCyan};
        padding: 8px 12px;
        border-radius: 5px;
        border: 2px solid transparent;

        &.input-field.error {border-color: firebrick;}

        img {width: 10px;}
    }

    @media (min-width: 768px) {
        .input-field {
            transition: border-color .5s ease-out;

            &:hover,
            &:hover img {cursor: pointer;}

            &:hover {                
                border-color: ${props => props.theme.colors.StrongCyan};
            }
        }
    }
`;

export const SpanError = styled.span`
    color: firebrick;
    font-weight: ${props => props.theme.fontWeight};
    font-size: 1rem;
    letter-spacing: 1px;
`;

export const Input = styled.input.attrs({
    type: "text",
    dir: "rtl",
})`
    color: ${props => props.theme.colors.VeryDarkCyan};
    font-weight: ${props => props.theme.fontWeight};
    font-size: 2.4rem;
    border: none;
    outline: none;
    background-color: transparent;
    width: 90%;

    @media (min-width: 768px) {&:hover {cursor: pointer;}}
`;
