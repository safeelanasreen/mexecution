import { useWindowSize } from "../../logic/useDimension";
import Style from "./HomeServices.module.scss";
import ServicesDesktopView from "./ServicesDesktopView";
import ServicesMobileView from "./ServicesMobileView";
const HomeServices = ({ props }) => {
  const { width } = useWindowSize();
  return (
    <section className={Style.mx_services_sec}>
      {width >= 992 ? (
        <ServicesDesktopView props={props} />
      ) : (
        <ServicesMobileView props={props} />
      )}
    </section>
  );
};

export default HomeServices;
