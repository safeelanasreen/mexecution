import { useEffect, useState } from "react";
import CoolkiePolicy from "../../CoolkiePolicy";
import Footer from "./Footer";
import Menu from "./Menu";
import Style from "../../HomeBanner/HomeBanner.module.scss";

const CommonLayout = ({ children, props }) => {
  const [showCookies, setShowCookies] = useState(false);
  const [isAccept, setIsAccept] = useState(false);

  const handleAccept = () => {
    localStorage.setItem("cookiePolicy", true);
    setIsAccept(!isAccept);
  };

  useEffect(() => {
    if (localStorage.getItem("cookiePolicy") === "true") {
      setIsAccept(false);
    } else {
      setIsAccept(true);
    }
  }, []);
  return (
    <>
      <>
        <Menu props={props?.data?.menu} />
        <>
          <div className={Style.mx_cookie_sec}>
            {isAccept && (
              <CoolkiePolicy
                show={showCookies}
                setShow={setShowCookies}
                handleAccept={handleAccept}
                className={Style.handle}
              />
            )}
          </div>
        </>
        {children}
      </>
      <Footer props={props?.data?.footer} />
    </>
  );
};

export default CommonLayout;
