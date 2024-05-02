import Style from "./AdminContentArea.module.scss";

const AdminContentArea = ({ props }) => {
  const parse = require("html-react-parser");

  return (
    <section className={Style.mx_admin_content_area}>
      <div className="container">{parse(`${props?.data?.description}`)}</div>
    </section>
  );
};
export default AdminContentArea;
