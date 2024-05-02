import { useState } from "react";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Icon from "../Layout/Icons";
import Style from "./CoolkiePolicy.module.scss";

const CoolkiePolicy = ({ show, setShow, handleAccept }) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const parse = require("html-react-parser");

  let description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release ofLetraset sheets containing Lorem Ipsum passages, and more recently with desktoppublishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <div className={Style.mx_cookie}>
      <div className={Style.outer_body}>
        <Container>
          <div className={Style.cookies_infobody}>
            <div className="row justify-content-lg-between">
              <div className={`${Style.col_left} col-lg-7`}>
                <div className={Style.cookies_data}>
                  <p>
                    We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept All”, you consent to the use of ALL the cookies. However, you may visit "Cookie Settings" to provide a controlled consent.
                  </p>
                </div>
              </div>
              <div className={`${Style.col_right} col-lg-5`}>
                <div className={Style.cookies_btn}>
                  <div className="row  row-cols-md-3 justify-content-center justify-content-end-large">
                    <div className={Style.cookie_seting}>
                      <button className="btn btn-outline-primary" onClick={handleShow}>
                        Cookie Settings
                      </button>
                    </div>

                    <div className={Style.accept_all}>
                      <button className="btn btn-primary" onClick={handleAccept}>
                        Accept All
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Modal show={show} className={Style.modal_app} centered onHide={handleClose}>
        <Modal.Body>
          <button
            type="button"
            onClick={handleClose}
            className="btn-close"
            aria-label="Close"
          ></button>
          <div className={Style.app_modal}>
            <div className={Style.app_modal_links}>
              <h2>Cookie Policy</h2>
              <div className={Style.modal_content}>
                <h3>Last Updated: 04.08.2023</h3>
                <p>This Cookie Policy explains how we – Mexecution LLC – use cookies and similar technologies to collect and store information when you visit our website <a href="https://mexecution.com/">www.mexecution.com</a> (the "Website"). By using the Website, you consent to the use of cookies and similar technologies as described in this Cookie Policy.</p>
                <h3>What Are Cookies</h3>
                <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners.</p>
                <h3>Types of Cookies We Use
                </h3>
                <p>Necessary Cookies: These cookies are essential for the operation of the Website. They enable you to navigate around the site and use its features.

                  Analytical/Performance Cookies: These cookies allow us to analyze how visitors use the Website, so we can measure and improve its performance. We use services like Google Analytics for this purpose.

                  Functionality Cookies: These cookies allow the Website to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features.

                  Targeting/Advertising Cookies: These cookies are used to deliver relevant advertisements to you based on your interests. They also limit the number of times you see an ad and help us measure the effectiveness of our advertising campaigns.</p>
                <h3>Your Cookie Choices</h3>
                <p>We may also allow third-party service providers to place cookies on your device for various purposes, including to provide us with analytics about the use of our Website or to provide you with relevant advertisements.</p>
                <h3>Changes to Our Cookie Policy</h3>
                <p>We may update our Cookie Policy from time to time. Any changes we make will be posted on this page, and the "Last Updated" date at the top of this policy will be revised.</p>
                <h3>Contact Us</h3>
                <p>If you have any questions or concerns about our Cookie Policy, please contact us at <a href="mailto:info@mexecution.com">info@mexecution.com</a>.
                </p>
              </div>


              {/* <div className={Style.btn_wrap}>
                {" "}
                <p>
                  {parse(
                    !isReadMore
                      ? `${description?.slice(0, 120)}${description?.length > 120 ? "..." : ""}`
                      : description
                  )}

                  {description?.length > 120 && (
                    <span onClick={toggleReadMore} className="btn btn-link link">
                      {`${isReadMore ? " Show Less" : "Show More"}`}
                      <span className="link-anim">
                        <Icon icon="arrow-right1" size={13} />
                      </span>
                    </span>
                  )}
                </p>
              </div> */}
            </div>
            <button className="button" onClick={handleAccept}>
              Save & Accept
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CoolkiePolicy;
