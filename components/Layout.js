import Head from 'next/head';
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import React, { useContext } from 'react';
import { Store } from '../utils/Store.js';
import Cookies from 'js-cookie';

const Layout = ({ title, description, children }) => {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem',
      },
      h2: {
        fontSize: '1.2rem',
        fontWeight: 400,
        margin: '1rem',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#005295',
      },
      secondary: {
        main: darkMode ? '#ffffff' : '#000000',
      },
    },
  });
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - DuelShop` : 'DuelShop'}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navBar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>DuelShop</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart">
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login">
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>
            {'All Rights Reserved. '}
            <a href="https://github.com/amneet954/duelshop">
              DuelShop GitHub Repo
            </a>
          </Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
