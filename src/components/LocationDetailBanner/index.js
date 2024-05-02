import { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import Link from "next/link";
import Assets from "../Layout/CommonLayout/assets";
import Icon from "../Layout/Icons";
import Style from "./LocationDetailBanner.module.scss";
import { useWindowSize } from "../../logic/useDimension";
import CommonSlider from "../utils/CommonSlider";
import { useRouter } from "next/router";
import VideoWrapper from "../utils/VideoWrapper";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import FloatingMenu from "../FloatingMenu";
import AssetModal from "../utils/AssetModal";


const LocationDetailBanner = ({ props }) => {
  const parse = require("html-react-parser");

  SwiperCore.use([Navigation]);
  const { width } = useWindowSize();
  const swiperRef = useRef(null);
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [show, setShow] = useState(false);

  const router = useRouter();
  useEffect(() => {
    router.beforePopState((e) => {
      window.location.reload();
    });
  }, []);

  const handleShow = (i) => {
    setShow(true);
    setSlideIndex(i);
  };

  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [showPlay, setShowPlay] = useState(false);
  const [primaryButtonClicked, setPrimaryButtonClicked] = useState(false); // New state variable
  useEffect(() => {
    const videoElement = videoRef?.current;

    const handleVideoClick = () => {
      if (play) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setPlay(!play);
      setShowPlay(true);

      if (!primaryButtonClicked) {
        // Check if primary button is not clicked
        setPrimaryButtonClicked(true); // Set primaryButtonClicked to true
      }

      setTimeout(() => {
        setShowPlay(false);
      }, 400);
    };

    videoElement?.addEventListener("click", handleVideoClick);
    return () => {
      videoElement?.removeEventListener("click", handleVideoClick);
    };
  }, [play, primaryButtonClicked]);

  return (
    <>
      <section className={Style.mx_detail_banner}>
        <div className="container">
          <div className="breadcrumb ">
            <Link href={"/"} className="breadcrumb-item">
              Home
            </Link>
            <Link href={"/locations"} className="breadcrumb-item">
              Locations
            </Link>
            <span className="breadcrumb-item active">{props?.data?.title}</span>
          </div>
          {width >= 992 ? (
            <div className="d-none d-lg-block position-relative">
              {props?.data?.asset_type === "Gold" ? (
                <p className={Style.membership}>
                  <span className={Style.gold_plan}>
                    <Image src={"/images/icon/gold.svg"} fill />
                  </span>
                  Gold Asset
                </p>
              ) : props?.data?.asset_type === "Silver" ? (
                <p className={Style.membership}>
                  <span className={Style.gold_plan}>
                    <Image src={"/images/icon/silver.svg"} fill />
                  </span>
                  Silver Asset
                </p>
              ) : (
                ""
              )}

              <h1 className="h4">{props?.data?.title}</h1>
              <div className={Style.tag}>
                <div className={Style.tag_item}>
                  <span>
                    <Icon icon="warehouse_fill" className={Style.icon} />
                  </span>
                  {props?.data?.category}
                </div>
                <div className={Style.tag_item}>
                  <span>
                    <Icon icon="warehouse_alt" className={Style.icon} />
                  </span>
                  {props?.data?.area}
                  m2
                </div>
                <div className={Style.tag_item}>
                  <span>
                    <Icon icon="warehouse_alt" className={Style.icon} />
                  </span>
                  Distance to Border: {props?.data?.distance?.airport}km
                </div>

                <div className={Style.tag_item}>
                  <span>
                    <Icon icon="warehouse_alt" className={Style.icon} />
                  </span>
                  Distance to Highway: {props?.data?.distance?.us_border}km
                </div>
              </div>
              <span className={Style.mexid}>{props?.data?.mex_id}</span>

              {props?.data?.asset_type === "Gold" ? (
                <div className={Style.seal}>
                  <div className="ratio">
                    <Image src={"/images/icon/gold_asset.png"} fill alt="seal" />
                  </div>
                  <div className={Style.tooltip_wrap}>
                    <Tooltip>{parse(props?.data?.gold_description)}</Tooltip>
                  </div>
                </div>
              ) : props?.data?.asset_type === "Silver" ? (
                <div className={Style.seal}>
                  <div className="ratio">
                    <Image src={"/images/icon/silver_asset.png"} fill alt="seal" />
                  </div>
                  <div className={Style.tooltip_wrap}>
                    <Tooltip>{parse(props?.data?.silver_description)}</Tooltip>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="container d-none d-lg-block">
          <div className={Style.grid}>
            {props?.data?.images?.slice(0, 5)?.map((item, i) => {
              return (
                <div className={Style.grid_item} key={i} onClick={() => handleShow(i)}>
                  {5 === i + 1 ? (
                    <button className={Style.btn_gallery}>
                      <Image
                        src={Assets.icon_gallery}
                        alt="gallery icon"
                        className="me-2"
                        width={20}
                        height={20}
                      />{" "}
                      {5 === i + 1 ? "5+ Photos" : "5 Photos"}
                    </button>
                  ) : (
                    ""
                  )}

                  <div className={Style.grid_cover}>
                    {item?.type?.split("/")[0] === "video" ? (
                      <div className={Style.video_frame}>
                        <video controls={false} muted loop>
                          <source src={item?.url} type="video/mp4" />
                        </video>
                        <div className={`${Style.primry_button}`}>
                          <Icon icon="play_icon" />
                        </div>
                      </div>
                    ) : (
                      <div className={Style.grid_item_img}>
                        <Image src={item?.url} fill alt="banner image" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {width >= 992 ? (
          ""
        ) : (
          <div className={`${Style.slider_mobile} d-lg-none`}>
            <div className="position-relative  mb-lg-4">
              <CommonSlider spaceBetween={0} modules={[Navigation]} className="mySwiper2">
                {props?.data?.images?.map((item, i) => {
                  return (
                    <SwiperSlide key={i}>
                      {item?.type?.split("/")[0] === "video" ? (
                        <div className={Style.mob_video_frame}>
                          <video controls={false} muted loop playsInline ref={videoRef}>
                            <source src={item?.url} type="video/mp4" />
                          </video>
                          <div
                            className={`${Style.primry_button} ${primaryButtonClicked ? Style.hide : ""
                              }`}
                          >
                            <Icon icon="play_icon" />
                          </div>
                          {play ? (
                            <div className={`${Style.play_button} ${showPlay ? Style.show : ""}`}>
                              <Icon icon="play_icon" />
                            </div>
                          ) : (
                            <div
                              className={` ${Style.play_button_pause} ${showPlay ? Style.show : ""
                                }`}
                            >
                              <Icon icon="pause" />
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className={Style.img_main}>
                          <Image src={item?.url} fill />
                        </div>
                      )}
                    </SwiperSlide>
                  );
                })}
              </CommonSlider>
            </div>
          </div>
        )}
      </section>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)} className={Style.lightbox}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="d-flex align-items-center">
          <div className={Style.slider_wrap}>
            <div className={`${Style.swiper_view_wrap} position-relative mb-3 mb-lg-4`}>
              <Swiper
                ref={swiperRef}
                spaceBetween={11}
                initialSlide={slideIndex}
                onInit={(swiper) => swiper.slideTo(slideIndex)}
                // navigation={true}
                thumbs={{
                  swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {props?.data?.images?.map((item, i) => {
                  return (
                    <SwiperSlide key={i}>
                      {item?.type?.split("/")[0] === "video" ? (
                        <div className={Style.modal_video_frame}>
                          <VideoWrapper
                            src={item?.url}
                            play={play}
                            setPlay={setPlay}
                            primaryButtonClicked={primaryButtonClicked}
                            setPrimaryButtonClicked={setPrimaryButtonClicked}
                            setShowPlay={setShowPlay}
                          />
                          <div
                            className={`${Style.primry_button} ${primaryButtonClicked ? Style.hide : ""
                              }`}
                          >
                            <Icon icon="play_icon" />
                          </div>
                          {play ? (
                            <div className={`${Style.play_button} ${showPlay ? Style.show : ""}`}>
                              <Icon icon="play_icon" />
                            </div>
                          ) : (
                            <div
                              className={` ${Style.play_button_pause} ${showPlay ? Style.show : ""
                                }`}
                            >
                              <Icon icon="pause" />
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className={Style.img_main}>
                          <Image src={item?.url} fill />
                        </div>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={"auto"}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className={Style.mySwiper}
            >
              {props?.data?.images?.map((item, i) => {
                return (
                  <SwiperSlide key={i} className="w-auto">
                    {item?.type?.split("/")[0] === "video" ? (
                      <div className={Style.thumb_video_frame}>
                        <video controls={false} muted loop>
                          <source src={item?.url} type="video/mp4" />
                        </video>
                      </div>
                    ) : (
                      <div className={Style.img_thumb}>
                        <Image src={item?.url} fill />
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Modal.Body>
      </Modal>
      <FloatingMenu props={props}/>
      <AssetModal props={props}/>
    </>
  );
};

export default LocationDetailBanner;
