//for google font
import { Poppins } from "@next/font/google";
import { useEffect } from "react";
//for local font
// import localFont from '@next/font/local'
import CommonLayout from "../src/components/Layout/CommonLayout";
import "../src/styles/common.scss";
import { parseCookies, setCookie } from "nookies";
import { Toaster } from "react-hot-toast";

const fontPrimary = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

// const locFont = localFont({
//   src: [
//     {
//       path: './Roboto-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './Roboto-Italic.woff2',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: './Roboto-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: './Roboto-BoldItalic.woff2',
//       weight: '700',
//       style: 'italic',
//     },
//   ],
// })

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const cookies = parseCookies();

    let langCookie = cookies?.lang;

    if (langCookie === undefined) {
      setCookie(null, "lang", "en");
    }
  }, []);
  return (
    <>
      <style jsx global>{`
        html,
        body {
          font-family: ${fontPrimary.style.fontFamily};
          --bs-body-font-family: ${fontPrimary.style.fontFamily};
        }
      `}</style>
      <Toaster
        toastOptions={{
          success: {
            className: " success-toast",
          },
          error: {
            className: "error-toast",
          },
        }}
      />
      <CommonLayout props={pageProps}>
        <Component {...pageProps} />
      </CommonLayout>
    </>
  );
}

export default MyApp;
