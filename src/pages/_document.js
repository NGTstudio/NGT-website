import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document';
import theme from '../themes/Default/Default';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#231C29" />
        <meta
          name="EvoVerses"
          content="DeFi 2.0 + Crypto Play-to-Earn Game to grow your crypto assets"
        />
        <meta
          name="description"
          content="🗺 Game and DEX // ⚔️ Fight, rank and earn// 🗿 The Evos are waiting for you 👀// Discord: discord.gg/evoverses"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>
          EvoVerses: DeFi 2.0 + Crypto Play-to-Earn Game to grow your crypto
          assets
        </title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@EvoVerses" />
        <meta
          name="twitter:title"
          content="EvoVerses: DeFi 2.0 + Crypto Play-to-Earn Game to grow your crypto assets"
        />
        <meta
          name="twitter:description"
          content="🗺 Game and DEX // ⚔️ Fight, rank and earn// 🗿 The Evos are waiting for you 👀// Discord: discord.gg/evoverses"
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/logo512.png" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
