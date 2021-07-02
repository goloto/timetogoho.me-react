import styled from "styled-components";
import {fontSizes} from "../../../styles/theme/constants/fontSizes.constant";
import {useThemeColors} from "../../hooks/useThemeColors.hook";

export const Time = styled.div`
  font-size: ${fontSizes.lg};
  line-height: ${fontSizes.lg};
  color: ${useThemeColors().textContrast};
`;