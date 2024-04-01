import styled from 'styled-components';

import { ReactComponent as Edit } from 'assets/icons/edit.svg';
import { ReactComponent as Delete } from 'assets/icons/delete.svg';

export const TRow = styled.tr`
  &:nth-child(odd) {
    background-color: ${props => props.theme.colors.bg};
  }
  &:nth-child(even) {
    background-color: ${props => props.theme.colors.white};
  }
`;

export const TBodyData = styled.td`
  padding: ${p => p.theme.spacing(2)};
`;

export const ContactName = styled.p`
  font-weight: 500;
`;

export const ContactNumber = styled.p`
  text-align: center;
`;

export const IconBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
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

export const EditIcon = styled(Edit)`
  width: 18px;
  height: 18px;
  fill: currentColor;
`;

export const DeleteIcon = styled(Delete)`
  width: 18px;
  height: 18px;
  fill: currentColor;
`;
