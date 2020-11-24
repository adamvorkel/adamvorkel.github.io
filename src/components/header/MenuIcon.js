import React from 'react';
import styled from 'styled-components';

const Line = styled.span`
    display: block;
    border-top: 1px solid #fff;
    width: 2.25rem;
`;

const LineShort = styled(Line)`
    width: 1.5rem;
    margin-top: 0.75rem;
`;

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

export default (props) => {
    return (
        <MenuIcon {...props}>
            <Line />
            <LineShort />
        </MenuIcon>
    )
};