import { useEffect } from 'react';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  //useEffect to resolve CSS changes not applying
  //Part II of useStyles CSS overtaking regular CSS

  useEffect(() => {
    const jssCSS = document.querySelector('#jss-server-side');
    if (jssCSS) {
      jssCSS.parentElement.removeChild(jssCSS);
    }
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
