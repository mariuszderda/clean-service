import React from 'react';
import styled from 'styled-components';
import HeroWave from '../assets/svg/home-wave.svg';
import HeroImage from '../assets/svg/fero-image.svg';
import Heading from '../components/Heading/Heading';

const StyledWrapper = styled.section`
  width: 100%;
  //height: 100vh;
  position: relative;
  overflow: hidden;
  display: grid;
  background: url('${HeroWave}');
`;

const StyledHeroImage = styled(HeroImage)`
  width: 100%;
`;

const ContentWrapper = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  @media (max-width: ${({ theme }) => theme.screen.tablet}px) {
    flex-direction: column;
    padding-top: 120px;
  }
`;

const StyledHeroWave = styled(HeroWave)`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -9999;
  @media (max-width: ${({ theme }) => theme.screen.tablet}px) {
    top: -50px;
    right: -250px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
const Hero = () => (
  <StyledWrapper>
    <StyledHeroWave />
    <ContentWrapper>
      <TitleWrapper>
        <Heading big as="h1">
          Test
        </Heading>
      </TitleWrapper>
      <StyledHeroImage />
    </ContentWrapper>
  </StyledWrapper>
);

export default Hero;
