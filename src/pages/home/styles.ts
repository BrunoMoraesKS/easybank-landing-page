import styled from "styled-components";
import { colors } from "../../global/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bgintro = styled.img`
  position: absolute;

  top: 60px;
  width: 100vw;
  height: 450px;
`;

export const Phones = styled.img`
  width: 85vw;

  margin-top: 70px;
  margin-bottom: 25px;
  z-index: 10;
`;

export const WhyChoose = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  background-color: ${colors.veryLightGray};
  width: 100vw;
  padding: 64px 20px;
  margin-top: 80px;
`;

export const LatestArticles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  background: linear-gradient(${colors.white} 0%, ${colors.veryLightGray} 10%);
  margin-top: 80px;

  width: 100vw;
`;

export const SectionTitle = styled.h3``;
