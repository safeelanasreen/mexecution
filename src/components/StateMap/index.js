
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Icon from '../Layout/Icons';
import Style from "./StateMap.module.scss";
import Image from "next/image";
import StateMapTable from "../utils/StateMapTable";
import { useWindowSize } from '../../logic/useDimension';

const StateMap = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");

  const [activeClass, setActiveClass] = useState(0);
  const [activeData, setActiveData] = useState(props?.data?.image_category?.[0]);
  const [isReadMore, setIsReadMore] = useState(false);


  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
    document.getElementById("state_map").scrollIntoView({ behavior: "smooth", top: 100 });
  };

  const handleClick = (i, data) => {
    setActiveData(data);
    setActiveClass(i);
  };
  // modal

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <section className={`${Style.mx_state_map} `}
      >
        <div className="container">
          <h4 className={`${Style.map_main_hd} state-ttl-2 ttl-white`}>{props?.data?.title}</h4>
          <div className={`${Style.map_top} row`}>
            <div className={`${Style.col_left} col-lg-6`}>
              <div className={`${Style.loc_btn_wrap}`}>
                {props?.data?.image_category?.map((item, i) => {
                  return (
                    <button
                      className={`${Style.loc_btn} ${activeClass === i ? Style.active : ""} ${Style.loc1
                        }`}
                      key={i}
                      onClick={() => handleClick(i, item)}
                    >
                      {item?.title}
                    </button>
                  );
                })}
              </div>
              <div className={`${Style.img_btn_wrap} d-none d-lg-flex`}>
                {props?.data?.image_category?.map((item, i) => {
                  return (
                    <button
                      className={`${Style.img_btn} ${activeClass === i ? Style.active : ""} ${Style.img1
                        }`}
                      key={i}
                      onClick={() => handleClick(i, item)}
                    >
                      <div className="ratio">
                        <Image src={item?.thumbnail} alt="map" fill></Image>
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className={`${Style.img_zoom}`} >
                <span className={Style.enlarge} onClick={handleShow}>
                <Icon icon="enlarge" size={15} />
                </span>
                <div className="ratio">
                  <Image src={activeData?.image} alt="map" fill></Image>
                </div>
              </div>
            </div>
            <div className={`${Style.col_right} col-lg-6 `}>
              <div className={`${Style.state_disc} list-star`}>
                <h5 className={`${Style.state_disc_ttl} ttl-white`}>{props?.data?.sub_title}</h5>

                {width <= 1199.98 ? (

                  <div className={`${Style.state_disc_detail} ttl-white`}
                  id="state_map">

                    {/* {parse(props?.data?.description)} */}
                    {parse(
                      !isReadMore
                        ? `${props?.data?.description?.slice(0, 280)}${props?.data?.description?.length > 280 ? "..." : ""
                        }`
                        : props?.data?.description
                    )}

                    {props?.data?.description?.length > 280 && (
                      <span onClick={toggleReadMore} className="btn btn-link link">
                        {`${isReadMore ? " Read Less" : "Read More"}`}
                      </span>
                    )}
                  </div>
                ) : (
                  ""
                )}
                {width >= 1200 ? (

                  <div className={`${Style.state_disc_detail} ttl-white`}>
                    {parse(props?.data?.description)}

                  </div>
                ) : (
                  ""
                )}

              </div>
            </div>
          </div>
          <div className={`${Style.map_table}`}>
            <h4 className={`${Style.map_table_hd} state-ttl ttl-white`}>
              {props?.data?.table_title}
            </h4>
            {props?.data?.table_description && (
              <p className={`${Style.map_table_disc} ttl-white`}>
                {" "}
                {parse(props?.data?.table_description)}
              </p>
            )}

            <div className={`${Style.map_table_wrap} row row-cols-lg-3 flex-nowrap flex-lg-wrap`}>
              <StateMapTable
                main_cities={props?.data?.mexico_main_cities}
                table_title={props?.data?.mexican_table_title}
                table_km_title={props?.data?.mexican_table_km_title}
                table_miles_title={props?.data?.mexican_table_miles_title}
              />
              <StateMapTable
                titleTheme="secondary"
                main_cities={props?.data?.usa_main_cities}
                table_title={props?.data?.usa_table_title}
                table_km_title={props?.data?.usa_table_km_title}
                table_miles_title={props?.data?.usa_table_miles_title}
              />
              <StateMapTable
                table_title={props?.data?.canada_table_title}
                table_km_title={props?.data?.canada_table_km_title}
                table_miles_title={props?.data?.canada_table_miles_title}
                main_cities={props?.data?.canada_main_cities}
              />
            </div>
          </div>
        </div>
      </section>


      <Modal
        show={show}
        onHide={handleClose}


        centered

        className={Style.map_modal}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className={Style.modal_img} >
            <figure className='ratio mb-0'>
              <Image src={activeData?.image} alt="map" fill></Image>
            </figure>
          </div>

        </Modal.Body>

      </Modal>
    </>
  );
};
export default StateMap;
