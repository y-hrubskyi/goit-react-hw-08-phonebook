import {
  AccentText,
  Hero,
  HeroContainer,
  HeroTitle,
  PageTitle,
  StyledLink,
} from './HeroSection.styled';

export const HeroSection = () => {
  return (
    <Hero>
      <PageTitle>
        <AccentText>Welcome</AccentText> to Phonebook app!
      </PageTitle>
      <HeroContainer>
        <HeroTitle>
          Easily manage your contacts and stay organized. Find, add, edit, and
          delete contacts with ease.
        </HeroTitle>
        <StyledLink to="/contacts">Let's go</StyledLink>
      </HeroContainer>
    </Hero>
  );
};
