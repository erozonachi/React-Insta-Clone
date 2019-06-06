import styled from 'styled-components';

const SearchContainer = styled.div`
  justify-content: center;
  @media (max-width:500px) {
    width: 50%;
  }
  input {
    outline: 0;
    border: 1px solid #aaa;
    background-color: #eee;
    width: 80%;
    padding: .5em 0;
    text-align: center;
  }
`;

export default SearchContainer;
