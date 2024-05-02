import axios from "axios";
import { getPageContent } from "../lib/pages";
import ComponentFunc from "../src/components";
import Error404 from "../src/components/Error404";
import { parseCookies } from "nookies";
import Head from "next/head";
import ComingSoon from "../src/components/ComingSoon";

const Supplier = (props) => {
  return (
    <>
      <Head>
        <title>{props?.data?.seo?.metaTitle}</title>
        <meta name="description" content={props?.data?.seo?.metaDescription} />
        <meta name="og:title" content={props?.data?.seo?.metaTitle} />
        <meta property="og:image" content={props?.data?.seo?.metaImage?.url} />
      </Head>
      <main>
        <ComingSoon />
      </main>
    </>
  );
};

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { slug: ["detailpage"] } }],
//     fallback: "blocking",
//   };
// }

export async function getServerSideProps(context) {
  try {
    let route = context?.params?.slug.join("/");

    const cookies = parseCookies(context);
    let langCookie = cookies?.lang;

    const pageContent = await getPageContent(`general/${route}?language=${langCookie ?? "en"}`);
    const layout = await getPageContent(`header`);
    const footer = await getPageContent(`footer`);

    const pageData = { ...pageContent, menu: layout, footer };

    return {
      props: {
        data: pageData,
      },
      // revalidate: 300,
    };
  } catch (error) {
    return {
      props: {
        apiError: true,
      },
    };
  }
}

export default Supplier;
