import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import Image from "next/image";
import Icon from "../Layout/Icons";
import Style from "./GeneralinfoSwiper.module.scss";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Assets from "../Layout/CommonLayout/assets";
import ImageModal from "../utils/ImageModal";

const GeneralinfoSwiper = ({ props, i }) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(false);

  const nextRef = useRef(null);
  const prevRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setShow(true);
    setImage(image)
  }

  return (
    <>
      <div className={Style.swiper_section} key={i}>
        <Swiper
          slidesPerView={1}
          className={Style.service_swiper}
          navigation={{
            nextEl: nextRef?.current,
            prevEl: prevRef?.current,
          }}
          modules={[Navigation]}
        >
          {props?.map((item, index) => (
            <SwiperSlide className={Style.slide} key={index}>
              <div className={`row ${Style.swiper_wrap}`}>
                <div className="col-md-6">
                  <div className={Style.content_wrap}>
                    <h3 className={Style.ttl}>{item?.title}</h3>
                    <p className="mb-0 state-des">{item?.description}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={Style.img_wrap}>
                    <figure className="mb-0 ratio">
                      <Image
                        
                        src={item?.image}
                        fill
                        alt="graph"
                      />
                    </figure>
                    <span  className={Style.enlarge} onClick={()=>handleShow(item?.image)}>
                      <Icon icon="enlarge" size={15} />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={Style.nxt_btn}>
          <button ref={nextRef} className={Style.nxt}></button>
        </div>
        <div className={Style.prev_btn}>
          <button ref={prevRef} className={Style.prev}></button>
        </div>
      </div>
      <ImageModal
        props={image}
        show={show}
        handleClose={handleClose}
        modalImage={image}
      />
    </>
  );
};
export default GeneralinfoSwiper;
