import { Form as FormikForm } from 'formik';
import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${p => p.theme.spacing(5)};
  padding: ${p => p.theme.spacing(3)};
  margin-bottom: ${p => p.theme.spacing(5)};

  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.md};
`;
