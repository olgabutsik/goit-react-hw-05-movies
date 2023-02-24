import styled from '@emotion/styled';

export const StyledCard = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

export const StyledPoster = styled.img`
  width: 200px;
  height: 200px;
  &:hover {
    transform: scale(1.3);
    transition: 0.3s;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
`;

export const StyledTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
`;

export const StyledSubTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

export const StyledText = styled.p`
  font-size: 1.2em;
  font-weight: 300;
`;
