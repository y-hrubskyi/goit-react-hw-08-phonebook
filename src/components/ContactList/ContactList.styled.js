import styled from 'styled-components';

export const Table = styled.table`
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.lg};
  border: 1px solid ${p => p.theme.colors.accent};
  overflow: hidden;
`;

export const Placeholder = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
