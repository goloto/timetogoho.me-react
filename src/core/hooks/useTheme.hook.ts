import {Themes} from "../../styles/theme/constants/themes.constant";
import {ITheme} from "../../styles/theme/theme.type";
import {dark} from "../../styles/theme/dark";
import {light} from "../../styles/theme/light";

export function useTheme(theme: Themes): ITheme {
  switch (theme) {
    case Themes.dark:
      return dark;
    case Themes.light:
      return light;
  }
}