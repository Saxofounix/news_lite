import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const NavBar = styled.nav`
  height: 4rem;
  background: #1c5196;
  display: flex;
  align-items: center;
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  margin-left: 1rem;
`;

export const Right = styled.div`
  flex: 1;
`;

export const NavLink = styled(Link)`
  text-transform: uppercase;
  margin-left: 1rem;
  font-size: 110%;
  color: white;
  text-decoration: none;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const NavLogo = styled(Link)`
  text-transform: uppercase;
  margin-left: 1rem;
  font-size: 110%;
  color: white;
  text-decoration: none;
`;

export const Weather = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-right: 2rem;
`;
export const Da = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Temperature = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;
export const Bars = styled(FaBars)`
  color: white;
  margin-right: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 3;

  @media screen and (min-width: 801px) {
    display: none;
  }
`;

export const SideMenu = styled.div`
  position: fixed;
  padding: 6rem;
  height: 100%;
  width: 20%;
  background-color: #1c5196;
  z-index: 999;
  top: 0;
  right: ${({ toggle }) => (toggle ? "0" : "-100%")};
  transition: 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 801px) {
    display: none;
  }
`;

export const MobileLink = styled(Link)`
  text-transform: uppercase;
  margin-left: 1rem;
  font-size: 110%;
  color: white;
  text-decoration: none;
`;

export const Icon = styled(FaTimes)`
  color: white;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  margin: 1.5rem 2rem;
  right: 0;
  top: 0;
`;
