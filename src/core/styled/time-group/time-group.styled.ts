import styled from "styled-components";
import {useThemeColors} from "../../hooks/useThemeColors.hook";

export const TimeGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${useThemeColors().textContrast};
`;