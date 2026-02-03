"use client";

import { ConfigProvider } from "antd";
import { theme } from "@/styles/theme";
import "@/styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="LuckyCup24 — производство и продажа экологичных бумажных стаканов для кофе в Крыму. Высокое качество, различные объемы от 180 до 400мл, индивидуальный дизайн."
        />
        <meta
          name="keywords"
          content="бумажные стаканы, кофейные стаканы, экологичная упаковка, стаканы для кофе, LuckyCup24, Крым, Симферополь, оптом"
        />
        <title>LuckyCup24 — Бумажные стаканы для кофе | Крым</title>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LuckyCup24 — Бумажные стаканы для кофе" />
        <meta property="og:description" content="Производство и продажа экологичных бумажных стаканов для кофе в Крыму. Высокое качество, различные объемы и дизайны." />
        <meta property="og:image" content="/img/logo.png" />
        <meta property="og:locale" content="ru_RU" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LuckyCup24 — Бумажные стаканы для кофе" />
        <meta name="twitter:description" content="Производство и продажа экологичных бумажных стаканов для кофе в Крыму." />
        <meta name="twitter:image" content="/img/logo.png" />

        {/* Favicon and icons */}
        <link rel="icon" href="/img/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/img/logo.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#1DB954" />
        <meta name="msapplication-TileColor" content="#1E2235" />
      </head>
      <body>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
