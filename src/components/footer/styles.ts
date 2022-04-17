import styled from "styled-components";
import { breakpoints, colors, weight } from "../../global/styles";

export const Container = styled.footer`
  position: absolute;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  width: 100vw;
  padding: 32px 0;

  background: ${colors.darkBlue};

  @media (min-width: ${breakpoints.md}) {
    height: 200px;
    flex-direction: row;

    justify-content: space-around;
  }
`;

export const Logo = styled.img`
  width: 120px;
`;

export const LogoIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: ${breakpoints.md}) {
    align-items: flex-start;

    gap: 48px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const Icon = styled.img`
  width: 25px;

  @media (min-width: ${breakpoints.md}) {
    width: 18px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  list-style: none;

  @media (min-width: ${breakpoints.md}) {
    flex-wrap: wrap;
    height: 75%;
    align-items: flex-start;
  }
`;

export const Li = styled.li`
  font-size: 1.5rem;

  color: ${colors.white};
  font-weight: ${weight.small};

  cursor: pointer;

  @media (min-width: ${breakpoints.md}) {
    color: ${colors.grayishBlue};
    margin-right: 240px;
    margin-left: -128px;
  }

  transition: all 0.3s ease-in;

  &:hover {
    color: ${colors.limeGreen};
  }
`;

export const Span = styled.span``;

export const ButtonCopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: ${breakpoints.md}) {
    align-items: flex-end;
    gap: 16px;
  }
`;
