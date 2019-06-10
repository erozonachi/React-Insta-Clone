import styled from 'styled-components';

const LogoContainer = styled.div`
  @media (max-width:500px) {
    width: 50%;
  }
  h1 {
    border-left: 1px solid #aaa;
    padding: 0 1em;
    font-size: 2.8rem;
    font-weight: bolder;
    cursor: pointer;
    @media (max-width:500px) {
      padding: 0 .5em;
      font-size: 2.6rem;
    }
  }
  span {
    padding: 0 1em;
    @media (max-width:500px) {
      padding: 0 .5em;
    }
    .logo-item {
      font-weight: bolder;
      cursor: pointer;
    }
  }
`;

export default LogoContainer;
