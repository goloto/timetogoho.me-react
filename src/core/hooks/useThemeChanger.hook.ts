import {Themes} from "../../styles/theme/constants/themes.constant";
import {Cookies} from "../constants/cookies.constant";
import {useCookie} from "./useCookie.hook";

export function useThemeChanger(theme: Themes) {
  useCookie(Cookies.theme, theme);
}