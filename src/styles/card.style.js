import { styled } from "styled-components";

export const ProductCardStyle = styled.div`
  /* background-color: red; */
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 20%;
  padding: 10px 30px;
  margin: 1rem;
  border-radius: 10px;
  text-align: left;
  h1 {
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 1px;
  }
  p {
    span {
      font-weight: bolder;
    }
    letter-spacing: 0.8px;
    font-size: 15px;
  }
  button {
    padding: 10px;
    margin-right: 1rem;
    border: none;
    background-color: blue;
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 15px;
    border-radius: 10px;
  }
  .delete {
    background-color: red;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;
