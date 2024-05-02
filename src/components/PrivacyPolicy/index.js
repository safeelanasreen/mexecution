import Style from "./PrivacyPolicy.module.scss";

const PrivacyPolicy = ({ props }) => {
 return (
    <section className={Style.mx_privacy_policy}>
    <div className="container">{parse(`${props?.data?.description}`)}</div>
  </section>
  );
 };
export default PrivacyPolicy;