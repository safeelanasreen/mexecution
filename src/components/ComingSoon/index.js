import Style from "./ComingSoon.module.scss";
import Link from "next/link";
import Image from "next/image";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useWindowSize } from "../../logic/useDimension";

const ComingSoon = ({ props }) => {
  return (
    <section className={Style.mx_coming_soon}>
      <div className="container">
        <div className={Style.coming_soon_wrap}>
          <div className={Style.coming_soon}>
            <div className={Style.coming_soon_img}>
              <div className="ratio">
                <Image src={"/images/icon/soon_icon.png"} fill />
              </div>
            </div>
            <h1>We are coming soon</h1>
            <p>We're currently working on creating something fantastic We'll be here soon</p>
            {/* <div className={Style.coming_soon_form}>
                            <Form className={Style.email}>
                                <Form.Group className="" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>
                            </Form>
                            <button type="submit" className="button">
                                <span>Notify me</span>
                            </button>
                        </div> */}
          </div>
          <div className={Style.coming_soon_contact}>
            <ul>
              <li>
                <a href={`tel:+52 33 3964 25 60`}>
                  <span>Tel:</span>
                  <span className={Style.ph}>+52 33 3964 25 60</span>
                </a>
              </li>
              <li>
                <a href={`mailto:info@mexecution.com`} className={Style.link_phone}>
                  <span>Email:</span>
                  <span className={Style.ph}>info@mexecution.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ComingSoon;
