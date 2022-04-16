import styled from "styled-components";
import { colors, weight } from "../../global/styles";

interface IMobileMenu {
  isMenuOpen: boolean;
}

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;

  padding: 16px 24px;
  width: 100%;

  background: ${colors.white};

  z-index: 20;
`;

export const Logo = styled.img``;

export const MobileMenu = styled.div<IMobileMenu>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;

  top: 60px;
  left: 50%;
  transform: translateX(-50%);

  height: 100vh;
  width: 100vw;

  background: linear-gradient(
    ${colors.transparentDarkBlue} 0%,
    ${colors.transparentVeryLightGray} 95%
  );

  visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};

  transition: all 0.3s ease-in;
`;
export const Content = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;

  margin-bottom: 410px;
  height: 280px;
  width: 85vw;

  border-radius: 8px;

  background-color: ${colors.white};
`;

export const MobileMenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 3rem;
  z-index: 50;
  cursor: pointer;
`;

export const MobileMenuIcon = styled.span<IMobileMenu>`
  position: relative;
  background-color: black;
  width: 30px;
  height: 1px;
  display: inline-block;
  background-color: ${({ isMenuOpen }) =>
    isMenuOpen ? "transparent" : "black"};
  transition: all 0.3s ease-in;
  z-index: 50;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 30px;
    height: 1px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s ease-in;
  }
  &::before {
    top: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "-0.65rem")};
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "rotate(45deg)" : "rotate(0)"};
  }
  &::after {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "rotate(-45deg)" : "rotate(0)"};
    top: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "0.65rem")};
  }
  cursor: pointer;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  list-style: none;

  z-index: 999;
`;

export const Li = styled.li`
  font-size: 1.6rem;

  color: ${colors.darkBlue};
  font-weight: ${weight.large};

  z-index: 9999;
`;
