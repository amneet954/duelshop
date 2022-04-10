import db from '../../../utils/db';
import nc from 'next-connect';
const nextConnect = nc();
import Product from '../../../models/product';

nextConnect.get(async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
});

export default nextConnect;
