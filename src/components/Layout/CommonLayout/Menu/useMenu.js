import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import React, { useState } from "react";
import { useWindowSize } from "../../../../logic/useDimension";
import Assets from "../assets";

export const useMenu = () => {
  const { width } = useWindowSize();
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(null);
  const [isDropdownOpenLang, setDropdownOpenLang] = useState(false);
  const cookies = parseCookies();
  const [showLoader, setShowLoader] = useState(false);

  let langCookie = cookies?.lang;

  const handleMouseEnter = (i) => {
    setDropdownOpen(i);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  const handleClick = (i) => {
    if (isDropdownOpen == i) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(i);
    }
  };

  const handleMouseEnterLang = () => {
    setDropdownOpenLang(true);
  };

  const handleMouseLeaveLnag = () => {
    setDropdownOpenLang(false);
  };

  const router = useRouter();
  const pathname = router.asPath;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleScroll = () => {
    setScroll(window.scrollY > 500);
  };

  const langFlag = [
    {
      name: "English",
      icon: Assets.flag_usa,
      langType: "en",
    },
    {
      name: "German",
      icon: Assets.germanFlag,
      langType: "de",
    },
  ];
  return {
    width,
    scroll,
    show,
    isDropdownOpen,
    pathname,
    router,
    showLoader,
    setShowLoader,
    setDropdownOpen,
    setDropdownOpen,
    setScroll,
    setShow,
    handleClose,
    handleShow,
    handleScroll,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    isDropdownOpenLang,
    setDropdownOpenLang,
    handleMouseEnterLang,
    handleMouseLeaveLnag,
    langFlag,
    langCookie,
  };
};
