import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Thumbs } from "swiper";
import Style from "./TimelineSlide.module.scss";

const TimelineSlide = ({ props }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [init, setInit] = useState(false);
    const nextRef = useRef(null);
    const prevRef = useRef(null);
    useEffect(() => {
        setInit(true)
    }, [])
    return (
        <section className={Style.history}>

            <div className="text-white position-relative ">
                <div className={Style.history_swiper}>


                    {init ?
                        <>

                            <Swiper
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true,
                                    enabled: true, // Add this line to enable autoplay
                                }}
                                onSwiper={setThumbsSwiper}
                                slidesPerView={1}
                                watchSlidesProgress={true}
                                modules={[Navigation, Thumbs, Autoplay]}
                                className={`mySwiper ${Style.swiper_2}`}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 4,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                    },
                                    992: {
                                        slidesPerView: 4,
                                    },
                                    1200: {
                                        slidesPerView: 5,
                                    },
                                }}
                            >
                                {props?.data?.map((item, i) => {
                                    const isFirstSlide = i === 0;
                                    const slideClassName = isFirstSlide ? `${Style.swiper_2_content} swiper-slide-thumb-active` : Style.swiper_2_content;
                                    return (
                                        <SwiperSlide key={i} className={slideClassName}>
                                            <div className={Style.swiper_2_content}>
                                                <div className={Style.pagination_outer}>
                                                    <div className={Style.pagination}>
                                                        <h3 className={Style.swiper_2_ttl}>{i + 1}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>

                            <Swiper
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                    enabled: true, // Add this line to enable autoplay
                                }}
                                slidesPerView={1}
                                spaceBetween={36}
                                // loop={true}
                                style={{
                                    "--swiper-navigation-color": "#fff",
                                    "--swiper-pagination-color": "#fff",
                                }}

                                thumbs={{
                                    swiper:
                                        thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                                }}
                                initialSlide={0}
                                modules={[Autoplay, Navigation, Thumbs]}
                                onBeforeInit={(swiper) => {
                                    (swiper.params.navigation.nextEl = nextRef.current),
                                        (swiper.params.navigation.prevEl = prevRef.current);
                                }}
                                className={`mySwiper2 ${Style.content_swiper}`}
                            >
                                {props?.data?.map((item, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <div className={Style.inner_content}>
                                                <div className="row">
                                                    <div className={`${Style.col_left}`}>
                                                        <div className={Style.img}>
                                                            <div className="ratio">
                                                                <Image src={`${item?.img}`} fill alt={item?.title} />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className={`${Style.col_right}`}>
                                                        <div className={`${Style.right_content}`}>
                                                            <h5 className="h5">
                                                                Step {i + 1}
                                                            </h5>
                                                            <h4 className="h4">
                                                                {item?.title}
                                                            </h4>
                                                            <p>{item?.description} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </>
                        : ""
                    }
                </div>
            </div>
        </section>
    );
};
export default TimelineSlide;
