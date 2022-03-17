//File must be named [slug] so that Next.js can dynamically connect page when an individual product is clicked on

import { useRouter } from 'next/router';
import data from '../../utils/data';

const ProductScreen = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((card) => card.slug === slug);

  if (!product) return <h1>Product Not Found</h1>;
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export default ProductScreen;
