import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../utils/styles';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>DuelShop</title>
      </Head>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <Typography>Duel Shop</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. DuelShop</Typography>
      </footer>
    </div>
  );
};

export default Layout;
