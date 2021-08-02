import React, { FC } from 'react';
import styled from 'styled-components';
import { fontSizes } from '../../../../styles/theme/constants/fontSizes.constant';
import { IThemeColors } from '../../../../styles/theme/theme.type';

interface ITimeProps {
  colors: IThemeColors
}

const Component = styled.div`
  font-size: ${fontSizes.lg};
  line-height: ${fontSizes.lg};
  color: ${props => props.color};
`;

const Time: FC<ITimeProps> = ({ colors }) => {
  return(
    <Component color={colors.background}></Component>
  );
}

export default Time;