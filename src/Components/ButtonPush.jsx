import React from "react";
import { useContext } from "react";
// import { InputContext } from '../contexts/CalculatorContext'
import { CartContext } from "../contexts/CartContext";
import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";

const ButtonPush = () => {
  const { cart } = useContext(CartContext);
  // const { input } = useContext(InputContext);
  return (
    <ButtonPushStyled>
      <button className={"btn btnhidden cash"}>
        <span>Cash</span>
        <span className={"d-flex align-items-center"}>
          {cart.CartTotal}$
          <IoMdCloseCircle style={{ fill: "white", marginLeft: "10px" }} />
        </span>
      </button>
      <button className={"btn btnhidden bank"}>
        <span style={{ marginRight: "10px" }}>Bank</span>
        <span className={"d-flex align-items-center"}>
          {cart.CartTotal}$
          <IoMdCloseCircle style={{ fill: "white", marginLeft: "10px" }} />
        </span>
      </button>
      <button className={"btn btnshow"}>
        <span>Cash</span>
      </button>
      <button className={"btn btnshow"}>
        <span>Bank</span>
      </button>
      <button className={"btn btnshow"}>
        <span>Customer Account</span>
      </button>
    </ButtonPushStyled>
  );
};
//!styled Comonents
const ButtonPushStyled = styled.div`
  .btn {
    display: flex;
    align-items: center;
    width: 70%;
    height: 80px;
    background: white;
    font-size: 25px;
    margin-bottom: 10px;
    border-color: #b3b3b3;
    border-radius: 15px;
    font-family: var(--font);
  }
  .btn:focus {
    outline: 0;
    box-shadow: none;
  }
  .btnhidden {
    justify-content: space-between;
    background-color: var(--red-color);
    span {
      color: white;
      padding: 0 10px;
    }
  }
  .btnshow {
    justify-content: center;
  }
`;
export default ButtonPush;
