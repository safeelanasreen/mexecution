import { useEffect, useState } from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProjectCard from "../utils/ProjectCard";
import Style from "./LocationListing.module.scss";
import Icon from "../Layout/Icons";
import { useWindowSize } from "../../logic/useDimension";
// import Tooltip from 'react-bootstrap/Tooltip';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import CommonSlider from "../utils/CommonSlider";
import { useRouter } from "next/router";
import { getPageContent } from "../../../lib/pages";
import NoData from "../utils/NoData";
import { parseCookies } from "nookies";
import ProjectCardShimmer from "../ProjectCardShimmer";
import LocationListingShimmer from "../LocationListingShimmer";
import AssetModal from "../utils/AssetModal";
import Link from "next/link";

const LocationListing = ({ props }) => {

  const { width } = useWindowSize();

  const parse = require("html-react-parser");

  const cookies = parseCookies();

  let langCookie = cookies?.lang;

  const [locationChangeDetail, setLocationChangeDetail] = useState("");
  const [locationData, setLocationData] = useState(props?.data?.location_data);
  const [initialLoad, setInitialLoad] = useState(true);
  const [locationCategory, setLocationCategory] = useState("");
  const [activeSubCategory, setActiveSubCategory] = useState(0);
  const [listingView, setListingView] = useState(false);
  const [count, setCount] = useState(props?.data?.count);
  const [offSet, setOffSet] = useState(0);
  const [status, setStatus] = useState("idle");
  const [isReadMore, setIsReadMore] = useState(false);
  // const [navClass, setNavClass] = useState("")

  useEffect(() => {
    setTimeout(() => {
      setStatus("");
    }, 300);
  }, []);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    setTimeout(() => {
      setInitialLoad(false);
    }, 200);
  }, []);

  const router = useRouter();

  const pathId = router?.query;

  useEffect(() => {
    var url = new URL(window.location.href);
    let subCat = url.searchParams.get("sub_category");
    let listView = url.searchParams.get("list");

    setActiveSubCategory(subCat ?? 0);
    setListingView(listView);

    if (window?.location?.search) {
      let queryString = window?.location?.search;
      let languageRegex = /language=([^&]+)/;
      let match = queryString.match(languageRegex);
      if (match) {
        let newQueryString = queryString.replace(
          languageRegex,
          "language=" + langCookie
        );
        getData(newQueryString);
      }
    }

    const myFunc = (e) => {
      getData(window?.location?.search);

      if (e?.detail?.reset) {
        setActiveSubCategory(0);
      }
    };

    window.addEventListener("routeChange", myFunc);

    return () => {
      window.removeEventListener("routeChange", myFunc);
    };
  }, []);

  useEffect(() => {
    const myFunc = () => {
      var url = new URL(window.location.href);
      let listing = url.searchParams.get("list");
      setListingView(listing === "true");
    };

    window.addEventListener("listViewChange", myFunc);

    return () => {
      window.removeEventListener("listViewChange", myFunc);
    };
  }, []);

  const getData = async (param) => {
    let locationSlug = new URLSearchParams(param?.split("?")[1]).get(
      "location"
    );
    const openEvent = new CustomEvent("locationsPara", {
      detail: { citiesSlug: locationSlug },
    });

    if (typeof window !== undefined) {
      window.dispatchEvent(openEvent);
    }
    if (pathId) {
      setStatus("pending");
      await getPageContent(`location/filter${param}`)
        .then((r) => {
          setLocationCategory(() =>
            r?.[0]?.data?.locations?.length
              ? [{ id: 0, title: "All" }, ...r?.[0]?.data?.locations]
              : []
          );

          setCount(r?.[0]?.data?.count);
          setLocationChangeDetail(r?.[0]?.data && r?.[0]?.data);
          setLocationData(r?.[0]?.data?.location_data);
          setTimeout(() => {
            setStatus("success");
          }, 100);
        })
        .catch(() => {
          setStatus("error");
        });
    }
  };

  const handleSubCatFilter = (data) => {
    var url = new URL(window.location.href);
    url.searchParams.set("sub_category", data);

    window.history.pushState(
      { ...window.history.state, as: url.href, url: url.href },
      "",
      url.href
    );

    setActiveSubCategory(data);

    const myEvent = new CustomEvent("routeChange");
    window.dispatchEvent(myEvent);
  };

  const loadMoreData = async (perPage) => {
    setStatus("pending");

    await getPageContent(
      `location/filter?offset=${perPage}&limit=12&language=${langCookie}`
    )
      .then((r) => {
        setLocationData((state) =>
          r?.[0]?.data?.location_data?.length > 0
            ? [...state, ...r?.[0]?.data?.location_data]
            : [...state]
        );
        setCount(r?.[0]?.data?.count);
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  };

  let descriptionContent =
    locationChangeDetail?.description ?? props?.data?.description;

  const handleMoreInfoClick = () => {
    const url = locationChangeDetail?.url || props?.data?.url;

    if (url) {
      router.push(url);
    }
  };

  return (
    <>
      {status === "idle" ? (
        <LocationListingShimmer />
      ) : (
        width > 992 && (
          <section className={Style.mx_featured_location}>
            <div className="container">
              <div className={`row ${Style.row_main}`}>
                <div className={Style.col_left}>
                  <div className={`${Style.img_wrap}`}>
                    {width >= 992 ? (
                      ""
                    ) : (
                      <h2>
                        {locationChangeDetail?.title ?? props?.data?.title}
                      </h2>
                    )}
                    <div className="ratio">
                      <Image
                        src={locationChangeDetail?.img ?? props?.data?.img}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="about cover"
                        priority={true}
                        quality={30}
                      />
                    </div>
                  </div>
                </div>
                <div className={Style.col_right}>
                  <div className={Style.content_wrap}>
                    {width <= 992 ? (
                      ""
                    ) : (
                      <h2>
                        {locationChangeDetail?.title ?? props?.data?.title}
                      </h2>
                    )}
                    <p>{parse(`${descriptionContent}`)}</p>

                    {/* {locationChangeDetail?.url || props?.data?.url ? (
                      <Link
                        href={`${
                          locationChangeDetail?.url ?? props?.data?.url
                        }`}
                      >
                        More info
                      </Link>
                    ) : null} */}

                    {locationChangeDetail?.url || props?.data?.url ? (
                      <button className={Style.moreinfo_btn} onClick={handleMoreInfoClick}>More info</button>
                    ) : null}
                      

                    <div className={Style.seal}>
                      <div className="ratio">
                        <Image src={"/images/icon/seal.png"} fill alt="seal" />
                      </div>
                      <div className={Style.tooltip_wrap}>
                        <Tooltip>
                          <ul>
                            {props?.data?.tooltip?.map((item, index) => (
                              <li key={index}>{item?.heading}</li>
                            ))}
                          </ul>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className={Style.membership_discr}>
                 <p>
                  <span>
                    <Image src={"/images/icon/common_plan.svg"} fill />
                  </span>
                  {`${props?.data?.asset_type_description}`}
                </p>
              </div> */}
            </div>
          </section>
        )
      )}

      <section className={`${Style.mx_listing_location}`}>
        <div className="container">
          {width >= 992 ? (
            ""
          ) : (
            <div className={Style.membership_discr}>
              {/* {props?.asset_type_description && <p><strong>Note: </strong>{`${props?.gold_silver_description}`}</p>} */}
              <p>
                <span>
                  <Image src={"/images/icon/common_plan.svg"} fill />
                </span>
                {`${props?.data?.asset_type_description}`}
              </p>
            </div>
          )}
          {width >= 992 && locationCategory?.length > 0 ? (
            <div className={`position-relative   ${Style.slider_wrap}`}>
              <CommonSlider
                // onNoNav={handleNoNavChange}

                pagination={true}
                slidesPerView={"auto"}
                freeMode={true}
                spaceBetween={13}
                modules={[FreeMode, Navigation]}
                className={`${Style.sub_nav_slider}  slider`}
              >
                {locationCategory?.length > 0 &&
                  locationCategory?.map((item, key) => (
                    <SwiperSlide className="w-auto" key={key}>
                      <button
                        className={`${Style.btn} ${
                          activeSubCategory == item?.id ? Style.btn_active : ""
                        }`}
                        onClick={() => {
                          handleSubCatFilter(item?.id);
                        }}
                      >
                        {item?.title}
                      </button>
                    </SwiperSlide>
                  ))}
              </CommonSlider>
            </div>
          ) : (
            <>
              {locationCategory?.length > 0 && (
                <select
                  className={Style.custom_select}
                  onChange={(e) => handleSubCatFilter(e.target.value)}
                >
                  {locationCategory?.length > 0 &&
                    locationCategory?.map((item, key) => (
                      <option
                        className={Style.custom_option}
                        value={item?.id}
                        key={key}
                      >
                        {item?.title}
                      </option>
                    ))}
                </select>
              )}
            </>
          )}

          {locationData?.length > 0 && (
            <span className="h6">{count} Results found</span>
          )}
          {locationData?.length !== 0 ? (
            <div
              className={`${Style.row}
             //  ${listingView ? Style.row_listing : ""}
               row row-cols-lg-${listingView ? "1" : "3"}`}
            >
              {status === "pending"
                ? [...Array(count)]?.map(() => {
                    return <ProjectCardShimmer />;
                  })
                : locationData?.map((item, i) => (
                    <div key={i}>
                      <ProjectCard data={item} listView={listingView} />
                    </div>
                  ))}
            </div>
          ) : (
            status !== "pending" && (
              <div className="col-12">
                <NoData />
              </div>
            )
          )}

          {count > locationData?.length && status !== "pending" && (
            <div className={`${Style.btn_wrapper} text-center `}>
              <button
                className="btn-width me-1 btn btn-outline-secondary"
                data-type="button"
                onClick={() => {
                  setOffSet(offSet + 12);
                  loadMoreData(offSet + 12);
                }}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* modal start */}
      <AssetModal props={props} />
      {/* modal end */}
    </>
  );
};

export default LocationListing;
