import React from 'react';
import styled from "styled-components";
import { useThemeColors } from '../../hooks/useThemeColors.hook';
import { fontSizes } from '../../../styles/theme/constants/fontSizes.constant';

export function TimerDescription(props: {children: string}) {
  const colors = useThemeColors();
  const Container = styled.div`
    display: flex;
    justify-content: center;
  `;
  const Text = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${colors.textSoft};
    font-size: ${fontSizes.sm};
    line-height: ${fontSizes.sm};
    text-transform: uppercase;
  `;

  return(
    <Container>
      <Text>
        {props.children}
      </Text>
    </Container>
  );
}