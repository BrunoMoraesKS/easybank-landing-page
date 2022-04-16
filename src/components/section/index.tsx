import React from "react";
import * as S from "./styles";

interface ISectionProps {
  title: string;
  paragraph: string;
  button?: React.ReactNode;
}

const Section = ({ title, paragraph, button }: ISectionProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Paragraph>{paragraph}</S.Paragraph>
      {button}
    </S.Container>
  );
};

export default Section;
