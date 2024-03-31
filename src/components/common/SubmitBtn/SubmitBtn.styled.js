import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(3)};

  border-radius: ${p => p.theme.radii.md};
  background-color: transparent;

  transition: ${p => p.theme.transition('color')},
    ${p => p.theme.transition('background-color')};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
