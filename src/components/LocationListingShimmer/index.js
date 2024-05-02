import Style from "./LocationListingShimmer.module.scss";
import Image from "next/image";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useWindowSize } from "../../logic/useDimension";
import ProjectCardShimmer from "../ProjectCardShimmer";

const LocationListingShimmer = ({ props }) => {
  const { width } = useWindowSize();

  return (
    <>
      <section className={Style.listing_shimmer}>
        <div className="container">
          <h6 className={`${Style.placeholder}`}>12 Results found</h6>

          <div className="row row-cols-lg-3">
            {[...Array(12)]?.map(() => {
              return (
                <div className="col">
                  <ProjectCardShimmer />{" "}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default LocationListingShimmer;
