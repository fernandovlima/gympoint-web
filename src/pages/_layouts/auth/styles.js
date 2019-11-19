import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-50deg, #ffac76, #ffc6a1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
  }

  span {
    color: #f24747;
    align-self: flex-start;
    font-weight: bold;
    margin-bottom: 10px;
    letter-spacing: 0.5px;
  }

  button {
    height: 44px;
    background: #ee4e64;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.07, '#ee4e64')};
    }
  }

  a {
    color: #db2941;
    margin-top: 15px;
    font-size: 14px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
