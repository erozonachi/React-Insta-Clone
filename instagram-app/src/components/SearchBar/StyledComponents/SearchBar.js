import styled from 'styled-components';

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 1.5em 0;
  margin: 0 .5em;
  font-family: 'Satisfy', cursive;
  background-color: #ffffff;
  border-bottom: .5px dotted #bbb;

  > div {
    display: flex;
    align-items: center;
    width: 33.33%;
  }
  .search-controls {
    @media (max-width:500px) {
      width: 100%;
    }
  }

  .search-controls {
    justify-content: flex-end;
    @media (max-width: 500px) {
      justify-content: center;
    }
   .control {
      cursor: pointer;
    }
  }
`;

export default SearchBar;
