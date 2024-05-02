import { getPageContent } from "../lib/pages";
import ComponentFunc from "../src/components";
import { parseCookies } from "nookies";
import Head from "next/head";
import { useRouter } from "next/router";

const HomePage = (props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        {router?.asPath === "/" && (
          <script type="application/ld+json" key="jsonld-mexecution">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mexecution",
              url: "https://mexecution.com/",
              logo: "https://mexecution.com/images/logo.svg",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+52 33 3964 25 60",
                  contactType: "customer service",
                  areaServed: "MX",
                  availableLanguage: "en",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+41 79 445 32 06",
                  contactType: "technical support",
                  areaServed: "MX",
                  availableLanguage: "en",
                },
              ],
            })}
          </script>
        )}

        <title>{props?.data?.seo?.metaTitle}</title>
        <meta name="theme-color" content="#fefefe"></meta>
        <meta name="description" content={props?.data?.seo?.metaDescription} />
        <meta name="og:title" content={props?.data?.seo?.metaTitle} />
        <meta property="og:image" content={props?.data?.seo?.metaImage?.url} />
      </Head>

      <main>{props && <>{props?.data?.widgets?.map((block) => ComponentFunc(block))}</>}</main>
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const cookies = parseCookies(context);

    let langCookie = cookies?.lang;

    const pageContent = await getPageContent(`general/home?language=${langCookie ?? "en"}`);
    const layout = await getPageContent(`header`);
    const footer = await getPageContent(`footer`);

    const pageData = { ...pageContent, menu: layout, footer };

    return {
      props: {
        data: pageData,
      },
    };
  } catch (error) {
    return {
      props: {
        apiError: true,
      },
    };
  }
}

export default HomePage;
