import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};

  font-size: 18px;
  font-weight: 500;
  color: ${p => p.theme.colors.black};

  border: none;
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => p.theme.colors.bg};

  transition: ${p => p.theme.transition('color')},
    ${p => p.theme.transition('background-color')};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
