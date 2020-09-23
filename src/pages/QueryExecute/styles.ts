import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #7f898e;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 800px;

  display: flex;
  flex-direction: column;

  select {
    width: 80%;
    height: 40px;
    padding: 0 10px;
    border: 0;
    border-radius: 5px;
    margin-bottom: 8px;
  }

  textarea {
    border-radius: 5px;
    padding: 10px 10px;
    max-height: 400px;
    min-height: 100px;
    margin-bottom: 8px;
    resize: vertical;
    width: 80%;
  }

  button {
    width: 80%;
    height: 45px;
    background: #ffdb00;
    border-radius: 5px;
    border: 0;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ffdb00')};
    }
  }
`;
