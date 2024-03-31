import styled from 'styled-components';
import { Field as FormikField, ErrorMessage as FormikError } from 'formik';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
`;

export const Field = styled(FormikField)`
  font: inherit;

  border-radius: ${p => p.theme.radii.sm};
  outline-color: ${p => p.theme.colors.accent};
`;

export const ErrorMessage = styled(FormikError)`
  color: ${p => p.theme.colors.red};
  font-size: 16px;
`;
