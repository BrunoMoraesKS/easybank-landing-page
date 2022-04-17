import styled from "styled-components";

interface IContainerProps {
  align?: "left" | "center";
}

export const Container = styled.section<IContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align === "left" ? "start" : "center")};
  justify-content: space-between;
  gap: 28px;

  text-align: ${({ align }) => (align ? align : "center")};
`;

export const Title = styled.h2``;

export const Paragraph = styled.p``;
