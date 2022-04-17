import styled from "styled-components";
import { colors } from "../../global/styles";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin: 0 24px;
  padding-bottom: 32px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  background-color: ${colors.white};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 0 16px;
`;

export const Image = styled.img`
  height: 50%;
  width: 100%;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Writter = styled.span``;

export const Title = styled.h4`
  transition: all 0.3s ease-in;

  &:hover {
    color: ${colors.limeGreen};
  }
`;

export const Paragraph = styled.p`
  line-height: 20px;
`;
