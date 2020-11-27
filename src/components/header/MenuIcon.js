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
    width: 3rem;
    transition: all 0.2s ease-in-out;
    height: 1px;
    background-color: #fff;
    &::after {
        content: '';
        width: 2rem;
        height: 1px;
        margin-top: 1rem;
        display: block;
        background-color: #fff;
        transition: all 0.2s ease-in-out;
    }
    ${MenuIcon}.cross & {
        transform: rotate(45deg)
    }
    ${MenuIcon}.cross &::after {
        transform: rotate(-90deg);
        width: 100%;
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