import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BigCustomerItem from "../components/customer/big-customer-item";
import SmallCustomerItem from "../components/customer/small-customer-item";
import BigProductItem from "../components/product/large-product-item";
import SmallProductItem from "../components/product/small-product-item";
import RegularList from "../components/regular-list";
import { bigCustomers } from "../data/big-customers";
import { bigProducts } from "../data/big-products";
import { smallCustomers } from "../data/small-customers";
import { smallProducts } from "../data/small-products";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  console.log("bigCustomers ", bigCustomers);
  return (
    <div className={styles.container}>
      <Head>
        <title>Reuseable component</title>
        <meta name="description" content="React Design Pattern" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <RegularList
          items={bigCustomers}
          resourceName="customer"
          itemComponent={BigCustomerItem}
        />

        <RegularList
          items={smallCustomers}
          resourceName="customer"
          itemComponent={SmallCustomerItem}
        />

        <RegularList
          items={smallProducts}
          resourceName="product"
          itemComponent={SmallProductItem}
        />
        <RegularList
          items={bigProducts}
          resourceName="product"
          itemComponent={BigProductItem}
        />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
