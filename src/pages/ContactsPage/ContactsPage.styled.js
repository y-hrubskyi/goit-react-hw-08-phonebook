import styled from 'styled-components';

import { ReactComponent as Add } from 'assets/icons/add.svg';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(5)};
  width: 100%;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  right: 10%;
  top: 28px;

  @media screen and (min-width: 568px) {
    right: 25%;
  }
`;

export const AddBtn = styled.button`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  padding: 0;

  color: ${p => p.theme.colors.accent};

  background-color: ${p => p.theme.colors.bg};
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.accent};
  box-shadow: 0px 0px 12px 2px ${p => p.theme.colors.black};

  transition: ${p => p.theme.transition('color')},
    ${p => p.theme.transition('background-color')};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const AddIcon = styled(Add)`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;
