import React, { FC } from 'react';
import styled from 'styled-components';
import { IThemeColors } from '../../../../styles/theme/theme.type';

interface ITimeGroupProps {
  colors: IThemeColors
}

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.color};
`;

const TimeGroup: FC<ITimeGroupProps> = ({ colors }) => {
  return(
    <Component color={colors.background}></Component>
  );
}

export default TimeGroup;