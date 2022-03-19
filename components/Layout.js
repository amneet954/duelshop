import Head from 'next/head';
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
const Layout = ({ description, title, children }) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title ? `${title} - DuelShop` : 'DuelShop'}</title>
      </Head>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>DuelShop</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
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
    </div>
  );
};

export default Layout;
