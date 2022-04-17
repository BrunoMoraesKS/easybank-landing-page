import React from "react";
import * as S from "./styles";
import bgIntroMobile from "../../assets/images/bg-intro-mobile.svg";
import bgIntroDesktop from "../../assets/images/bg-intro-desktop.svg";
import phones from "../../assets/images/image-mockups.png";
import budget from "../../assets/images/icon-budgeting.svg";
import api from "../../assets/images/icon-api.svg";
import online from "../../assets/images/icon-online.svg";
import onboarding from "../../assets/images/icon-onboarding.svg";
import currency from "../../assets/images/image-currency.jpg";
import confetti from "../../assets/images/image-confetti.jpg";
import plane from "../../assets/images/image-plane.jpg";
import restaurant from "../../assets/images/image-restaurant.jpg";
import Section from "../../components/section";
import Button from "../../components/button";
import IconSection from "../../components/iconSection";
import Article from "../../components/article";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { breakpoints } from "../../global/styles";

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <S.Container>
      <S.Presentation>
        <S.BgIntro
          src={
            Number(breakpoints.sm.split("px")[0]) > width
              ? bgIntroMobile
              : bgIntroDesktop
          }
          alt='background phones'
        />
        <S.Phones src={phones} alt='background phones' />
        <S.PresentationSectionContainer>
          <Section
            title='Next generation digital banking'
            paragraph='Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.'
            button={<Button content='Request Invite' />}
            align={
              Number(breakpoints.md.split("px")[0]) > width ? "center" : "left"
            }
          />
        </S.PresentationSectionContainer>
      </S.Presentation>

      <S.WhyChoose>
        <S.WhyChooseSectionContainer>
          <Section
            title='Why choose Easybank?'
            paragraph='We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before.'
            align={
              Number(breakpoints.md.split("px")[0]) > width ? "center" : "left"
            }
          />
        </S.WhyChooseSectionContainer>

        <S.WhyChooseIconsSection>
          <IconSection
            icon={online}
            title='Online Banking'
            paragraph='Our modern web and mobile applications allow you to keep track of your finances 
          wherever you are in the world.'
            align={
              Number(breakpoints.md.split("px")[0]) > width ? "center" : "left"
            }
          />

          <IconSection
            icon={budget}
            title='Simple Budgeting'
            paragraph='See exactly where your money goes each month. Receive notifications when you’re 
          close to hitting your limits.'
            align={
              Number(breakpoints.md.split("px")[0]) > width ? "center" : "left"
            }
          />

          <IconSection
            icon={onboarding}
            title='Fast Onboarding'
            paragraph='We don’t do branches. Open your account in minutes online and start taking control 
          of your finances right away.'
            align={
              Number(breakpoints.md.split("px")[0]) > width ? "center" : "left"
            }
          />

          <IconSection
            icon={api}
            title='Open API'
            paragraph='Manage your savings, investments, pension, and much more from one account. Tracking 
          your money has never been easier.'
            align={
              Number(breakpoints.md.split("px")[0]) > width ? "center" : "left"
            }
          />
        </S.WhyChooseIconsSection>
      </S.WhyChoose>

      <S.LatestArticles>
        <S.SectionTitle>Latest Articles</S.SectionTitle>

        <S.LatestArticlesSection>
          <Article
            image={currency}
            writter='By Claire Robinson'
            title='Receive money in any currency with no fees'
            paragraph='The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
          />

          <Article
            image={restaurant}
            writter='By Wilson Hutton'
            title='Treat yourself without worrying about money'
            paragraph='Our simple budgeting feature allows you to separate out your spending and set 
          realistic limits each month. That means you …'
          />

          <Article
            image={plane}
            writter='By Wilson Hutton'
            title='Take your Easybank card wherever you go'
            paragraph='We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
          while you’re abroad. We’ll even show you …'
          />

          <Article
            image={confetti}
            writter='By Claire Robinson'
            title='Our invite-only Beta accounts are now live!'
            paragraph='After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
          It’s easy to request an invite through the site ...'
          />
        </S.LatestArticlesSection>
      </S.LatestArticles>
    </S.Container>
  );
};

export default Home;
