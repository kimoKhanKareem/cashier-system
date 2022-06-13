import styled from 'styled-components';
// import { Container, Row, Col } from 'react-bootstrap';



const PayCalcu = () => {

    return (
        <Wrapper>
            <div className="d-flex" style={{ width: '100%' }}>
                <div className="clearinfix">
                    <div className="btinp">
                        <input style={{ borderTopLeftRadius: '10px' }} type="button" value='1' className='buttonValue' />
                    </div>
                    <div className="btinp"><input type="button" name="4" value="4" className='buttonValue' /></div>
                    <div className="btinp"><input type="button" value="7" className='buttonValue' /></div>
                    <div className="d-flex">
                        <div className="btinp">
                            {/* input-- */}
                            <input style={{ width: '90px', marginRight: '0', borderBottomLeftRadius: '10px' }} type="button" value="-"
                                className='buttonminus' /></div>
                        <div className="btinp">
                            {/* input++ */}
                            <input style={{ width: '90px', marginLeft: '0' }} type="button" value="+"
                                className='buttonValue' />
                        </div>
                    </div>
                </div>
                <div className="clearinfix">
                    <div className="btinp"><input type="button" value="2" className='buttonValue' /></div>
                    <div className="btinp"><input type="button" value="5" className='buttonValue' /></div>
                    <div className="btinp"><input type="button" value="8" className='buttonValue' /></div>
                    <div className="btinp"><input type="button" value="0" className='buttonValue' /></div>
                </div>
                <div className="clearinfix">
                    <div className="btinp"><input type="button" value="3" className='buttonValue' /></div>
                    <div className="btinp"><input type="button" value="6" className='buttonValue' /></div>
                    <div className="btinp"><input type="button" value="9" className='buttonValue' /></div>
                    <div className="btinp"><input type="button" value="." className='buttonValue' /></div>
                </div>
                <div className="clearinfix">
                    {/* click +10 */}
                    <div className="btinp"><input type="button" value="+10" className={"buttonValue kimo"} style={{ borderTopRightRadius: '10px' }} /></div>
                    {/* click +20 */}
                    <div className="btinp"><input type="button" value="+20" className={"buttonValue"} /></div>
                    {/* click +50 */}
                    <div className="btinp"><input type="button" value="+50" className={"buttonValue"} /></div>
                    <div className="btinp"><input type="button" value="&#215;" className='buttonValue' style={{ borderBottomRightRadius: '10px' }} /></div>
                </div>
            </div>
            <div className="useinfix  mt-2">
                <div className="btinp d-flex justify-content-between" style={{ width: '100%' }}>
                    {/* input-- */}
                    <input style={{ width: '48%', marginRight: '0', borderRadius: '10px' }} type="button" value="Kimo Khan"
                        className='buttonminus' />
                    {/* input++ */}
                    <input style={{ width: '48%', marginLeft: '0', borderRadius: '10px' }} type="button" value="Invoice"
                        className='buttonValue' />
                </div>
            </div>
        </Wrapper>
    )
}
//! styled components
const Wrapper = styled.div`
    .clearinfix{
        .btinp{
            input{
                width: 180px;
                height: 85px;
                margin: 2px;
                background-color: white;
                border-color: #e6e6e6;
            }
            input[value] {
            font-size: 1.5em;
            }
        }
    }
    .useinfix{
        .btinp{
            input{
                width: 150px;
                height: 70px;
                margin: 2px;
                background-color: white;
                border-color: #e6e6e6;
            }
            input[value] {
            font-size: 1.2em;
            }

        }
    }

    `
export default PayCalcu