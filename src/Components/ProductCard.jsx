import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import styled from 'styled-components';


const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    return (
        <Dive>
            <button className="backgroundbox btn" style={{ borderRadius: '0' }} onClick={() => {addToCart(product)}}>
                <div className="colimagefirst text-center">
                    <img className={'imgproduct'} src={product.image} alt="..."/>
                    <span>{product.price}$</span>
                    <div className="parBox">
                        <h6>
                            {product.title}
                        </h6>
                    </div>
                </div>
            </button>
        </Dive>
    )
}
//! styled-components.backgroundboxcolm
const Dive = styled.div`
    justify-content: center;
    display: flex;
    margin: 10px 0;
    border-radius: 10px;
    overflow: hidden;
    .backgroundbox{
        max-width: 193px;
        max-height: 150vh;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        overflow: hidden;
        .colimagefirst{
        position: relative;
        .imgproduct{
            width: 175px;
            height: 172px;
            @media (min-width: 1200px){
                .imgproduct{
                    width: 147;
                    height: 140;
                }
            }
        }
            span{
                position: absolute;
                width: 99px;
                top: 17px;
                font-size: 16px;
                left: -56px;
                transform: translate(40%, -8%);
                text-align: center;
                background: red;
                border-radius: 20px;
                padding: 0 15px;  
                color: var(--white-color); 
                @media (min-width: 1440px){
                    span{
                        width: 99px;
                        top: 7px;
                        font-size: 15px;
                        left: -36px;
                    }
                }
              }
              .parBox{
                    h6{
                    bottom: 18px;
                    left:0;
                    right:0;
                    padding: 10px 0;
                     margin: 0;
                    @media (min-width: 1440px){
                        /* font-size: 14px; */
                        padding: 5px 17px;
                    }
                    }
                    h5{
                    bottom: 35px;
                    left:0;
                    right:0;
                    }
                }
          }
      }    
    `
export default ProductCard