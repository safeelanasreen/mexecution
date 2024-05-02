import { useState, useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Assets from "../assets";
import Style from "./Menu.module.scss";
import {} from "../../../../logic/useDimension";
import { setCookie } from "nookies";
import { useMenu } from "./useMenu";
import PageLoader from "../../../PageLoader";

const Menu = ({ props }) => {
  const {
    router,
    width,
    scroll,
    show,
    isDropdownOpen,
    isDropdownOpenLang,
    pathname,
    langFlag,
    handleClose,
    handleShow,
    handleScroll,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseEnterLang,
    handleMouseLeaveLnag,
    handleClick,
    langCookie,
    setDropdownOpen,
    setDropdownOpenLang,
    showLoader,
    setShowLoader,
  } = useMenu();

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    handleRouteChange();
    const handleRouteEnd = (url, { shallow }) => {
      setShowLoader(true);
    };
    router.events.on("routeChangeStart", handleRouteEnd);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteEnd);
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  const handleRouteChange = () => {
    setShowLoader(false);
  };

  return (
    <header
      className={`${Style.header} ${scroll ? Style.header_scrolled : ""}`}
    >
      <Navbar bg={`${width >= 992 ? "light" : "dark"}`} expand={"xl"}>
        <Container>
          <Link href="/" className="navbar-brand">
            
            <div className={Style.nav_brand}>
              <div className={Style.img_wrap}>
                <Image
                  src={props?.data?.logo}
                  priority={true}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Mexpansion logo"
                  quality={100}
                />
              </div>
            </div>
          </Link>
          <Navbar.Toggle
            onClick={handleShow}
            aria-controls={`offcanvasNavbar-expand-xl`}
          >
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
            placement="end"
            show={show}
            onHide={handleClose}
            className={Style.offcanvas}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                <Link href="/"
                 onClick={handleClose}
                 >
                  <div className={Style.img_wrap}>
                    <Image
                      src={props?.data?.logo}
                      priority={true}
                      width={107}
                      height={70}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="Mexpansion logo"
                    />
                  </div>
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={Style.offcanvas_body}>
              <Nav className="justify-content-end align-items-xl-center align-items-start flex-grow-1 ">
              
                {props?.data?.nav?.map((item, i) => {

                  return (
                    <>
                      {item?.submenu?.length > 0 || item?.cities?.length > 0 ? (
                        <NavDropdown
                          title={item?.title}
                          align="top"
                          id=""
                          active={item?.submenu?.some(
                            (a) => `/${a?.link}` === pathname
                          )}
                          onMouseEnter={()=>handleMouseEnter(i)}
                          onMouseLeave={()=>handleMouseLeave()}
                          show={isDropdownOpen == i}
                          className={`${
                            item?.submenu?.some(
                              (a) => `/${a?.link}` === pathname
                            )
                              ? "active-item"
                              : ""
                          } 
                          `}
                          onClick={()=>handleClick(i)}
                        >
                          {item?.submenu?.map((item, i) => {
                            return (
                              <Link
                                href={item?.link}
                                className={`${Style.nav_item} dropdown-item ${
                                  `/${item?.link}` === pathname
                                    ? "active-item"
                                    : ""
                                }`}
                                key={i}
                                onClick={() => {
                                  handleMouseLeaveLnag();
                                  setDropdownOpen(null);

                                  if (width <= 992) {
                                    handleClose();
                                    setDropdownOpen(null);
                                  }
                                }}
                              >
                                {item?.title}
                              </Link>
                            );
                          })}

                          {item?.cities?.map((item, i) => {
                            return (
                              <Link
                                href={item?.url || ""}
                                className={`${Style.nav_item} dropdown-item ${
                                  `/${item?.url}` === pathname
                                    ? "active-item"
                                    : ""
                                }`}
                                key={i}
                                onClick={() => {
                                  handleMouseLeaveLnag();
                                  setDropdownOpen(null);

                                  if (width <= 992) {
                                    handleClose();
                                    setDropdownOpen(null);
                                  }
                                }}
                              >
                                {item?.name}
                              </Link>
                            );
                          })}
                        </NavDropdown>
                      ) : (
                        <Link
                          onClick={handleClose}
                          href={`${item?.link}`}
                          className={`nav-link  ${
                            pathname.slice(0, 5) ===
                            `/${item?.link.slice(0, 4)}`
                              ? "active-item"
                              : ""
                          }`}
                          data-link={item?.title}
                          key={i}
                        >
                          {item?.title}
                        </Link>
                      )}
                    </>
                  );
                })}

                <span className={`${Style.tab_wrap} `}>
                  {/* ---------------------LANG SWITCHER------------------------ */}

                 {/* <NavDropdown
                    align="top"
                    title={
                      <div className={Style.flag_item}>
                        <div className={Style.flag_item_img}>
                          {langCookie === "en" && (
                            <Image
                              src={Assets.flag_usa}
                              priority
                              fill
                              alt="flag"
                            />
                          )}
                          {langCookie === "de" && (
                            <Image
                              src={Assets.germanFlag}
                              priority
                              fill
                              alt="flag"
                            />
                          )}
                        </div>
                        <div className={Style.flag_item_info}>
                          {langCookie === "en" ? "English" : "German"}
                        </div>
                      </div>
                    }
                    id={`country-selector-xl`}
                    onMouseEnter={handleMouseEnterLang}
                    onMouseLeave={handleMouseLeaveLnag}
                    show={isDropdownOpenLang}
                    onClick={() => setDropdownOpenLang(!isDropdownOpenLang)}
                  >
                    {langFlag?.map((item, i) => {
                      return (
                        <button
                          className={`dropdown-item ${
                            item?.langType === langCookie ? "active-item" : ""
                          } `}
                          onClick={() => {
                            setCookie(null, "lang", item?.langType);
                            router.reload();
                            width < 992 && handleClose();
                          }}
                          key={i}
                        >
                          <div className={Style.flag_item}>
                            <div className={Style.flag_item_img}>
                              <Image src={item?.icon} fill alt={item?.name} />
                            </div>

                            <div className={Style.flag_item_info}>
                              {item?.name}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </NavDropdown>
                  */}



                  {/* ---------------------LANG SWITCHER------------------------ */}

                  <Link
                    href={`${props?.data?.supplierButton?.url}`}
                    className="button"
                    onClick={handleClose}
                  >
                    <span>{props?.data?.supplierButton?.title}</span>
                  </Link>
                </span>
            
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {showLoader && <PageLoader />}
    </header>
  );
};

export default Menu;
