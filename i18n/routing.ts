import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['nb'],
  defaultLocale: 'nb',
  localePrefix: 'as-needed',
  localeDetection: false,
});
