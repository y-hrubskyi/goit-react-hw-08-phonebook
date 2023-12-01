import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  margin-bottom: ${p => p.theme.spacing(5)};

  border-radius: ${p => p.theme.radii.sm};
  outline-color: ${p => p.theme.colors.blue};
`;
