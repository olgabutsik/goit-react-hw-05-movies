import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledNav, StyledLink } from './SharedLayout.styled';
import StyledContainer from 'components/Container/Container.styled';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <StyledNav>
          <StyledContainer>
            <ul style={{ display: 'flex', gap: '80px', listStyle: 'none' }}>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/movies">Movies</StyledLink>
              </li>
            </ul>
          </StyledContainer>
        </StyledNav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
