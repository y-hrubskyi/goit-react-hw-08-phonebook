import styled from 'styled-components';

export const UserAvatar = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;

  font-weight: 600;
  font-size: 16px;
  color: ${p => p.theme.colors.accent};

  background: #b6e0b6;
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.accent};
`;
