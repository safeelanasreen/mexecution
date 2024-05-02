import Style from "./TermCondition.module.scss";

const TermCondition = ({ props }) => {
  const parse = require("html-react-parser");

 return (
<section className={Style.mx_term}>
    <div className="container">{parse(`${props?.data?.description}`)}</div>
  </section>);
 };
export default TermCondition;