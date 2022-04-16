import React from "react";
import * as S from "./styles";

interface IArticleProps {
  image: string;
  writter: string;
  title: string;
  paragraph: string;
}

const Article = ({ image, writter, title, paragraph }: IArticleProps) => {
  return (
    <S.Container>
      <S.Image src={image} />
      <S.Content>
        <S.Writter>{writter}</S.Writter>
        <S.Title>{title}</S.Title>
        <S.Paragraph>{paragraph}</S.Paragraph>
      </S.Content>
    </S.Container>
  );
};

export default Article;
