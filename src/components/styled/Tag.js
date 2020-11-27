import styled from 'styled-components';

const Tag = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 0.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  :before, :after {
    content: '';
    width: 2rem;
    border-top: 1px solid;
  }
  :before {
    margin-right: 1.5rem;
  }
  :after {
    margin-left: 1.5rem;
  }
`;

export default Tag;