import React from "react";
import Time from '../../components/common/Time/Time.component';
import TimeGroup from '../../components/common/TimeGroup/TimeGroup.component';
import { useThemeColors } from '../../hooks/useThemeColors.hook';

export function Seconds() {
  const colors = useThemeColors();

  return (
    <TimeGroup colors={colors}>
      <Time colors={colors}>
        00
      </Time>
    </TimeGroup>
  );
}