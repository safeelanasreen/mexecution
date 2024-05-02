import Link from "next/link";
import Style from "./ThankyouPage.module.scss";


export const ThankyouPage = () => {
  
  return (
    <section className={Style.thankyou}>
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className={Style.thankyou_inner}>
          <h1 className={Style.thankyou_ttl}>Thank You!</h1>
          <p className={Style.thankyou_description}>
            Thank you for reaching out to us. We appreciate your interest and
            will respond promptly. Have a wonderful day
          </p>
          <Link href={"/"} className="button ">
            <span>Go to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ThankyouPage;
