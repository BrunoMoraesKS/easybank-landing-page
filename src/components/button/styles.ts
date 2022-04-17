import styled from "styled-components";
import { colors } from "../../global/styles";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 24px;
  border: none;
  border-radius: 32px;

  cursor: pointer;

  background-image: linear-gradient(
    to right,
    ${colors.limeGreen},
    ${colors.brightCyan}
  );

  color: ${colors.white};

  transition: all 0.3s ease-in;

  &:hover {
    opacity: 0.5;
  }
`;
