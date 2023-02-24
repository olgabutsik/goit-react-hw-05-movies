import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledButton = styled(Link)`
  display: inline-flex;
  gap: 2px;
  align-items: center;
  padding: 15px 10px;
  margin-bottom: 10px;
  color: black;

  }
`;

export const StyledAdditional = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;
`;
