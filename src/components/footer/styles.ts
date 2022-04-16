import styled from "styled-components";
import { colors, weight } from "../../global/styles";

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
`;

export const Logo = styled.img`
  width: 30%;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const Icon = styled.img`
  width: 25px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  list-style: none;
`;

export const Li = styled.li`
  font-size: 1.5rem;

  color: ${colors.white};
  font-weight: ${weight.small};
`;

export const Span = styled.span``;
