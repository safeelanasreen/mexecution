import { useRef, useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import Style from "./BlogFilter.module.scss";

const BlogFilter = ({
  props,
  button,
  setCategory,
  active,
  searchTerm,
  setSearchTerm,
  getData,
  offset,
  category,
  setOffSet,
  setContentData,
}) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    setInit(true);
  }, []);
  const [listingView, setListingView] = useState(false);
  const handleClick = () => {
    setListingView(!listingView);
  };

  const categoryList = [{ id: 0, title: "All" }, ...props?.category];

  return (
    <section className={Style.mx_blog_filter}>
      <div className={`${Style.filter_wrapper} ${button === "search" ? Style.button_2 : ""}`}>
        <div className={`${Style.filter_search} `}>
          <Form>
            <Form.Control
              type="text"
              value={searchTerm}
              placeholder="Search"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </Form>
        </div>

        <div className={`${Style.nav_wrap}`}>
          <Nav variant="pills" className="row ">
            {categoryList?.map((item, key) => {
              return (
                <Nav.Item key={key}>
                  <Nav.Link
                    className={`${active == item?.id ? "active" : ""}`}
                    onClick={() => {
                      setCategory(item?.id);
                      setContentData([]);
                      setOffSet(0);
                      getData(item?.id, 0, searchTerm);
                    }}
                  >
                    {item?.title}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </div>
      </div>
      {/* <div className={`position-relative ${Style.slider_wrap}`}>
                {init &&
                    <Swiper
                        pagination={true}
                        slidesPerView={"auto"}
                        freeMode={true}
                        spaceBetween={13}
                        modules={[FreeMode, Navigation]}
                        navigation={true}
                        className={`${Style.project_card_swiper}  slider`}
                    >
                        <SwiperSlide className="w-auto"> <Nav variant="pills"><Nav.Item ><Nav.Link eventKey="first" className='active'>All</Nav.Link></Nav.Item></Nav></SwiperSlide>
                        <SwiperSlide className="w-auto"> <Nav variant="pills"><Nav.Item><Nav.Link eventKey="second">Articles</Nav.Link></Nav.Item></Nav></SwiperSlide>
                        <SwiperSlide className="w-auto"> <Nav variant="pills"><Nav.Item><Nav.Link eventKey="third">Events</Nav.Link></Nav.Item>  </Nav></SwiperSlide>
                        <SwiperSlide className="w-auto"> <Nav variant="pills"><Nav.Item><Nav.Link eventKey="fourth">News</Nav.Link></Nav.Item></Nav></SwiperSlide>
                        <SwiperSlide className="w-auto"> <Nav variant="pills"><Nav.Item><Nav.Link eventKey="fifth">Events</Nav.Link></Nav.Item></Nav></SwiperSlide>
                        <SwiperSlide className="w-auto"> <Nav variant="pills"><Nav.Item><Nav.Link eventKey="sixth">News</Nav.Link></Nav.Item></Nav></SwiperSlide>

                    </Swiper>
                }
            </div> */}
    </section>
  );
};
export default BlogFilter;
