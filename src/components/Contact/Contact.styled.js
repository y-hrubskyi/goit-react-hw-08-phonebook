import styled from 'styled-components';

import { ReactComponent as Edit } from 'assets/icons/edit.svg';
import { ReactComponent as Delete } from 'assets/icons/delete.svg';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${p => p.theme.spacing(5)};
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
`;

export const ContactData = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};

  font-size: 18px;
`;

export const ContactName = styled.p`
  min-width: min-content;
  font-weight: 500;
`;

export const IconBtns = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
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
