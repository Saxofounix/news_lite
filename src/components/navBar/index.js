import React, { useState } from "react";

import {
  NavBar,
  NavLink,
  NavLogo,
  Right,
  Left,
  Weather,
  Da,
  Bars,
  SideMenu,
  MobileLink,
  Icon,
} from "./navBarElements";

const Navbar = ({ setPage, setActiveIndex }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let day = newDate.getDay();

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
    // setPage(1);
  };

  const Top = () => {
    setPage(1);
    setActiveIndex(0);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  };

  return (
    <>
      <NavBar>
        <SideMenu toggle={toggle}>
          <Icon
            onClick={() => {
              handleClick();
            }}
          />
          <MobileLink
            to="/section/business"
            onClick={() => {
              Top();
              handleClick();
            }}
          >
            Business
          </MobileLink>
          <MobileLink
            to="/section/technology"
            onClick={() => {
              Top();
              handleClick();
            }}
          >
            Technology
          </MobileLink>

          <MobileLink
            to="/section/culture"
            onClick={() => {
              Top();
              handleClick();
            }}
          >
            Culture
          </MobileLink>
          <MobileLink
            to="/section/sport"
            onClick={() => {
              Top();
              handleClick();
            }}
          >
            Sport
          </MobileLink>
        </SideMenu>
        <Left>
          <NavLogo to="/" onClick={Top}>
            Ta3
          </NavLogo>
          <NavLink to="/section/business" onClick={Top}>
            Business
          </NavLink>
          <NavLink to="/section/technology" onClick={Top}>
            Technology
          </NavLink>
          <NavLink to="/section/culture" onClick={Top}>
            Culture
          </NavLink>
          <NavLink to="/section/sport" onClick={Top}>
            Sport
          </NavLink>
        </Left>
        <Right>
          <Weather>
            <Da>{`${days[day]} ${date}.${month}.${year}`}</Da>
          </Weather>
        </Right>
        <Bars onClick={handleClick} />
      </NavBar>
    </>
  );
};

export default Navbar;
