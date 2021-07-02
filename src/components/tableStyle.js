import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    color: #d3d3d3;
    font-weight: normal;
    font-size: 1.2rem;
  }

  width: 100rem;
`;

export const Wrapper = styled.div`
  &.table-outer-container {
    padding: 1.5rem 2.5rem;
    border: 1px solid #d3d3d3;
    border-radius: 0.8rem;
  }

  h2 {
    font-size: 2rem;
  }

  &.utility {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }

  &.svg {
    background: #e5e5e5;
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

export const SearchBar = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const SearchInput = styled.input`
  padding: 0.2rem 2.8rem;
  font-size: 1.5rem;
  background-color: #e5e5e5;
  border: 0;
  border-radius: 0.5rem;
`;

export const Utility = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  font-size: 1.5rem;
  border: 1px solid #d3d3d3;
  border-collapse: collapse;

  .actions {
    text-align: right;
  }
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 0.8rem;
  border-bottom: 1px solid #d3d3d3;

  svg {
    width: 1.3rem;
    height: 1.3rem;
    transform: translateY(0.2rem);
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #d3d3d3;
`;

export const TableCell = styled.td`
  padding: 0.8rem;

  svg {
    width: 1.3rem;
    height: 1.3rem;
    transform: translateY(0.2rem);
  }

  span {
    background-color: #e5e5e5;
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 0.5rem;
  }

  .bold {
    font-weight: bold;
  }

  &.actions {
    span {
      cursor: pointer;
    }
    .svg {
      margin-left: 0.5rem;
    }
  }
`;
