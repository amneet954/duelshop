//File has to  be called exactly "_document.js" for useStyles CSS to take effect
//Change the way our pages render for Next.JS
//Part II of useStyles CSS overtaking regular CSS

import { ServerStyleSheets } from '@material-ui/core/styles';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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
  const sheets = new ServerStyleSheets();
  const originalRenderPg = context.renderPage;
  context.renderPage = () => {
    return originalRenderPg({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  };

  const initialProps = await Document.getInitialProps(context);
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
