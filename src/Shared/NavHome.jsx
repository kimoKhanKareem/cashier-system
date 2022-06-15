import React from 'react'
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NavHome = () => {
    return (
        <BarhomeStyled>
            <div className="parentBar">
                <Link to='/'>
                    <AiFillHome className="aiOutlineHome" />
                    <h5>Lens</h5>
                </Link>
            </div>
        </BarhomeStyled>
    )
}
//! styled components
const BarhomeStyled = styled.div`
padding-bottom: 1%;
padding-top: 1%;
    .parentBar{
        width: 100%;
        height: 55px;
        background-color: var(--red-color);
        border-radius: 15px;
        display: flex;
        align-items: center;
        a{
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;

            .aiOutlineHome{
            background-color: var(--first-color);
            fill: var(--red-color);
            border-radius: 15px;
            /* height: 100%; */
            height: 55px;
            width: 60px;
            padding: 10px;
            }
            h5{
                margin: 0;
                color: var(--white-color);
                margin-left: 10px;
            }
        }
    }
`
export default NavHome