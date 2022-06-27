import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html dir='ltr' lang='en'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
