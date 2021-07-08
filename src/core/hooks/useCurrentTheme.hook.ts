import {Themes} from "../../styles/theme/constants/themes.constant";
import {Cookies} from "../constants/cookies.constant";
import {useCookie} from "./useCookie.hook";

export function useCurrentTheme(): Themes {
  const cookie = useCookie(Cookies.theme);

  switch (cookie) {
    case Themes.light:
      return Themes.light;
    case Themes.dark:
      return Themes.dark;
    default:
      return Themes.light;
  }
}