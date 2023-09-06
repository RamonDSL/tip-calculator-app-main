import styled from 'styled-components';

export const Container = styled.div`
    &[data-main] {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    
    &.container > small {
        color: ${props => props.theme.colors.GrayishCyan};
        font-size: 1rem;
        letter-spacing: 1px;
    }
    
    & > &.container:last-child {
        display: flex;
        align-items: center;
        max-width: 160px;
        gap: 5px;
        overflow-x: auto;

    }
    @media (min-width: 768px) {
        &.container:last-child > img {min-width: 20px;}
    }
    `;

export const BillTltle = styled.h3`
    color: ${props => props.theme.colors.VeryLightGrayishCyan};
    font-weight: ${props => props.theme.fontWeight};
    font-size: 1.2rem;
    margin-bottom: 2px;
    letter-spacing: 1px;
`;

export const BillValue = styled.p`
    color: ${props => props.theme.colors.StrongCyan};
    font-weight: ${props => props.theme.fontWeight};
    font-size: clamp(2.7rem, 7vw, 4.2rem);
    letter-spacing: 1px;
`;