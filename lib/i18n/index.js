import i18n from 'react-native-i18n';

import zh from './lang/zh';
import en from './lang/en';

i18n.defaultLocale = 'en';
i18n.fallbacks = true;
i18n.translations = {
  en,
  zh,
};

export default i18n;
