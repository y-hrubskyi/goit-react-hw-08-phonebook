import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  padding: 0;

  color: ${p => p.theme.colors.accent};

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  border: 1px solid ${p => p.theme.colors.accent};

  transition: ${p => p.theme.transition('color')},
    ${p => p.theme.transition('background-color')};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;
