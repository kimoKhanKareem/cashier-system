import React from 'react'
import styled from 'styled-components';
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsBoxArrowLeft, BsBoxArrowRight } from 'react-icons/bs';
import PayCalcu from './PayCalcu';
import ButtonPush from './ButtonPush';

const Paymen = () => {
  const { cart } = useContext(CartContext);
  return (
    <StyledPayment as="section">
      <Container fluid>
        <div className="boxheadpayment">
          <Link  to="/" className="btn back">
              <BsBoxArrowLeft className={"iconsarrowL"}/>
              <p>
                Back
              </p>
          </Link>
          <h2>Payment</h2>
          <Link to="/" className="btn validate">
            <p>
              Validate
            </p>
              <BsBoxArrowRight className={"iconsarrowR"}/>
          </Link>
        </div>
      </Container>
      <Container>
        <div className="boxPrice">
          <h2> $ {cart.CartTotal}</h2>
          <p>
            Please Select a payment method
          </p>
        </div>
        <Row>
          <Col lg={6} md={6}>
            <div className="button-push">
              <ButtonPush />
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="pay-calcu">
              <PayCalcu />
            </div>
          </Col>
        </Row>
      </Container>
    </StyledPayment>
  )
}
//! styled components
const StyledPayment = styled.div`
.boxheadpayment{
  display: flex;
  height: 65px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2% 1%;
  background-color: var(--first-color);
  border-radius: 25px;
  h2{
    color: white;
    margin: 0;
    font-weight: 500;
    font-family: var(--font);
  }
  .btn{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0;
    font-size: 23px;
    padding: 0;
    margin: 0;
    color: white !important;
    border-radius:20px;
    p{
      margin: 0;
      font-weight: 500;
      color: white;
      font-family: var(--font);
    }
    .iconsarrowL{
      margin-right: 10px;
      fill: white;
    }
    .iconsarrowR{
      margin-left: 10px;
      fill: white;
    }
  }
  .back{
    background-color: var(--red-color);
    width: 10%;
    height: 55px;
  }
  .validate{
    background-color: #0eaa0e;
    width: 15%;
    height: 55px;
  }
}
.boxPrice{
  margin: 5% 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  text-align: center;
  padding: 3% 0;
  border-radius: 25px;
  h2{
    color: red;
    font-weight: 800;
  }
  p{
    font-family: var(--font);
    font-weight: 500;
  }
}
.pay-calcu{
  display: flex;
  justify-content: flex-end;
}
`
export default Paymen