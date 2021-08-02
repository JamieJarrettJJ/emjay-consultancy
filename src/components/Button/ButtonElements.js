import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#25D366" : "#25D366")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 20px")};
  color: ${({ dark }) => (dark ? "#000" : "#010606")};
  font-size: ${({ fontBig }) => (fontBig ? "24px" : "20px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ primary }) => (primary ? "#010606" : "#fff")};
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#010606")};
  }
`;
