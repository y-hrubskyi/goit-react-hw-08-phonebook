import styled from 'styled-components';

import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${p => p.theme.spacing(5)};
  width: 320px;
  padding: ${p => p.theme.spacing(6)};

  background-color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.bg};
  border-radius: ${p => p.theme.radii.lg};
`;
