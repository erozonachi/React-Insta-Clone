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

  .logo-container, .search-box-container {
    @media (max-width:500px) {
      width: 50%;
    }
  }
  .search-controls {
    @media (max-width:500px) {
      width: 100%;
    }
  }

  .logo-container{ 
    h1 {
      border-left: 1px solid #aaa;
      padding: 0 1em;
      font-size: 2.8rem;
    }
    span {
      padding: 0 1em;
      font-size: 2.8rem;
    }
    .logo-item {
      font-weight: bolder;
      cursor: pointer;
    }
  }

  .search-box-container {
    justify-content: center;
    .search-box {
      outline: 0;
      border: 1px solid #aaa;
      background-color: #eee;
      width: 80%;
      padding: .5em 0;
      text-align: center;
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
