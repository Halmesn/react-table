import styled from 'styled-components';

export const PaginationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const ListItem = styled.li`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  background: #e5e5e5;
  cursor: pointer;

  &.active {
    background: black;
    color: #e5e5e5;
  }

  &.disabled {
    opacity: 0.5;
  }

  a {
    svg {
      width: 1.3rem;
      height: 1.3rem;
      transform: translateY(0.2rem);
    }
  }
`;
