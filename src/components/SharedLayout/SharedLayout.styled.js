import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledNav = styled.nav`
  padding: 25px 0;
`;

export const StyledLink = styled(NavLink)`
  padding: 5px 0;
  font-size: 28px;
  font-weight: 400;
  color: #2f10f5;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: black;
  }
`;
