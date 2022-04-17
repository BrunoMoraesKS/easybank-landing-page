import React from "react";
import * as S from "./styles";

interface ISectionProps {
  title: string;
  paragraph: string;
  button?: React.ReactNode;
  align?: "left" | "center";
}

const Section = ({ title, paragraph, button, align }: ISectionProps) => {
  return (
    <S.Container align={align}>
      <S.Title>{title}</S.Title>
      <S.Paragraph>{paragraph}</S.Paragraph>
      {button}
    </S.Container>
  );
};

export default Section;
