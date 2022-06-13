import React, { useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import ProductCard from '../Components/ProductCard';
import Cart from './../Components/Cart';
import axios from 'axios'
import NavHome from '../Shared/NavHome';

const Home = () => {
  const [ products, setProducts ] = useState([]);
  useEffect(() => {
    axios.get('manifest.json').then(res => { setProducts(res.data.products) })
  }, []);
  return (
    <HomeStyled>
      <Container fluid >
        <Row className='justify-content-center'>
          <NavHome />
          <Col lg={8} md={8}>
            <div className="barcart">
              <Row>
                  {products.map((product) => (
                    <Col key={product.id} lg={2} md={3}>
                      <ProductCard product={product}/>
                    </Col>
                  ))}
              </Row>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="nameCart">
              <Cart />
            </div>
          </Col>
        </Row>
      </Container>
    </HomeStyled>
  )
}
//! styled Components
const HomeStyled = styled.section`
.barcart{
  background-color: var(--th-color);
  width: 100%;
  height: 80vh;
  overflow: scroll;
  /* border-radius: 10px; */
  padding: 0 5px;
}
.nameCart{
  width: 100% !important;
  height: 80vh !important;
  background-color: var(--th-color);
  display: flex;
  overflow: hidden;
  align-items: center;
 }
`
export default Home