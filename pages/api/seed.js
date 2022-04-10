import data from '../../utils/data';
import db from '../../utils/db';
import nc from 'next-connect';
import Product from '../../models/product';
const nextConnect = nc();

nextConnect.get(async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'Seeded Successfully' });
});

export default nextConnect;
