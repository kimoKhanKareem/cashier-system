import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import styled from "styled-components";
import { AiOutlineShoppingCart, AiFillDelete } from "react-icons/ai";
import Calculatdiv from "./Calculatdiv";

const Cart = () => {
  const { cart, kactive, isActive, GreyClass, RemveProductAll } = useContext(CartContext);
  const { items = [] } = cart;

  return (
    <StyledCart>
      <div className="styleboxcart">
        <ul className="conference">
          {!items.length ? (
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                width: "100%",
                height: "100%",
              }}
            >
              <AiOutlineShoppingCart
                style={{ fontSize: "90px", fill: "black", opacity: "15%" }}
              />
            </div>
          ) : (
            items.map((item, i) => (
              <li
                item={item}
                key={item.id}
                style={{ width: "100%" }}
                className={
                  "btn itemdiv" +
                  " " +
                  `${item.id === kactive.id ? "kimoKhan" : ""} ${
                    isActive === i ? "kimoKhan" : ""
                  }`
                }
                onClick={() => {
                  GreyClass(i, item);
                }}
              >
                <div className="oneitems">
                  <div className="d-flex justify-content-between">
                    <h5>
                      {item.title}
                      <span>{item.para}</span>
                    </h5>
                    <h5>
                      {!item.result.length &&
                        !item.pric.length && !item.dis.length  ? (item.qty * item.price).toFixed(2)
                          : item.result.join("") * item.pric.join("") || item.qty * item.pric.join("") ||
                            (item.result.join("") * item.price).toFixed(2)}
                      $
                    </h5>
                  </div>
                  <form className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                      <span
                        className="numberbes"
                        style={{
                          fontSize: "18px",
                          display: "flex",
                          textAlign: "center",
                        }}
                      >
                        <input
                          className={"qty"}
                          type="button"
                          value={
                            !item.result.length
                              ? item.qty
                              : item.result.join("")
                          }
                        />
                        . Qty at
                      </span>
                      <span style={{ marginLeft: "10px", fontSize: "18px" }}>
                        <input
                          className={"priceNumber"}
                          type="button"
                          value={
                            !item.pric.length ? item.price : item.pric.join("")
                          }
                        />
                        $ Units
                      </span>
                      {!item.dis.length ? (
                        <span></span>
                      ) : (
                        <span
                          className="spandisc"
                          style={{ marginLeft: "10px", fontSize: "18px" }}
                        >
                          <input
                            style={{ color: "black" }}
                            className={"disc"}
                            type="button"
                            value={!item.dis.length ? "0" : item.dis.join("")}
                          />
                          % Disc
                        </span>
                      )}
                    </div>
                    <div className="removitem">
                      <AiFillDelete
                        style={{ fontSize: "25px", zIndex: "99999 !important" }}
                        onClick={() => RemveProductAll(item)}
                      />
                    </div>
                  </form>
                </div>
              </li>
            ))
          )}
        </ul>
        <div className="boxtotalprice">
          <div className="parentpoints">
            <div className="points text-center">
              <h5>Points</h5>
              <h5 style={{ color: "red" }}>+2428 / 4161</h5>
            </div>
            <div className="taxes text-center">
              <h5>Total</h5>
              <h5 className="title">{cart.CartTotal} $</h5>
            </div>
          </div>
        </div>
        <Calculatdiv />
      </div>
    </StyledCart>
  );
};
//! styled components
const StyledCart = styled.div`
  width: 100%;
  height: 100% !important;
  padding: 10px;
  border-radius: 10px;
  .styleboxcart {
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
    .conference {
      width: 100%;
      height: 51%;
      background-color: #ededed;
      padding: 10px;
      overflow-y: scroll;
      margin: 0;
      .itemdiv {
        margin-top: 5px;
        border: none !important;
      }
      .kimoKhan {
        background-color: #80808049 !important;
      }
      .oneitems {
        .numberbes {
          .qty {
            background-color: transparent;
            border: none;
          }
        }
        .priceNumber {
          background-color: transparent;
          border: none;
        }
        .spandisc {
          color: #606060;
          align-items: center;
          display: flex;
          .disc {
            color: #606060;
            background-color: transparent;
            border: none;
          }
        }
      }
    }
    .boxtotalprice {
      width: 100%;
      /* height: 20%; */
      background-color: white;
      /* border-radius: 10px; */
      .parentpoints {
        display: flex;
        justify-content: space-between;
        padding: 15px 10px;
      }
    }
  }
`;
export default Cart;