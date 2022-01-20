import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Products</h1>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
