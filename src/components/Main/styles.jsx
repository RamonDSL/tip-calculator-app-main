import styled from 'styled-components';

export const Container = styled.div`
    &[data-main] {
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 100%;
        max-width: 750px;
        padding: 30px;
        border-radius: 15px;
        background-color: ${props => props.theme.colors.White};
    }

        .bill-data {
            display: flex;
            flex-direction: column;
            gap: 30px;

            & .tips {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(100px, 142px));
                justify-content: space-between;
                align-items: center;
                gap: 15px;
                margin-top: 5px;

                & .tip {
                    font-weight: ${props => props.theme.fontWeight};
                    font-size: 1.8rem;
                    letter-spacing: 1px;
                    padding: 5px 0;
                    border-radius: 5px;
                    width: 100%;
                    border: 2px solid transparent;
                }
            }
        } 

        .bill-calculed-result {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            gap: 40px;
            padding: 20px;
            border-radius: 15px;
            background-color: ${props => props.theme.colors.VeryDarkCyan};

            & > .container {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
        }
    
    @media (max-width: 338px) {
        .bill-data .tips {
            justify-content: center;
        }
    }

    @media (min-width: 673px) and (max-width: 767px) {
        & .tip:nth-child(5),
        & .tip:nth-child(6) {
            max-width: 142px;
            margin: 0 auto;
        }
        & .tip:nth-child(5) {grid-column: 1 / span 2;}
        & .tip:nth-child(6) {grid-column: 3 / span 2;}
        
    }

    @media (min-width: 768px) {
        &[data-main] {
            flex-direction: row;

            & .tips {grid-template-columns: repeat(3, minmax(100px, 142px));}
        }

        &[data-main] > & {width: 50%;}
        
        &[data-main] > .bill-calculed-result {padding: 20px 35px;}
    }
`;

export const TipPercentButton = styled.input.attrs({
    type: "button"
})`
    color: ${props => props.theme.colors.White};
    background-color: ${props => props.theme.colors.VeryDarkCyan};
    
    &.active {
        color: ${props => props.theme.colors.VeryDarkCyan};
        background-color: ${props => props.theme.colors.StrongCyan};        
    }
    
    @media (min-width: 768px) {
        && {
            transition: color .5s ease-out, background-color .5s ease-out;
            
            &&:hover {cursor: pointer;}
            &&:not(.active):hover {                
                color: ${props => props.theme.colors.VeryDarkCyan};
                background-color: ${props => props.theme.colors.LightGrayishCyan};        
            }
        }
    }
`;

export const TipPercentCustomInput = styled.input.attrs({
    type: "text",
    placeholder: "Custom",
    dir: "rtl",
})`
    color: ${props => props.theme.colors.VeryDarkCyan};
    background-color: ${props => props.theme.colors.VeryLightGrayishCyan};
    text-indent: 10px;
    outline: none;

    
    .tips &&.active {border-color: ${props => props.theme.colors.StrongCyan};}
    
    .tips &&.error {border-color: firebrick;}

    @media (min-width: 768px) {
        && {
            transition: border-color .5s ease-out;

            &&:hover {
                cursor: pointer;
                border-color: ${props => props.theme.colors.StrongCyan};
            }
        }
    }
`;

export const ResetButton = styled.button`
    color: ${props => props.theme.colors.VeryDarkCyan};
    font-weight: ${props => props.theme.fontWeight};
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 100%;
    padding: 8px 0;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.StrongCyan};
    opacity: .3;

    &.active {opacity: 1;}
    
    @media (min-width: 768px) {
        &.active:hover {
            cursor: pointer;
            background-image: linear-gradient(rgba(255, 255, 255, .7), rgba(255, 255, 255, .7));
        }
    }
`;