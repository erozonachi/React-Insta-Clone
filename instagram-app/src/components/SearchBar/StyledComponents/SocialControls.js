import styled from 'styled-components';

const SocialControls = styled.div`
  justify-content: flex-end;

  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }

  > .control {
    cursor: pointer;
  }
`;

export default SocialControls;
