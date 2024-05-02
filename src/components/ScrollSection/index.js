import Style from "./ScrollSection.module.scss";
import { useEffect, useRef, useState } from "react";
import ScrollSpy from "react-ui-scrollspy";
import ComponentFunc from "../components";
import { useRouter } from "next/router";
import { useWindowSize } from "../../logic/useDimension";
import { Dropdown } from "react-bootstrap";

const ScrollSection = ({ props }) => {
  const { width } = useWindowSize();

  const swiperRef = useRef();
  const [scrollId, setScrollId] = useState(props?.data?.[0]?.title);
  const [showDropdown, setShowDropdown] = useState(false);
  const setDropdown = () => {
    setShowDropdown(!showDropdown);
    // document.body.classList.toggle("dropdown-open"); // Toggle the class on body
    // setTimeout(() => {
    //   document.body.classList.toggle("dropdown-open"); // Toggle the class on body
    // }, 50);
  };

  const router = useRouter();

  const handleScroll = (id) => {
    let findId = props?.widgets?.findIndex(
      (item) => item?.sectionId?.replace(/[$@%& ]/g, "") === id
    );
    const title = props?.data?.filter((n) => n?.url?.replace(/[$@%& ]/g, "") === id)?.[0]?.url;
    setScrollId(title);

    swiperRef.current?.swiper?.slideTo(findId);
  };

  const handleLinkClick = (e, id, Menu) => {
    e.preventDefault();
    if (typeof window !== undefined) {
      const target = window.document.getElementById(id);
      if (target) {
        if (Menu) {
          window.scrollTo(0, target.offsetTop - 120);
        } else {
          window.scrollTo(0, target.offsetTop - 120);
        }
      }
    }
  };

  return (
    <>
      <div
        className={`${Style.scroll_sec} ${Style.theme_sec} ${router.asPath == "/project-management" ? Style.align_height : ""
          } ${router.asPath == "/feasibility" ? Style.on_center : ""} ${router.asPath == "/about-us" ? Style.align_height : ""
          }
          ${router.asPath=="/queretaro" ? Style.statepage:""}
            ${router.asPath=="/aguascalientes" ? Style.statepage:""}
            ${router.asPath=="/chihuahua" ? Style.statepage:""}
            ${router.asPath=="/coahuila" ? Style.statepage:""}
            ${router.asPath=="/durango" ? Style.statepage:""}
            ${router.asPath=="/Hidalgo" ? Style.statepage:""}
            ${router.asPath=="/jalisco" ? Style.statepage:""}
            ${router.asPath=="/nuevo-leon" ? Style.statepage:""}
            ${router.asPath=="/oaxaca" ? Style.statepage:""}
            ${router.asPath=="/san-luis-potosi" ? Style.statepage:""}
            ${router.asPath=="/sonora" ? Style.statepage:""}
            ${router.asPath=="/veracruz" ? Style.statepage:""}`}
      >
        {width <= 1200 && (
          <div className={Style.dropdown}>
            <div className={`${Style.dropdown} d-block d-xl-none`}>
              <Dropdown show={showDropdown} onToggle={setDropdown}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {scrollId}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {props?.data?.map((item, i) => {
                    return (
                      <a
                        data-to-scrollspy-id={item?.url?.replace(/[$@%& ]/g, "")}
                        className={`dropdown-item ${scrollId === item?.title ? "active item" : ""}`}
                        onClick={(e) => {
                          setDropdown(false);
                          handleLinkClick(e, item?.url?.replace(/[$@%& ]/g, ""), true);
                        }}
                        key={i}
                      >
                        
                        {item?.url}
                      </a>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        )}
        <nav className={Style.nav} ref={swiperRef} style={{ display: width <= 1200 && "none" }}>
          <div className="container px-0 px-md-3">
            <ul>
              {props?.data?.map?.((item, i) => {
                return (
                  <>
                    <li key={i}>
                      <h2 className={Style.scroll_link}>
                        <a
                          data-to-scrollspy-id={item?.url?.replace(/[$@%& ]/g, "")}
                          onClick={(e) => {
                            handleLinkClick(e, item?.url?.replace(/[$@%& ]/g, ""));
                          }}
                        >
                          <div className={Style.scroll_item}>{item?.title}</div>
                        </a>
                      </h2>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </nav>

        <ScrollSpy onUpdateCallback={(id) => handleScroll(id)} updateHistoryStack={false}>
          {props?.widgets?.map?.((block, i) => (
            <div key={i} id={block?.sectionId?.replace(/[$@%& ]/g, "")}>
              {ComponentFunc(block)}
            </div>
          ))}
        </ScrollSpy>
      </div>
    </>
  );
};

export default ScrollSection;
