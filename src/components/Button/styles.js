import styled from 'styled-components';

export const Button = styled.button`
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888;
    font-size: 1.4em;
    background-color: var(--bg-button);
    border:none;
    border-right: var(--border-button);
    border-bottom: var(--border-button);
    outline: none;
    &:active{
        background-color: #ccc; 
    }
    &.double{
        grid-column: span 2;
    }
    &.operation{
        background-color: #fa8231;
        color: #FFF;
    }
    &.operation:active{
        background-color: #fa8231cc;
    }
`;
