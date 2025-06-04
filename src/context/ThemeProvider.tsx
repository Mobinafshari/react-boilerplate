import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ReactNode, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@config/i18n';
import RauiThemeProvider, { CustomThemeProps } from '@mojtaba118/raui/Theme';

const cacheRtl = createCache({
  key: i18n.dir(i18n.resolvedLanguage) === 'rtl' ? 'muirtl' : 'muiltr',
  stylisPlugins:
    i18n.dir(i18n.resolvedLanguage) === 'rtl' ? [prefixer, rtlPlugin] : [],
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-dir',
      i18n.dir(i18n.resolvedLanguage)
    );
  }, [i18n.resolvedLanguage]);

  const dynamicTheme: Partial<CustomThemeProps> = useMemo(
    () => ({
      direction: i18n.dir(i18n.resolvedLanguage),
      typography: {
        fontFamily:
          i18n.dir(i18n.resolvedLanguage) === 'rtl'
            ? ['Vazirmatn', 'Inter', 'sans-serif'].join(', ')
            : ['Inter', 'Vazirmatn', 'sans-serif'].join(', '),
      },
    }),
    []
  ) as Partial<CustomThemeProps>;

  return (
    <CacheProvider value={cacheRtl}>
      <RauiThemeProvider theme={dynamicTheme}>
        <CssBaseline />
        {children}
      </RauiThemeProvider>
    </CacheProvider>
  );
}
