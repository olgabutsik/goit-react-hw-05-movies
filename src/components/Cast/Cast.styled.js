import styled from '@emotion/styled';

export const StyledCastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  margin: 0;
  margin-top: 20px;
  padding: 0;
`;

export const StyledCastItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 0 0 10px;
  width: calc((100% - 20px) / 4);
  text-align: center;
`;

export const StyledCastPicture = styled.img`
  width: 100px;
`;

export const StyledCastText = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
`;
