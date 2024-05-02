import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import Icon from "../Layout/Icons";
import { useWindowSize } from "../../logic/useDimension";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./StateInfrastructure.module.scss"
import ImageModal from "../utils/ImageModal";

const StateInfrastructure = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalImage, setModalImage] = useState();
  return (
    <>
      <section className={Style.infrastructure}>
        {width >= 1200 ? (
          <div>
            <div className={Style.section_static_img_1}>
              <figure className="mb-0">
                <Image
                  src={Assets.green_path}
                  priority
                  width={392}
                  height={161}
                ></Image>
              </figure>
            </div>
            <div className={Style.section_static_img_2}>
              <figure className="mb-0">
                <svg
                  width="182"
                  height="326"
                  viewBox="0 0 182 326"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M507.474 70.4941C507.474 -65.3939 395.891 -175.553 258.247 -175.553C120.602 -175.553 9.01953 -65.3939 9.01953 70.4941C9.01953 206.382 120.602 316.541 258.247 316.541C395.891 316.541 507.474 206.382 507.474 70.4941Z"
                    stroke="white"
                    stroke-width="17"
                  />
                </svg>
              </figure>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="container">
          <div className={Style.ttl_wrap}>
            <h5
              className={`state-ttl-2 text-lg-center ${Style.infrastructure_ttl}`}
            >
              {props?.data?.title}
            </h5>
            {props?.data?.description &&(
            <p className="state-des text-lg-center">
              {parse(props?.data?.description)}
            </p>
            )}
          </div>

          <div className={Style.infrastructure_tab}>
            <Tab.Container id="tab-infrastructure" defaultActiveKey="0">
              <Nav variant="pills">
                {props?.data?.category?.map((item, index) => (
                  <Nav.Item>
                    <Nav.Link eventKey={index}>
                      <div className={Style.nav_tab}>
                        <figure>
                          <Image
                            src={item?.icon?.url}
                            priority
                            alt="icon"
                            width={28}
                            height={32}
                          />
                        </figure>
                        {item?.title}
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>

              {props?.data?.category.map((item, index) => (
                <Tab.Content>
                  <Tab.Pane eventKey={index}>
                    <div className={Style.tab_content}>
                      <div className="row">
                        <div className="col-md-6 col-xl-7">
                          <div className={Style.img_wrap}>
                       
                          <figure
                            className="ratio mb-0"
                       
                          >
                            <Image
                              src={item?.image?.url}
                              alt="infrastructure-img"
                              fill
                            />
                           
                          </figure>
                          <span className={Style.enlarge}      onClick={() => {
                              handleShow();
                              setModalImage(item?.image?.url);
                            }}>
                            <Icon icon="enlarge" size={15} />
                            </span>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-5">
                          <div className={Style.tabttl_wrap}>
                            <h5 className={Style.tabttl}>{item?.title}</h5>
                            <p className={`state-des ${Style.para}`}>
                              {item?.description}
                            </p>
                          </div>
                          <div className={Style.list_wrap}>
                            <ul>{parse(`${item?.sub_description}`)}</ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              ))}
            </Tab.Container>
          </div>
        </div>
      </section>

      {/* <Modal
        show={show}
        onHide={handleClose}
        centered
        className={Style.infrastructure_modal}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className={Style.modal_img}>
            <figure className="mb-0 ratio">
              <Image src={modalImage} fill alt="map"></Image>
            </figure>
          </div>
        </Modal.Body>
      </Modal> */}
    <ImageModal  show={show}
          handleClose={handleClose}
          modalImage={modalImage} />
    </>
  );
};
export default StateInfrastructure;
