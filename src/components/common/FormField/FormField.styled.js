import styled from 'styled-components';
import { Field as FormikField, ErrorMessage as FormikError } from 'formik';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
  width: 100%;

  font-size: 18px;
  font-weight: 500;
`;

export const Field = styled(FormikField)`
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};

  font-size: 18px;
  color: ${p => p.theme.colors.black};

  background: ${p => p.theme.colors.bg};
  border: none;
  border-radius: ${p => p.theme.radii.md};
`;

export const ErrorMessage = styled(FormikError)`
  color: ${p => p.theme.colors.red};
  font-size: 16px;
`;
