import * as Styled from './tableStyle';

import { Search, Columns, Filter, Square, Trash, Upload } from './Icons';

import data from '../data.json';

// import { useState } from 'react';

export default function Table() {
  //   const [resultsPerPage, setResultsPerPage] = useState(10);

  const formatDate = (date) => {
    const year = date.slice(0, 4);
    const day = date.slice(5, 7);
    const month = date.slice(8, 10);

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const formattedDate = new Date(
      Date.UTC(year, day, month)
    ).toLocaleDateString(undefined, options);

    const hours = date.slice(11, 13) % 12 || 12;
    const minutes = date.slice(14, 16);
    const timeSuffix = hours >= 12 ? 'pm' : 'am';

    const formattedTime = `${hours}:${minutes}${timeSuffix}`;

    return `${formattedDate} (${formattedTime})`;
  };

  const renderedTableRows = data.map(
    ({ id, version, status, doctype, datecreated }, index) => {
      if (index >= 10) return null;
      return (
        <Styled.TableRow key={id}>
          <Styled.TableCell>
            <Square />
          </Styled.TableCell>
          <Styled.TableCell>{version}</Styled.TableCell>
          <Styled.TableCell>
            <span className={status === 'Published' ? 'bold' : ''}>
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
      );
    }
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
              <Styled.TableHeader>
                <Square />
              </Styled.TableHeader>
              <Styled.TableHeader>Version</Styled.TableHeader>
              <Styled.TableHeader>Status</Styled.TableHeader>
              <Styled.TableHeader>Document Type</Styled.TableHeader>
              <Styled.TableHeader>Date Created</Styled.TableHeader>
              <Styled.TableHeader className="actions">
                Actions
              </Styled.TableHeader>
            </Styled.TableRow>
          </thead>

          <tbody>{renderedTableRows}</tbody>
        </Styled.Table>
      </Styled.Wrapper>
    </Styled.Container>
  );
}
