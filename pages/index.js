import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>SpaceX Test</title>
      </Head>

      <div>
        <h1 className="title">Welcome to SpaceX Launches Test Page </h1>
      </div>

      <div>
        <h1>
          For Launches <Link href="/launches/launch">Click</Link>
        </h1>
      </div>

      <section className={utilStyles.headingMd}>
        <p>[Hi my name is Ömer and I am an Computer Engineer.]</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
