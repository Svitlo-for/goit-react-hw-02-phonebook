import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  .title {
    text-align: center;
    font-size: 30px;
  }

  .wrapperPhonebook {
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    margin: 0 auto;
    padding: 1em 1em;
    width: 320px;
  }

  .btn {
    display: flex;
    justify-content: center;
    width: 90px;
    margin-top: 1em;
    &:hover,
    &:focus {
      background-color: lightyellow;
    }
  }

  .ContactButton {
    display: flex;
    margin-bottom: 1em;

    &:hover,
    &:focus {
      background-color: lightblue;
    }
  }
`;

export const StyledWrapperContacts = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  margin: 0 auto;
  padding: 1em 1em;
  width: 320px;
`;
