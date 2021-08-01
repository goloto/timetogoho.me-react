import React from 'react';
import styled from "styled-components";
import {fontSizes} from "../../../../styles/theme/constants/fontSizes.constant";
import {IThemeColors} from "../../../../styles/theme/theme.type";

interface ITimeProps extends React.Props<any>{
  colors: IThemeColors
}

const Component = styled.div`
  font-size: ${fontSizes.lg};
  line-height: ${fontSizes.lg};
  color: ${props => props.color};
`;

export default function Time({ colors }: ITimeProps) {
  return(
    <Component color={colors.background}></Component>
  );
}