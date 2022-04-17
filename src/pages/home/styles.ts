import styled, { keyframes } from "styled-components";
import { breakpoints, colors } from "../../global/styles";

import { bounceInRight, bounceInLeft } from "react-animations";

const bounceRightAnimation = keyframes`${bounceInRight}`;
const bounceLeftAnimation = keyframes`${bounceInLeft}`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Presentation = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row-reverse;

    width: 100vw;

    height: 480px;
    justify-content: start;

    padding: 0 16%;
  }
`;

export const PresentationSectionContainer = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;

  animation: 1s ${bounceLeftAnimation};

  @media (min-width: ${breakpoints.sm}) {
    width: 50%;
  }
  @media (min-width: ${breakpoints.md}) {
    width: 45%;
    position: relative;
    top: 60px;
  }
`;

export const BgIntro = styled.img`
  position: absolute;

  top: 60px;
  width: 100vw;
  height: 450px;

  @media (min-width: ${breakpoints.md}) {
    top: 20px;
    right: -150px;

    width: 80vw;
    max-width: 700px;
    height: 690px;
  }

  @media (min-width: ${breakpoints.lg}) {
    top: 20px;
    right: -150px;

    width: 90vw;
    max-width: 900px;
    height: 690px;
  }
`;

export const Phones = styled.img`
  width: 90vw;
  max-width: 500px;

  margin-top: 70px;
  margin-bottom: 25px;
  z-index: 10;

  animation: 1s ${bounceRightAnimation};

  overflow: hidden;

  @media (min-width: ${breakpoints.md}) {
    position: absolute;

    right: -50px;

    width: 60vw;
    max-width: 480px;

    margin-top: 130px;
    margin-bottom: 0;
  }
  @media (min-width: ${breakpoints.lg}) {
    right: -40px;

    width: 70vw;
    max-width: 600px;
  }
`;

export const WhyChoose = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  background-color: ${colors.veryLightGray};
  width: 100vw;
  padding: 64px 16%;
  margin-top: 80px;

  z-index: 9;
`;

export const WhyChooseSectionContainer = styled.div`
  @media (min-width: ${breakpoints.sm}) {
    position: relative;

    width: 70%;
  }
  @media (min-width: ${breakpoints.md}) {
    width: 100%;
    margin-bottom: 50px;

    p {
      width: 550px;
    }
  }
`;

export const WhyChooseIconsSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 64px;

  max-width: 1440px;

  @media (min-width: ${breakpoints.sm}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    padding: 0;
  }
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const LatestArticlesSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 64px;

  max-width: 1440px;

  @media (min-width: ${breakpoints.sm}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    padding: 0 64px;
  }
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0;

    padding: 0 0;
  }
`;

export const LatestArticles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  background: linear-gradient(${colors.white} 0%, ${colors.veryLightGray} 10%);
  margin-top: 80px;

  width: 100vw;

  padding-bottom: 100px;

  @media (min-width: ${breakpoints.md}) {
    padding-bottom: 50px;

    padding: 64px 14%;
  }
`;

export const SectionTitle = styled.h3`
  display: flex;
  width: 100%;
  padding: 0 24px;
  @media (min-width: ${breakpoints.md}) {
    text-align: left;
  }
`;
