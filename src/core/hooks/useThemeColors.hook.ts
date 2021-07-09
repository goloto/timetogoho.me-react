import {useCurrentTheme} from "./useCurrentTheme.hook";
import {useTheme} from "./useTheme.hook";

export function useThemeColors() {
  return useTheme(useCurrentTheme()).colors;
}