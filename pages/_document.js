//File has to  be called exactly "_document.js" for useStyles CSS to take effect
//Change the way our pages render for Next.JS
//Part II of useStyles CSS overtaking regular CSS

import { ServerStyleSheets } from '@material-ui/core/styles';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React, { Children } from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (context) => {
  const serverStyleSheet = new ServerStyleSheets();
  const originalRenderPage = context.renderPage;
  context.renderPage = () => {
    return originalRenderPage({
      enhanceApp: (App) => (props) =>
        serverStyleSheet.collect(<App {...props} />),
    });
  };

  const initialProps = await Document.getInitialProps(context);
  return {
    ...initialProps,
    styles: [
      ...Children.toArray(initialProps.styles),
      serverStyleSheet.getStyleElement(),
    ],
  };
};
