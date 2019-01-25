import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage}) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  
  render() {
    const { page, styleTags } = this.props;
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="hacknews" />
          <meta name="apple-mobile-web-app-title" content="hacknews" />
          <meta name="theme-color" content="#ff6600" />
          <meta name="msapplication-navbutton-color" content="#ff6600" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="icon" sizes="512x512" href="/static/icons/icon-512x512.png" />
          <link rel="apple-touch-icon" sizes="512x512" href="/static/icons/icon-512x512.png" />
          <link rel="icon" href="/static/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" href="/static/icons/icon-192x192.png" />
          { styleTags }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}