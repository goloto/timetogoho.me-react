import { ITheme, IThemeColors } from '../theme.type';

const lightColors: IThemeColors = {
  background: `rgb(240, 240, 250)`,
  textContrast: `rgb(55, 55, 75)`,
  textSoft: `rgb(200, 200, 230)`,
  buttonBackgroundGray: `rgb(200, 200, 230)`,
  buttonBackgroundGrayHover: `rgb(225, 225, 255)`,
  buttonBackgroundBlue: `rgb(200, 200, 255)`,
  buttonBackgroundBlueHover: `rgb(220, 220, 255)`,
  buttonBackgroundViolet: `rgb(170, 170, 240)`,
  buttonBackgroundVioletHover: `rgb(205, 205, 255)`,
}

export const light: ITheme = {
  colors: lightColors
}