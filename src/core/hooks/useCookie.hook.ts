import {Cookies} from "../constants/cookies.constant";

export function useCookie(cookie: Cookies, value?: string): string | undefined {
  if (value) {
    document.cookie = `${cookie}=${value}; samesite=strict; max-age=31536000`;
  } else {
    const matches = document.cookie.match(
      new RegExp(`
        (?:^|; )
        ${cookie.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}
        =([^;]*)`
      )
    );

    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
}