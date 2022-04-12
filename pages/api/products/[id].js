import db from '../../../utils/db';
import nc from 'next-connect';
const nextConnect = nc();
import Product from '../../../models/product';

nextConnect.get(async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  await db.disconnect();
  res.send(product);
});

export default nextConnect;
