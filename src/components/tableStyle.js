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

  &.pagination {
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
  }

  &.results-per-page {
    display: flex;

    select {
      margin-left: 1rem;
      background: #e5e5e5;
      border: 0;
      font-weight: bold;
      font-size: 1.2rem;
      padding: 0.3rem;
      border-radius: 0.5rem;
    }
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
  margin-bottom: 1rem;

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

  &.doctype {
    svg {
      width: 1.5rem;
      height: 1.5rem;
      transform: translate(0.3rem, 0.3rem);
    }

    .tooltip {
      position: relative;
      display: inline-block;
      cursor: pointer;

      :hover {
        .tooltiptext {
          visibility: visible;
        }
      }

      .tooltiptext {
        visibility: hidden;
        width: 19rem;
        background-color: #e5e5e5;
        color: black;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 120%;
        left: -8.5rem;

        ::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: #e5e5e5 transparent transparent transparent;
        }
      }
    }
  }

  &.checkbox {
    input {
      transform: translateY(0.2rem);
    }
  }

  &.version {
    cursor: pointer;

    ::after {
      content: '';
      border-style: solid;
      border-width: ${({ sorted }) =>
        sorted ? '0 0.5rem 0.5rem 0.5rem' : '0.5rem 0.5rem 0 0.5rem'};
      border-color: ${({ sorted }) =>
        sorted
          ? 'transparent transparent black transparent'
          : 'black transparent transparent transparent'};
      display: inline-block;
      margin-left: 0.5rem;
      margin-bottom: 0.1rem;
    }
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

  &.checkbox {
    input {
      transform: translateY(0.2rem);
    }
  }
`;
