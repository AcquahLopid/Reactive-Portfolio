import React, { useState } from 'react';
import styled from "styled-components";

const COLORS={
    primaryDark:"#115b4c",
    primaryLight:"#B6EDC8",

}

const NavLabel = styled.label`
background-color:${COLORS.primaryLight};
position: fixed;
top: 6rem;
right: 6rem;
border-radius: 50%;
height: 7rem;
width: 7rem;
cursor: pointer;
z-index: 1000;
box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
text-align: center;

`;

const NavBackground = styled.div`
position: fixed;
top: 6.5rem;
right: 6.5rem;
background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
);
height: 6rem;
width: 6rem;
border-radius: 50%;

transform: ${(props) =>(props.clicked? "scale(80)":"scale(0)")};
transition: transform 0.8s;
`;

const Icon = styled.span`

`;
function HamburgerNav() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        console.log('Clicked!');
        setClick(!click);
      };
      
    return (
        <>
            <NavLabel htmlFor="navi-toggle"onClick={handleClick}>
                <Icon clicked={click}>

                </Icon>
            </NavLabel>
            <NavBackground clicked={click}></NavBackground>
        </>
    );
}

export default HamburgerNav;