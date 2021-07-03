import * as Styled from './paginationStyle';

import { useState } from 'react';
import { Previous, Next } from './Icons';

export default function Pagination({
  resultsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
}) {
  const pageLimit = 5;
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);

  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / resultsPerPage) || 1;
  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

  const renderedPagination = pageNumbers.map((number) =>
    number < maxPageLimit + 1 && number > minPageLimit ? (
      <Styled.ListItem
        key={number}
        onClick={() => setCurrentPage(number)}
        className={currentPage === number ? 'active' : null}
      >
        <a href="/#">{number}</a>
      </Styled.ListItem>
    ) : null
  );

  const onPreviousClick = () => {
    if (currentPage === pageNumbers[0]) return;

    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageLimit);
      setMinPageLimit(minPageLimit - pageLimit);
    }
  };

  const onNextClick = () => {
    if (
      currentPage === pageNumbers.length - 1 ||
      currentPage === pageNumbers.length
    )
      return;

    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageLimit);
      setMinPageLimit(minPageLimit + pageLimit);
    }
  };

  return (
    <nav>
      <Styled.PaginationList>
        <Styled.ListItem
          onClick={() => onPreviousClick()}
          className={currentPage === pageNumbers[0] ? 'disabled' : null}
        >
          <a href="/#">
            <Previous />
          </a>
        </Styled.ListItem>
        {renderedPagination}
        <Styled.ListItem
          onClick={() => onNextClick()}
          className={
            currentPage === pageNumbers.length - 1 ||
            currentPage === pageNumbers.length
              ? 'disabled'
              : null
          }
        >
          <a href="/#">
            <Next />
          </a>
        </Styled.ListItem>
      </Styled.PaginationList>
    </nav>
  );
}
