//File must be named [slug] so that Next.js can dynamically connect page when an individual product is clicked on

import db from '../../utils/db';
import Image from 'next/image';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import Product from '../../models/Product';
import useStyles from '../../utils/styles';

const ProductScreen = (props) => {
  const { product } = props;
  const classes = useStyles();

  if (!product) return <h1>Product Not Found</h1>;
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Typography>
            <Link>Back to Products</Link>
          </Typography>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={440}
            height={642}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Card Type: {product.cardType}</Typography>
            </ListItem>
            {product.pendulumEffect ? (
              <ListItem>
                <Typography>
                  Pendulum Effect: {product.pendulumEffect}
                </Typography>
              </ListItem>
            ) : null}
            <ListItem>
              <Typography> Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.stockCount > 0
                        ? `${product.stockCount} available`
                        : `Out of Stock`}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Add to Cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductScreen;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();

  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
};
