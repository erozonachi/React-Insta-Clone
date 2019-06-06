import styled from 'styled-components';

const box = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  background-color: #ffffff;
`;
const spacing = `
  width: 80%;
  margin: .5em 0;
`;

const LoginContainer = styled.div`
  ${box}
  margin: 5em auto;
  padding: 1em 0;
  box-shadow: 3px 1.5px 3px 1.5px #cccccc;

  > h1 {
    font-size: 2.8rem;
    font-family: 'Satisfy', cursive;
    margin: .5em auto;
  }
  > form {
    ${box}
    margin: 1em auto;

    > input {
      ${spacing}
    }
    > button {
      ${spacing}
      padding: .5em 0;
      outline: 0;
      border: none;
      background-color: rgb(9, 124, 139, .7);
      color: white;
      cursor: pointer;
    }
  }
`;

export default LoginContainer;
