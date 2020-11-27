import React, {forwardRef} from 'react';
import styled from 'styled-components';

const MenuIcon = styled.button`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    z-index: 100;
    padding: 1rem;
`;

const Line = styled.span`
    display: block;
    border-top: 1px solid #fff;
    width: 2.25rem;
    transition: all 0.3s ease-in-out;
    &::after {
        content: '';
        width: 1.5rem;
        margin-top: 0.75rem;
        display: block;
        border-top: 1px solid #fff;
        transition: all 0.3s ease-in-out;
    }
    ${MenuIcon}.poopi & {
        transform: rotate(45deg)
    }
    ${MenuIcon}.poopi &::after {
        transform: rotate(-90deg);
        width: 2.25rem;
        margin-top: 0;
    }
`;


export default forwardRef((props, ref) => {
    return (
        <MenuIcon ref={ref} {...props}>
            <Line />
        </MenuIcon>
    );
});