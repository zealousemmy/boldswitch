import { styled } from "styled-components";

export const ProductCardList = styled.div`
  .cardListContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .searchInputContainer {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    input {
      border: 1px solid gray;
      border-radius: 10px;
      outline: none;
      padding: 10px;
      width: 40%;
      font-size: 18px;
    }
    button {
      padding: 15px;
      border: none;
      background-color: black;
      color: white;
      border-radius: 10px;
      margin-left: 1rem;
      cursor: pointer;
    }
  }
`;
