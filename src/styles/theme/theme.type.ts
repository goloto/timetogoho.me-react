export interface IThemeChanger {
  getCurrent(): ITheme,
  changeTo(theme: string): void,
}

export interface ITheme {
  colors: IThemeColors,
}

export interface IThemeColors {
  background: string,
  textContrast: string,
  textSoft: string,
  buttonBackgroundGray: string,
  buttonBackgroundGrayHover: string,
  buttonBackgroundBlue: string,
  buttonBackgroundBlueHover: string,
  buttonBackgroundViolet: string,
  buttonBackgroundVioletHover: string,
}

export interface IFontSizes {
  main: string,
  second: string,
  third: string,
}