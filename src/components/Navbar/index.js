import React from "react";
import { FaBars } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { openPopupWidget } from "react-calendly";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavOr,
} from "./NavbarElements";
import Realistic from "../Fireworks";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const toggleHome = () => {
  scroll.scrollToTop();
};

const onClick = () =>
  openPopupWidget({ url: "https://calendly.com/marcjarrett" });

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Realistic />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to={"about"}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to={"services"}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to={"articles"}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Articles
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to={"testimonials"}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Testimonials
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to={"team"}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Team
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to={{
                pathname: "https://chatwith.io/s/from-emjayconsultancy-com",
              }}
              target="_blank"
            >
              Whatsapp <FaWhatsapp />
            </NavBtnLink>
          </NavBtn>
          <NavOr>or</NavOr>
          <NavBtn>
            <NavBtnLink onClick={onClick}>
              Book a Call <FaHandshake />
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
