/*
 *
 * LanguageProvider actions
 *
 */

import { CHANGE_LOCALE } from '../constants/languageProviderConsts';

export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}
