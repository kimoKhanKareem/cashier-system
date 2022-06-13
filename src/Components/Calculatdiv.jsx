import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap';
import { useContext } from 'react'
import { CartContext } from './../contexts/CartContext';
import { Link } from 'react-router-dom';
// import { BsKeyboard } from 'react-icons/bs';
// import { AiFillDelete } from 'react-icons/ai';

const Calculatdiv = () => {
    const { handleValue, classAdd, qty, Sprice, SpriceAdd, Pdiscu, PdiscuAdd, minusProduct, plusProduct } = useContext(CartContext);
    return (
        <CalculatStyled>
            <div className='parenticonsdetails'>
                <div className='parentpopup'>
                    <div className='popupchildren'>
                        <Container fluid>
                            <Row>
                                <Col md={12}>
                                    <form className=''>
                                        <div className="boxbtnU-P">
                                            <Link to="#" className="btn" type="button">User</Link>
                                            <Link to="payment" className="btn" type="button">Payment</Link>
                                        </div>
                                        <div className="d-flex">
                                            <div className="clearfix">
                                                <div className="btinp">
                                                    <input style={{ borderTopLeftRadius: '10px' }} type="button" value='1' className='buttonValue' onClick={() => handleValue(1)} />
                                                </div>
                                                <div className="btinp"><input type="button" name="4" value="4" className='buttonValue' onClick={() => handleValue(4)} /></div>
                                                <div className="btinp"><input type="button" value="7" className='buttonValue' onClick={() => handleValue(7)} /></div>
                                                <div className="d-flex">
                                                    <div className="btinp">
                                                        {/* input-- */}
                                                        <input style={{ width: '51px', marginRight: '0', borderBottomLeftRadius: '10px' }} type="button" value="-"
                                                            className='buttonminus' onClick={minusProduct} /></div>
                                                    <div className="btinp">
                                                        {/* input++ */}
                                                        <input style={{ width: '51px', marginLeft: '0' }} type="button" value="+"
                                                            className='buttonValue' onClick={plusProduct} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clearfix">
                                                <div className="btinp"><input type="button" value="2" className='buttonValue' onClick={() => handleValue(2)} /></div>
                                                <div className="btinp"><input type="button" value="5" className='buttonValue' onClick={() => handleValue(5)} /></div>
                                                <div className="btinp"><input type="button" value="8" className='buttonValue' onClick={() => handleValue(8)} /></div>
                                                <div className="btinp"><input type="button" value="0" className='buttonValue' onClick={() => handleValue(0)} /></div>
                                            </div>
                                            <div className="clearfix">
                                                <div className="btinp"><input type="button" value="3" className='buttonValue' onClick={() => handleValue(3)} /></div>
                                                <div className="btinp"><input type="button" value="6" className='buttonValue' onClick={() => handleValue(6)} /></div>
                                                <div className="btinp"><input type="button" value="9" className='buttonValue' onClick={() => handleValue(9)} /></div>
                                                <div className="btinp"><input type="button" value="." className='buttonValue' onClick={() => handleValue(".")} /></div>
                                            </div>
                                            <div className="clearfix">
                                                {/* click Qty */}
                                                <div className="btinp"><input type="button" value="Qty" className={"button buttonQty" + ' ' + `${qty ? 'qty' : ''}`} onClick={classAdd} /></div>
                                                {/* click Discount */}
                                                <div className="btinp"><input type="button" value="Disc" className={"button buttonDisc" + ' ' + `${Pdiscu ? 'disc' : ''}`} onClick={PdiscuAdd} /></div>
                                                {/* click price */}
                                                <div className="btinp"><input type="button" value="Price" className={"button buttonPrice" + ' ' + `${Sprice ? 'price' : ''}`} onClick={SpriceAdd} /></div>
                                                <div className="btinp"><input type="button" value="&#215;" className='buttonValue' /></div>
                                            </div>
                                            <div className="clearfix text-start">
                                                <div className="btinp"><input style={{ width: '100%', borderTopRightRadius: '10px' }} type="button" value="Info" className='button' /></div>
                                                <div className="btinp"><input style={{ width: '100%' }} type="button" value="Refund" className='button' /></div>
                                                <div className="btinp"><input style={{ width: '100%' }} type="button" value="Reward" className='button' /></div>
                                                <div className="btinp"><input style={{ width: '100%', borderBottomRightRadius: '10px' }} type="button" value="Quotation/Order" className='button' /></div>
                                            </div>
                                        </div>
                                    </form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </CalculatStyled>
    )
}
//! styled components
const CalculatStyled = styled.div`
 position: relative;
 .parenticonsdetails{
     position: relative;
    .iconsdetails{
        position: absolute;
             bottom: 5px;
            right: 0;
        .bsKeyboard{
        position: relative;
        }
    }
 }
.parentpopup{
	padding: 10px 0;
	background: white;
    display: flex;
    justify-content: center;
    .boxbtnU-P{
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        .btn{
            height: 48px;
            width: 49%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: white;
            border-color: #b3b3b3;
            border-radius: 15px;
            font-size: 18px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        }
    }
    .clearfix{
        .btinp{
            .qty{
                background-color: grey !important;
                color: white;
            }
            .price{
                background-color: grey !important;
                color: white;
            }
            .disc{
                background-color: grey !important;
                color: white;
            }
            input{
                width: 103px;
                height: 48px;
                margin: 2px;
                background-color: white;
                border-color: #e6e6e6;
            }
        }
    }
}
`
export default Calculatdiv