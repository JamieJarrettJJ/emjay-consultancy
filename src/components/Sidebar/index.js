import { FaWhatsapp } from "react-icons/fa";
import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SideBtnWrap2,
  SidebarRoute,
  SidebarRoute2,
} from "./SidebarElements";

import { openPopupWidget } from "react-calendly";

const onClick = () =>
  openPopupWidget({ url: "https://calendly.com/marcjarrett" });

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            onClick={toggle}
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Services
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="articles"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Articles
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="testimonials"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Testimonials
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="team"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Team
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            to={{
              pathname: "https://chatwith.io/s/from-emjayconsultancy-com",
            }}
            target="_blank"
          >
            Whatsapp <FaWhatsapp />
          </SidebarRoute>
        </SideBtnWrap>
        <SideBtnWrap2>
          <SidebarRoute2 onClick={onClick} to="#contact">
            Book a Call <FaWhatsapp />
          </SidebarRoute2>
        </SideBtnWrap2>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
