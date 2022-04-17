import styled from "styled-components";
import { breakpoints, colors, weight } from "../../global/styles";

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
  width: 100vw;

  background: ${colors.white};

  z-index: 20;

  @media (min-width: ${breakpoints.sm}) {
    padding: 16px 4.5%;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 16px 13.5%;
  }
`;

export const Logo = styled.img``;

export const ButtonContainer = styled.div`
  display: none;

  @media (min-width: ${breakpoints.sm}) {
    display: flex;
  }
`;

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

  @media (min-width: ${breakpoints.sm}) {
    position: relative;

    top: 0;
    left: 0;
    transform: translateX(0);

    height: 50px;
    width: 400px;

    background: none;

    visibility: visible;
    opacity: 1;
  }
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

  @media (min-width: ${breakpoints.sm}) {
    position: relative;

    margin-bottom: 0;
    height: 100%;
    width: 100%;
  }
`;

export const MobileMenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 3rem;
  z-index: 50;
  cursor: pointer;

  @media (min-width: ${breakpoints.sm}) {
    display: none;
  }
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

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
`;

export const Li = styled.li`
  font-size: 1.6rem;

  color: ${colors.darkBlue};
  font-weight: ${weight.large};

  cursor: pointer;

  z-index: 9999;

  @media (min-width: ${breakpoints.sm}) {
    color: ${colors.grayishBlue};

    &:hover {
      border-bottom: 4px solid ${colors.limeGreen};
      border-radius: 1px;

      position: relative;
      padding-bottom: 27px;
      top: 16px;
    }
  }
`;
