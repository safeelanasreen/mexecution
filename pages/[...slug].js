import axios from "axios";
import { getPageContent } from "../lib/pages";
import ComponentFunc from "../src/components";
import Error404 from "../src/components/Error404";
import { parseCookies } from "nookies";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

const Slug = (props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        {router?.asPath === "/contact-us" && (
          <script type="application/ld+json" key="jsonld-mexecution">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mexecution",
              image: "",
              "@id": "",
              url: "https://mexecution.com/contact-us",
              telephone: "+52 33 3964 25 60",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Providencia",
                addressLocality: "Jalisco",
                postalCode: "",
                addressCountry: "MX",
              },
            })}
          </script>
        )}
        <title>{props?.data?.seo?.metaTitle}</title>
        <meta name="description" content={props?.data?.seo?.metaDescription} />
        <meta name="og:title" content={props?.data?.seo?.metaTitle} />
        <meta property="og:image" content={props?.data?.seo?.metaImage?.url} />
      </Head>
      <main>
        {props?.data?.data?.status ? <Error404 /> : ""}

        {props && <>{props?.data?.widgets?.map((block) => ComponentFunc(block))}</>}
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

export default Slug;
