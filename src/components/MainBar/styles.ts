import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;

  button {
    background-color: rgba(227, 124, 124, 1);
    border: 0;
    margin-top: 30px;
    border-radius: 4px;
    padding: 5px;
  }
`;

export const Screen = styled.div`
  margin-top: 20px;
  min-width: 650px;
  min-height: 400px;
  background: linear-gradient(
    0deg,
    rgba(208, 62, 62, 1) 0%,
    rgba(227, 124, 124, 1) 100%
  );
  box-shadow: -4px -1px 26px -6px rgba(46, 42, 42, 0.92);
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 5px 25px;

  span {
    font-size: 52px;
  }
`;
