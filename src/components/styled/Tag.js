import styled from 'styled-components';

const Tag = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  display: flex;
  align-items: center;
  position: relative;
  :after {
    content: '';
    width: 2rem;
    border-top: 1px solid;
    margin-left: 1rem;
  }
`;

export default Tag;