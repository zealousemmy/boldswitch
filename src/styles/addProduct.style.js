import { styled } from "styled-components";

export const AddProductContainer = styled.div`
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
  margin: 0 auto;
  border-radius: 10px;
  @media (max-width: 900px) {
    width: 80%;
  }
  input {
    padding: 15px;
    margin: 1rem 0;
    border-radius: 10px;
    border: 1px solid gray;
    outline: none;
  }
  button {
    border: none;
    border-radius: 10px;
    padding: 10px;
    width: 20%;
    margin: 1rem auto;
    background-color: black;
    color: white;
    text-transform: uppercase;
    @media (max-width: 900px) {
      width: 80%;
    }
  }
`;
