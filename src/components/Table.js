import * as Styled from './tableStyle';

import { Search, Columns, Filter } from './Icons';

export default function Table() {
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
          <Styled.TableRow>
            <Styled.TableHeader>Version</Styled.TableHeader>
            <Styled.TableHeader>Status</Styled.TableHeader>
            <Styled.TableHeader>Document Type</Styled.TableHeader>
            <Styled.TableHeader>Data Created</Styled.TableHeader>
            <Styled.TableHeader>Actions</Styled.TableHeader>
          </Styled.TableRow>
          <Styled.TableRow>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </Styled.TableRow>
        </Styled.Table>
      </Styled.Wrapper>
    </Styled.Container>
  );
}
