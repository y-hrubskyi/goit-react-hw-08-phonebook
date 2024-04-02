import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HeroImg from 'assets/img/hero.webp';

export const Hero = styled.section`
  width: 100%;
`;

export const PageTitle = styled.h1`
  margin-bottom: ${p => p.theme.spacing(5)};
  text-align: center;
  font-size: 2em;
`;

export const AccentText = styled.span`
  color: ${p => p.theme.colors.accent};
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 400px;
  padding-left: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)};

  background-image: url(${HeroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${p => p.theme.radii.lg};
`;

export const HeroTitle = styled.h2`
  max-width: 400px;
  padding: ${p => p.theme.spacing(5)};

  color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.radii.lg};
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(30px);
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  margin-right: 28%;

  font-weight: 600;
  text-align: center;
  color: ${p => p.theme.colors.white};

  text-decoration: none;
  border-radius: ${p => p.theme.radii.lg};
  border: 2px solid ${p => p.theme.colors.accent};
  background-color: transparent;

  transition: ${p => p.theme.transition('background-color')};

  &:hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;
