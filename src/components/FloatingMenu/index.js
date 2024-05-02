import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowSize } from "../../logic/useDimension";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./FloatingMenu.module.scss";

const FloatingMenu = ({ props }) => {
  const { width } = useWindowSize();
  const [toolBtnPos, setToolBtnPos] = useState(4);
  const [btnIndex, setbtnIndex] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
 
  const handleTool = (e, i) => {
    setToolBtnPos(e.target.offsetTop);
    setbtnIndex(i);
  };

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.scrollY ||
        window.pageYOffset ||
        document.body.scrollTop +
          ((document.documentElement && document.documentElement.scrollTop) ||
            0);
      const scrollBottom = documentHeight - scrollTop - windowHeight;

      if (scrollBottom <= 0) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = props?.data?.floating_button?.whatsapp;
  const cleanedPhoneNumber = parseInt(phoneNumber?.replaceAll(/[-\s]+/g, ""));

  return (
    <>
      {width >= 992 ? (
        <div className={`${Style.floatingmenu}  `}>
          {/* <button
            className={` ${Style.expand_btn} ${
              isClicked ? Style.btn_expanded : ""
            } ${isvisible ? Style.floatvisible : ""} `}
            onClick={handleClick}
          >
            <div className={Style.expand_wrap}>
              <i className={Style.expand_wrap_top}></i>
              <i className={Style.expand_wrap_bottom}></i>
            </div>
          </button> */}
          <div
            className={` ${Style.floatingmenu_btngroup} `}
          >
            <span
              className={`${Style.shape} color_${btnIndex + 1}`}
              style={{ "--top-value": toolBtnPos || 4 }}
            ></span>
             <div className={Style.btn_wrap}>
              <a
                href={`${props?.data?.floating_button?.contact_us}`}
                className={Style.btn_link}
                onMouseEnter={(e) => {
                  handleTool(e, 3);
                }}
                onFocus={(e) => {
                  handleTool(e, 3);
                }}
              >
                <button className={Style.floating_btn}>
                  <span className={Style.btn_text}>Book consultation </span>
                  <figure className={`mb-0 ${Style.btn_icon}`}>
                    <Image
                      src={Assets.iconhand}
                      alt="icon"
                      width="26"
                      height="26"
                    />
                  </figure>
                </button>
              </a>
            </div>
            <div className={Style.btn_wrap}>
              <a
                href={`tel:${props?.data?.floating_button?.request_call}`}
                className={Style.btn_link}
                onMouseEnter={(e) => {
                  handleTool(e, 1);
                }}
                onFocus={(e) => {
                  handleTool(e, 1);
                }}
              >
                <button className={Style.floating_btn}>
                  <span className={Style.btn_text}>Request a Call</span>
                  <figure className={`mb-0 ${Style.btn_icon}`}>
                    <Image
                      src={Assets.icon_call}
                      alt="icon"
                      width="26"
                      height="26"
                    />
                  </figure>
                </button>
              </a>
            </div>

            <div className={Style.btn_wrap}>
              <a
                href={`https://api.whatsapp.com/send?phone=${cleanedPhoneNumber}`}
                target="_blank"
                className={Style.btn_link}
                onMouseEnter={(e) => {
                  handleTool(e, 0);
                }}
                onFocus={(e) => {
                  handleTool(e, 0);
                }}
              >
                <button className={Style.floating_btn}>
                  <span className={Style.btn_text}> Whatsapp</span>
                  <figure className={`mb-0 ${Style.btn_icon}`}>
                    <Image
                      src={Assets.icon_whatsapp}
                      alt="icon"
                      width="26"
                      height="26"
                    />
                  </figure>
                </button>
              </a>
            </div>

      

            <div className={Style.btn_wrap}>
              <a
                href={`${props?.data?.floating_button?.linkedin}`}
                target="_blank"
                className={Style.btn_link}
                onMouseEnter={(e) => {
                  handleTool(e, 2);
                }}
                onFocus={(e) => {
                  handleTool(e, 2);
                }}
              >
                <button className={Style.floating_btn}>
                  <span className={Style.btn_text}> LinkedIn</span>
                  <figure className={`mb-0 ${Style.btn_icon}`}>
                    <Image
                      src={Assets.iconlinkedin}
                      alt="icon"
                      width="26"
                      height="26"
                    />
                  </figure>
                </button>
              </a>
            </div>

           
          </div>
        </div>
      ) : (
        <div
          className={`${
            isAtBottom
              ? `${Style.floatingmenu_mob} ${Style.bottomreached}`
              : Style.floatingmenu_mob
          } floating-mob `}
        >
          <div
            className={`${Style.floatingmenu_mob_inner} d-flex flex-nowrap `}
          >
             <a
              href={`${props?.data?.floating_button?.contact_us}`}
              target="_blank"
              className={`${Style.btn_link} d-flex`}
            >
              <figure className={`mb-0 ${Style.btn_icon}`}>
                <Image
                  src={Assets.iconhand}
                  alt="icon"
                  width="13"
                  height="13"
                />
              </figure>
              <span className={Style.btn_text}> Book consultation</span>
            </a>

            <a
              href={`tel:${props?.data?.floating_button?.request_call}`}
              className={`${Style.btn_link} d-flex`}
            >
              <figure className={`mb-0 ${Style.btn_icon}`}>
                <Image
                  src={Assets.icon_call}
                  alt="icon"
                  width="13"
                  height="13"
                />
              </figure>
              <span className={Style.btn_text}> Request a call</span>
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${cleanedPhoneNumber}`}
              target="_blank"
              className={`${Style.btn_link} d-flex`}
            >
              <figure className={`mb-0 ${Style.btn_icon}`}>
                <Image
                  src={Assets.icon_whatsapp}
                  alt="icon"
                  width="13"
                  height="13"
                />
              </figure>
              <span className={`${Style.btn_text} ${Style.mob_hide}`}>Whatsapp</span>
            </a>
           
            <a
              href={`${props?.data?.floating_button?.linkedin}`}
              target="_blank"
              className={`${Style.btn_link} d-flex`}
            >
              <figure className={`mb-0 ${Style.btn_icon}`}>
                <Image
                  src={Assets.iconlinkedin}
                  alt="icon"
                  width="13"
                  height="13"
                />
              </figure>
              <span className={`${Style.btn_text} ${Style.mob_hide}`}> LinkedIn</span>
            </a>
           
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingMenu;