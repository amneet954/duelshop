import { useEffect } from 'react';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';

const MyApp = ({ Component, pageProps }) => {
  //useEffect to resolve CSS changes not applying
  //Part II of useStyles CSS overtaking regular CSS

  useEffect(() => {
    const jssCSS = document.querySelector('#jss-server-side');
    if (jssCSS) {
      jssCSS.parentElement.removeChild(jssCSS);
    }
  }, []);

  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
};

export default MyApp;
