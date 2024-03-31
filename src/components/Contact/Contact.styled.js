import styled from 'styled-components';

import { ReactComponent as Edit } from 'assets/icons/edit.svg';
import { ReactComponent as Delete } from 'assets/icons/delete.svg';

export const ContactData = styled.span`
  margin-right: ${p => p.theme.spacing(5)};
`;

export const EditIcon = styled(Edit)`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;

export const DeleteIcon = styled(Delete)`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;
