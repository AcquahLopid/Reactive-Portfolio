import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import styled, {keyframes} from "styled-components";

//Navbar logos
import Github from "./Assets/githubLogo.png";
import Linkedin from "./Assets/linkedin.png";
import Medium from "./Assets/medium.png";

const COLORS={
    primaryDark:"#42275a", //#115b4c
    primaryLight:"#734b6d", //#B6EDC8

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
z-index: 600;
transform: ${(props) =>(props.clicked? "scale(80)":"scale(0)")};
transition: transform 0.8s;
`;

const Icon = styled.span`
    position: relative;
    background-color: ${(props) => (props.clicked? "transparent": "black")};
    width: 3rem;
    height: 2px;
    display: inline-block;
    margin-top: 3.5rem;
    transition: all 0.3s;

&::before, &::after{
    content:"";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
}

&::before{
    top: ${(props) => (props.clicked? "0": "-0.8rem")};
    transform: ${(props) => (props.clicked? "rotate(135deg)": "rotate(0)")};
}

&::after{
    top: ${(props) => (props.clicked? "0": "0.8rem")};
    transform: ${(props) => (props.clicked? "rotate(-135deg)": "rotate(0)")};
}

${NavLabel}:hover   &::before{
    top: ${(props) => (props.clicked? "0": "1rem")};
}
${NavLabel}:hover   &::after{
    top: ${(props) => (props.clicked? "0": "-1rem")};
}

`;

const Navigation = styled.nav`
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 600;
    width: ${(props) => (props.clicked ? "100%" : "0")};
    opacity: ${(props) => (props.clicked ? "1" : "0")};

    transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
    position: absolute;
    list-style: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
`;

const ListLink = styled(NavLink)`
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    text-decoration: none;
    color: ${COLORS.primaryLight};
    padding: 1rem 2rem;

    background-image:linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        #fff 50%);
    background-size: 240%;
    transition: all 0.4s;

    &:hover, &:active {
        background-position: 100%;
        color: ${COLORS.primaryDark};
        transform: translateX(1rem);
    }
`;

const LogoLinks = styled.li`
    justify-content: center;
    align-items: center;
    padding: 10px
    `;

    const bounceAnimation = keyframes`
        0%, 20%, 60%, 100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    
        40% {
            -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
        }
    
        80% {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
        }
    `; 
const LogoImg = styled.img`
    width: 60px; 
    height: 60px; 
    padding: 10px;
    &:hover {
        animation: ${bounceAnimation} 1s infinite;
    }
`;


const LogoA = styled.a`
    // &:hover {
    //     animation: ${bounceAnimation} 1s infinite;
    // }
`;

function HamburgerNav() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
      
    return (
        <>
            <NavLabel htmlFor="navi-toggle"onClick={handleClick}>
                <Icon clicked={click}>
                    &nbsp;
                </Icon>
            </NavLabel>
            <NavBackground clicked={click}></NavBackground>

            <Navigation clicked={click}>
            
                <List>
                    <li>
                        <ListLink onClick={handleClick} to = "/">
                            About
                        </ListLink>
                    </li>
                    <li>
                        <ListLink onClick={handleClick} to = "/portfolio">
                            Portfolio
                        </ListLink>
                    </li>
                    <li>
                        <ListLink onClick={handleClick} to = "/resume">
                            Resume
                        </ListLink>
                    </li>
                    <li>
                        <ListLink onClick={handleClick} to = "/contact">
                            Contact
                        </ListLink>
                    </li>
                    <LogoLinks>

                        <LogoA href="https://github.com/AcquahLopid" >
                            <LogoImg src={Github} alt="Emanuel Molina's Github"/>
                        </LogoA>
                        <LogoA href="https://www.linkedin.com/in/emanuel-molina-65b84426b/" >
                            <LogoImg src={Linkedin} alt="Emanuel Molina's Linkedin"/>
                        </LogoA>
                        <LogoA href="https://medium.com/@emanuel.molina2k" >
                            <LogoImg src={Medium} alt="Emanuel Molina's Medium Blog"/>
                        </LogoA>
                    </LogoLinks>
                </List>
            </Navigation>
        </>
    );
}

export default HamburgerNav;
