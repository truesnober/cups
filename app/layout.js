'use client';

import { ConfigProvider } from 'antd';
import { theme } from '@/styles/theme';
import '@/styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Производство и продажа экологичных бумажных стаканов для кофе. Высокое качество, различные объемы и дизайны." />
        <meta name="keywords" content="бумажные стаканы, кофейные стаканы, экологичная упаковка, стаканы для кофе" />
        <title>CupCoffee - Бумажные стаканы для кофе</title>
      </head>
      <body>
        <ConfigProvider theme={theme}>
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
