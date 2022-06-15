import { Container, Navbar } from 'react-bootstrap'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FaUserCircle, FaMoneyBillWave } from 'react-icons/fa';
import { GiSwipeCard } from 'react-icons/gi';

const NavBar = () => {
    return (
        <NavbarStyled>
            <Navbar  expand="lg">
                <Container fluid>
                    <div className='box-nav'>
                        <Link to="/"><img className={'logovodo'} src="image/logo_01.png" alt="..." /></Link>
                        <div className="childbox-nav">
                            <Link to='#'>
                                <FaMoneyBillWave className='navIcons' />
                                Cash In/Out
                            </Link>
                            <Link to="#" className='order'>
                                <GiSwipeCard  className='navIcons' />
                                Orders
                                <span className='orderspan'></span>
                            </Link>
                            <div className='inpu-search d-flex align-items-center'>
                                <input
                                    type="search"
                                    placeholder="Search Products"
                                    aria-label="Search"
                                />
                                <BsSearch className='bsSearch' style={{fill: 'white'}}/>
                            </div>
                            <Link to='#'>
                                <FaUserCircle className='navIcons'  />
                                Hello, Kimo Khan
                            </Link>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </NavbarStyled >
    )
}
//! styled components
const NavbarStyled = styled.header`
width: 100%;
height:80px;
.box-nav{
    width:100% ;
    height: 100%;
    display: flex;
    align-items: center;
    a{
        .logovodo{
            width: 231px;
             margin-right: 20px;
             @media (min-width: 1200px){
                width: 180px;
            }
        }
    }
    .childbox-nav{
        width: 100%;
        display: flex;
        justify-content: end;
        a{
        padding: 10px;
        font-size: 20px;
        /* iconst nav bar responsiv 1280 */
            .navIcons{
                font-size: 35px;
                margin-right: 5px;
                @media (min-width: 1200px){
                    .navIcons{
                        font-size: 25px;
                    }
                }
            }
        }
    }
    .inpu-search{
        position: relative;
        input{
            width: 100vh !important;
            height: 40px;
            border-radius: 50px;
            border: 1px solid var(--th-color);
            padding: 0 10px;
            /* responsive -------- 1280*/
            @media (min-width: 1200px){
                input{
                    width: 50vh !important;
                    height: 40px;
                }
            }
        }
        [type=search] {
            outline-offset: 0 !important;
        }
        .bsSearch{
        font-size: 40px;
        position: absolute;
        top: 5px;
        right: 0;
        background-color: var(--red-color);
        padding: 8px;
        border-radius: 20px;   
        /* responsive--------1280*/
        @media (min-width: 1200px){
            font-size: 34px;
            top: 8px;
            right: 3px;
        }
    }
}
}
`
export default NavBar