import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
  padding: ${p => p.theme.spacing(4)};

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.lg};
`;

export const Placeholder = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
