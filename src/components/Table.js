import * as Styled from './tableStyle';

import Pagination from './Pagination';
import { Search, Columns, Filter, Trash, Upload, Info } from './Icons';

import data from '../data.json';

import { useState, useEffect } from 'react';

export default function Table() {
  // pagination
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  //sort
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    const indexOfLastItem = currentPage * resultsPerPage;
    const indexOfFirstItem = indexOfLastItem - resultsPerPage;
    const descendingSortedItems = data
      .slice(indexOfFirstItem, indexOfLastItem)
      .sort((a, b) => b.version - a.version);
    const ascendingSortedItems = data
      .slice(indexOfFirstItem, indexOfLastItem)
      .sort((a, b) => a.version - b.version);

    if (sorted) setCurrentItems(ascendingSortedItems);
    else setCurrentItems(descendingSortedItems);
  }, [sorted, currentPage, resultsPerPage]);

  // checkbox
  const [checkedAll, setCheckedAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState(() => {
    const entries = new Map();
    currentItems.forEach(({ id }) => entries.set(id, false));
    // Map is easier to manipulate but React can't track the update inside,
    // So I converted it to Object here
    const items = Object.fromEntries(entries);

    return items;
  });

  const checkAll = () => {
    onItemCheck(!checkedAll, false);
    setCheckedAll(!checkedAll);
  };

  const onItemCheck = (isCheckAll, isIndividualCheck, checkedItem) => {
    const checkedItemsCopy = { ...checkedItems };
    const isChecked = checkedItems[checkedItem];

    // condition check - whether the change is coming from check all or individual check
    if (isIndividualCheck) checkedItemsCopy[checkedItem] = !isChecked;
    else currentItems.forEach(({ id }) => (checkedItemsCopy[id] = isCheckAll));

    // update state
    setCheckedItems(checkedItemsCopy);
  };

  const formatDate = (date) => {
    const year = date.slice(0, 4);
    const day = date.slice(5, 7);
    const month = date.slice(8, 10) - 1;

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const formattedDate = new Date(
      Date.UTC(year, month, day, 3, 0, 0)
    ).toLocaleDateString(undefined, options);

    const hours = date.slice(11, 13) % 12 || 12;
    const minutes = date.slice(14, 16);
    const timeSuffix = hours >= 12 ? 'pm' : 'am';

    const formattedTime = `${hours}:${minutes}${timeSuffix}`;

    return `${formattedDate} (${formattedTime})`;
  };

  const renderedTableRows = currentItems.map(
    ({ id, version, status, doctype, datecreated }) => (
      <Styled.TableRow key={id}>
        <Styled.TableCell className="checkbox">
          <input
            type="checkbox"
            onChange={() => onItemCheck(false, true, id)}
            checked={checkedItems[id]}
          />
        </Styled.TableCell>
        <Styled.TableCell>{version}</Styled.TableCell>
        <Styled.TableCell>
          <span className={status === 'Published' ? 'bold' : null}>
            {status}
          </span>
        </Styled.TableCell>
        <Styled.TableCell>{doctype}</Styled.TableCell>
        <Styled.TableCell>{formatDate(datecreated)}</Styled.TableCell>
        <Styled.TableCell className="actions">
          <span className="bold">View</span>
          <span className="svg">
            <Upload />
          </span>
          <span className="svg">
            <Trash />
          </span>
        </Styled.TableCell>
      </Styled.TableRow>
    )
  );

  return (
    <Styled.Container>
      <h1>Table/demo</h1>

      <Styled.Wrapper className="table-outer-container">
        <h2>Table Demo</h2>

        <Styled.Wrapper className="utility">
          <Styled.SearchBar>
            <Search />
            <Styled.SearchInput placeholder="Search table" />
          </Styled.SearchBar>

          <Styled.Utility>
            <Styled.Wrapper className="svg">
              <Filter />
            </Styled.Wrapper>
            <Styled.Wrapper className="svg">
              <Columns />
            </Styled.Wrapper>
          </Styled.Utility>
        </Styled.Wrapper>

        <Styled.Table>
          <thead>
            <Styled.TableRow>
              <Styled.TableHeader className="checkbox">
                <input
                  type="checkbox"
                  onChange={checkAll}
                  checked={checkedAll}
                />
              </Styled.TableHeader>
              <Styled.TableHeader
                className="version"
                sorted={sorted}
                onClick={() => setSorted(!sorted)}
              >
                Version
              </Styled.TableHeader>
              <Styled.TableHeader>Status</Styled.TableHeader>
              <Styled.TableHeader className="doctype">
                Document Type
                <Info />
              </Styled.TableHeader>
              <Styled.TableHeader>Date Created</Styled.TableHeader>
              <Styled.TableHeader className="actions">
                Actions
              </Styled.TableHeader>
            </Styled.TableRow>
          </thead>

          <tbody>{renderedTableRows}</tbody>
        </Styled.Table>

        <Styled.Wrapper className="pagination">
          <Styled.Wrapper className="results-per-page">
            <label htmlFor="pages">Results per page:</label>

            <select
              id="pages"
              onChange={({ target }) => setResultsPerPage(target.value)}
              value={resultsPerPage}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </Styled.Wrapper>
          <Pagination
            resultsPerPage={resultsPerPage}
            totalItems={data.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Styled.Wrapper>
      </Styled.Wrapper>
    </Styled.Container>
  );
}
