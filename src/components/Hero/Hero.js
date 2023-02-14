import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to my<br />
        Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this website is to provide a look to my skills as web developer.
      </SectionText>
      <Button onClick={() => window.location = "https://www.google.com"}>Look more</Button>
    </LeftSection>
  </Section>
);

export default Hero;