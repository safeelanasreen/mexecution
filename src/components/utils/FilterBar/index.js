import { useState, useLayoutEffect, useEffect } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Accordion from "react-bootstrap/Accordion";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import { useWindowSize } from "../../../logic/useDimension";
import Icon from "../../Layout/Icons";
import Style from "./FilterBar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFilterBar } from "./useFilterBar";
import ReactSlider from "react-slider";
import { parseCookies } from "nookies";
import ReactTooltip from "react-tooltip";

const FilterBar = ({ props }) => {

  // const [selectedOptions, setSelectedOptions] = useState(null);

  // const handleSelectChange = (selected) => {
  //   setSelectedOptions(selected);
  // };

  const { width } = useWindowSize();

  let bannerData = props?.data?.banner_data;
  const [citiesActive, setcitiesActive] = useState("");
  const [scrollHide, setScrollHide] = useState(false);

  useEffect(() => {
    const locationPinSlug = (e) => {
      setcitiesActive(e?.detail?.citiesSlug);
    };
    window.addEventListener("locationsPara", locationPinSlug);
  }, []);

  useEffect(() => {
    const hideScrollSection = (e) => {
      setScrollHide(e?.detail?.scrollFilter);
    };
    window.addEventListener("scrollHide", hideScrollSection);
  }, []);

  const router = useRouter();
  const cookies = parseCookies();

  let langCookie = cookies?.lang;

  const { query } = router;
  const assets_properties = [
    // { id: 0, name: "All" },

    ...props?.data?.banner_data?.asset_property,
  ];
  const cities = [
    { id: 0, label: "All Locations", value: "All" },
    ...props?.data?.banner_data?.cities,
  ];
  const {
    scroll,
    setScroll,
    scrollAnim,
    setScrollAnim,
    show,
    setShow,
    showSorting,
    setShowSorting,
    showFilteringMob,
    setShowFilteringMob,
    handleClose,
    handleShow,
    handleSortingClose,
    handleSortingShow,
    handleFilteringClose,
    handleFilteringShow,
    airCondition,
    expansionPossible,
    handleMoreFilterButton,
    activeProductionCategory,
    setActiveProductionCategory,
    buy,
    setBuy,
    askingPrice,
    setAskingPrice,
    listingViewStatus,
    setListingViewStatus,
    handleClick,
    squareMeter,
    setSquareMeter,
    expansionPossibleList,
    height,
    setHeight,
    docks,
    setDocks,
    ramps,
    setRamps,
    electricity,
    setElectricity,
    officeArea,
    setOfficeArea,
    yearRent,
    setYearRent,
    setAirCondition,
    parkingSlots,
    setParkingSlots,
    setExpansionPossible,
    electricityList,
    airConditionList,
    selectInputRef1,
    selectInputRef2,
    selectInputRef3,
    selectInputRef4,
    activeSortList,
    setActiveSortList,
    handleReset,
    selectedOption,
    setSelectedOption,
    selectedBuy,
    setSelectedBuy,
    selectedExpPossibile,
    setSelectedExpPossibile,
    selectedExtraPower,
    setSelectedExtraPower,
    selectedAirCondition,
    setSelectedAirCondition,
    handleResetResponse,
    isMenuOpen,
    handleMenuOpen,
    handleMenuClose,
  } = useFilterBar({ query, props });

  useEffect(() => {
    const locationPinSlug = (e) => {
      setcitiesActive(e?.detail?.citiesSlug);
    };
    window.addEventListener("locationsPara", locationPinSlug);
  }, []);

  let locationSlug = new URLSearchParams(router?.asPath?.split("?")[1]).get(
    "location"
  );
  let squareMeterSlug = new URLSearchParams(router?.asPath?.split("?")[1]).get(
    "square_meter"
  );
  let buySlug = new URLSearchParams(router?.asPath?.split("?")[1]).get(
    "buy_or_rent"
  );
  let EPSlug = new URLSearchParams(router?.asPath?.split("?")[1]).get(
    "expansion_possible"
  );
  let EleSlug = new URLSearchParams(router?.asPath?.split("?")[1]).get(
    "extra_power"
  );

  useEffect(() => {
    var url = new URL(window.location.href);
    let askPriceMin = url.searchParams.get("asking_price_min");
    let askPriceMax = url.searchParams.get("asking_price_max");
    let minHeight = url.searchParams.get("min_height");
    let maxHeight = url.searchParams.get("max_height");
    let minDocks = url.searchParams.get("no_of_docks_min");
    let maxDocks = url.searchParams.get("no_of_docks_max");
    let minRamps = url.searchParams.get("no_of_ramps_min");
    let maxRamps = url.searchParams.get("no_of_ramps_max");
    let minOffice = url.searchParams.get("office_area_min");
    let maxOffice = url.searchParams.get("office_area_max");
    let minYear = url.searchParams.get("year_to_rent_min");
    let maxYear = url.searchParams.get("year_to_rent_max");
    let minParking = url.searchParams.get("parking_slots_min");
    let maxParking = url.searchParams.get("parking_slots_max");

    if (window?.location?.search) {
      setAskingPrice([
        askPriceMin ?? 0,
        askPriceMax ?? bannerData?.price_per_m2,
      ]);
      setHeight([minHeight ?? 0, maxHeight ?? bannerData?.height]);
      setDocks([minDocks ?? 0, maxDocks ?? bannerData?.docks]);
      setRamps([minRamps ?? 0, maxRamps ?? bannerData?.ramps]);
      setOfficeArea([minOffice ?? 0, maxOffice ?? bannerData?.office_area]);
      setYearRent([minYear ?? 0, maxYear ?? bannerData?.minimum_years_to_rent]);
      setParkingSlots([
        minParking ?? 0,
        maxParking ?? bannerData?.no_of_parking_slot,
      ]);

      const defaultOptionBuy = props?.data?.banner_data?.buy.filter(
        (option) => option.value === buySlug
      )[0];
      setSelectedBuy(defaultOptionBuy);
      setBuy(defaultOptionBuy?.value);

      const defaultOptionEp = expansionPossibleList.filter(
        (option) => option.value === EPSlug
      )[0];
      setSelectedExpPossibile(defaultOptionEp);
      setExpansionPossible(defaultOptionEp?.value);

      const defaultOptionElectricity = electricityList.filter(
        (option) => option.value === EleSlug
      )[0];
      setSelectedExtraPower(defaultOptionElectricity);
      setElectricity(defaultOptionElectricity?.value);

      const defaultOptionAir = electricityList.filter(
        (option) => option.value === EleSlug
      )[0];
      setSelectedAirCondition(defaultOptionAir);
      setAirCondition(defaultOptionAir?.value);
    }

    activeTab(query?.production_category ?? 0);
  }, [router]);

  const handleScroll = () => {
    setScroll(window.scrollY > 350);
    setTimeout(() => {
      setScrollAnim(window.scrollY > 350);
    }, 200);
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const activeTab = (cat) => {
    setActiveProductionCategory(cat);
  };

  useEffect(() => {
    handleCatFilter({ id: 1, name: "Avail. Space" });
  }, []);

  const handleCatFilter = (data) => {
     var url = new URL(window.location.href);
    url.searchParams.set("production_category", data?.id);
    url.searchParams.set("sub_category", 0);
    url.searchParams.set("language", langCookie);

    window.history.pushState(
      { ...window.history.state, url: url.href, as: url.href },
      "",
      url.href
    );
    activeTab(data?.id);
    const myEvent = new CustomEvent("routeChange", {
      detail: {
        reset: true,
      },
    });
    window.dispatchEvent(myEvent);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSelectCities = (data) => {
    var url = new URL(window.location.href);
    url.searchParams.set("location", data?.id);
    url.searchParams.set("language", langCookie);

    window.history.pushState(
      { ...window.history.state, as: url.href, url: url.href },
      "",
      url.href
    );

    const myEvent = new CustomEvent("routeChange");
    window.dispatchEvent(myEvent);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSelectSquareMeter = (data) => {
    var url = new URL(window.location.href);
    url.searchParams.set("square_meter", data?.value);
    url.searchParams.set("language", langCookie);

    window.history.pushState(
      { ...window.history.state, as: url.href, url: url.href },
      "",
      url.href
    );

    const myEvent = new CustomEvent("routeChange");
    window.dispatchEvent(myEvent);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleListview = () => {
    var url = new URL(window.location.href);
    url.searchParams.set("list", listingViewStatus);
    window.history.pushState(
      { ...window.history.state, as: url.href, url: url.href },
      "",
      url.href
    );

    const listEvent = new CustomEvent("listViewChange");
    window.dispatchEvent(listEvent);
  };

  const handleSortList = (data) => {
    var url = new URL(window.location.href);
    url.searchParams.set("sort", data?.value);
    url.searchParams.set("language", langCookie);

    setActiveSortList(data?.value);
    window.history.pushState(
      { ...window.history.state, as: url.href, url: url.href },
      "",
      url.href
    );

    const myEvent = new CustomEvent("routeChange");
    window.dispatchEvent(myEvent);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const allSquareMeterOptions = [
    {
      id: 0,
      label: "All Area",
      value: `0-${props?.data?.banner_data?.square_meter_max}`,
    },
    ...props?.data?.banner_data?.square_meter,
  ];

  const modifiedSquareOptions = allSquareMeterOptions?.map((option) => ({
    ...option,
    label: (
      <>
        {option?.label === "All Area" ? (
          <span>{option.label}</span>
        ) : (
          <span>
            {option.label} &nbsp;m<sup>2</sup>
          </span>
        )}
      </>
    ),
  }));

  const modifiedSquarePlaceholder = (
    <span>
      Square m<sup>2</sup>
    </span>
  );

  const defaultVALUE = cities?.filter(
    (option) => option?.id === Number(locationSlug)
  );
  const defaultVALUE2 = cities?.filter(
    (option) => option?.id === Number(citiesActive)
  );

  return (
    <>
      <div
        className={`${Style.filter}  ${scroll ? Style.filter_scrolled : ""}   ${
          scrollAnim ? Style.filter_scrolled_animated : ""
        }`}
      >
        <div className="container">
          <div className={`${Style.row} row align-items-center`}>
            <div className={`${Style.remove_P} col-xl`}>
              <div className={`row ${Style.row_filter}`}>
                <div className="col-auto">
                  <div className={Style.btn_group}>
                    {assets_properties?.map((data, index) => {
                      return (
                        <button
                          className={`${Style.btn} ${
                            activeProductionCategory == data?.id
                              ? Style.btn_active
                              : ""
                          }`}
                          key={index}
                          onClick={() => handleCatFilter(data)}
                          disabled={
                            assets_properties === data?.id ? true : false
                          }
                        >
                          {data?.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {/* filter---xl--- */}
                {width >= 1200 ? (
                  <>
                    <div className={`${Style.location_select} col-xl-auto`}>
                      <Select
                        id="value1"
                        options={cities}
                        onChange={(e) => {
                          handleSelectCities(e);
                        }}
                        value={defaultVALUE2 ?? null}
                        className="custom-select-wrap mb-4 mb-xl-0 s"
                        classNamePrefix="custom-select"
                        placeholder="Locations"
                        defaultValue={defaultVALUE}
                        isSearchable={false}
                      ></Select>
                    </div>

                    <div className={`${Style.area_select} col-xl-auto`}>
                      <Select
                        id="value2"
                        options={modifiedSquareOptions}
                        onChange={(e) => {
                          handleSelectSquareMeter(e);
                        }}
                        className="custom-select-wrap mb-4 mb-xl-0"
                        classNamePrefix="custom-select"
                        placeholder={modifiedSquarePlaceholder}
                        defaultValue={props?.data?.banner_data?.square_meter?.filter(
                          (option) => option?.value === squareMeterSlug
                        )}
                        isSearchable={false}
                        // menuIsOpen
                      ></Select>
                    </div>
                    <div className="col-auto ms-auto ms-xl-0">
                      <button
                        className="btn btn-sm btn-white d-inline-flex align-items-center"
                        onClick={handleShow}
                      >
                        <span className="text-primary">
                          <Icon icon="icon_filter" size={19} />
                        </span>
                        {/* <span>
                          More filters
                        </span> */}
                      </button>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>

            {width >= 1200 ? (
              <div className="col-xl-auto">
                <div className={`${Style.form_group} ${Style.sort}`}>
                  <span className={Style.label} aria-labelledby="sortby">
                    Sort by:
                  </span>
                  <Select
                    id="sortby"
                    options={props?.data?.banner_data?.sort}
                    className={`custom-select-wrap mb-4 mb-xl-0 ${Style.no_style}`}
                    classNamePrefix="custom-select"
                    onChange={(e) => {
                      handleSortList(e);
                      // handleSelectChange(e);
                    }}
                    placeholder="Sort List"
                    isSearchable={false}
                  ></Select>

                  {/* {selectedOptions && (
                    <div data-tip={selectedOptions?.label}>
                      Hover over me to see the selected value
                    </div>
                  )} */}
                </div>
                {/* <ReactTooltip effect="solid" /> */}
                <div className={Style.form_group}>
                  <span className={Style.label} aria-labelledby="view">
                    {listingViewStatus ? "List" : "Grid"}
                  </span>
                  <button
                    id="view"
                    aria-label="grid list view"
                    onClick={() => {
                      handleListview();
                      handleClick();
                    }}
                  >
                    {listingViewStatus ? (
                      <Icon icon="icon_list" size={19} />
                    ) : (
                      <Icon icon="Icon_grid" size={16} />
                    )}
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={Style.modal_more_filter}
      >
        <Modal.Body>
          <button
            type="button"
            className="btn-close"
            onClick={handleClose}
            aria-label="Close"
          ></button>
          <h2 className="h4">All filters</h2>
          <div className={`row row-cols-xl-2 mb-5`}>
            <div className={`${Style.buy_select} `}>
              <Select
                id="value1"
                ref={selectInputRef1}
                options={props?.data?.banner_data?.buy}
                className="custom-select-wrap mb-4 mb-xl-0"
                classNamePrefix="custom-select"
                value={selectedBuy ?? ""}
                onChange={(e) => {
                  setBuy(e?.value);
                  setSelectedBuy(e);
                }}
                defaultValue={
                  props?.data?.banner_data?.buy.filter(
                    (option) => option.value === selectedBuy?.value
                  )?.[0]
                }
                placeholder="Sale or Rent"
                // menuIsOpen
              ></Select>
            </div>

            <div className={`${Style.expansion_select} `}>
              <Select
                id="value2"
                ref={selectInputRef2}
                value={selectedExpPossibile ?? ""}
                options={expansionPossibleList}
                className="custom-select-wrap mb-4 mb-xl-0"
                classNamePrefix="custom-select"
                onChange={(e) => {
                  setExpansionPossible(e?.value);
                  setSelectedExpPossibile(e);
                }}
                placeholder="Expansion Possible"
                defaultValue={
                  expansionPossibleList.filter(
                    (option) => option.value === selectedExpPossibile?.value
                  )?.[0]
                }
                // menuIsOpen
              ></Select>
            </div>

            <div className={`${Style.extra_power_select} `}>
              <Select
                id="value3"
                ref={selectInputRef3}
                value={selectedExtraPower ?? ""}
                options={electricityList}
                className="custom-select-wrap mb-4 mb-xl-0"
                classNamePrefix="custom-select"
                onChange={(e) => {
                  setElectricity(e?.value);
                  setSelectedExtraPower(e);
                }}
                defaultValue={
                  electricityList.filter(
                    (option) => option.value === selectedExtraPower?.value
                  )?.[0]
                }
                placeholder="Electricity Extra Power"
                // menuIsOpen
              ></Select>
            </div>

            <div className={`${Style.ac_select} `}>
              <Select
                id="value4"
                options={airConditionList}
                ref={selectInputRef4}
                value={selectedAirCondition ?? ""}
                className="custom-select-wrap mb-4 mb-xl-0"
                classNamePrefix="custom-select"
                placeholder="Air Condition"
                onChange={(e) => {
                  setAirCondition(e?.value);
                  setSelectedAirCondition(e);
                }}
                defaultValue={
                  airConditionList.filter(
                    (option) => option.value === selectedAirCondition?.value
                  )?.[0]
                }
              ></Select>
            </div>
          </div>
          <div className={`row row-cols-xl-2 mb-5`}>
            {/* Commented as per client's requirement */}

            {/* <div>
              <label>Asking Price $USD</label>
              <div className="mt-2">
                <div className={Style.label}>
                  <div className={Style.label_item}>
                    {askingPrice?.[0] ?? 0} $USD
                  </div>
                  <div className={Style.label_item}>
                    {askingPrice?.[1] ?? bannerData?.price_per_m2} $USD
                  </div>
                </div>
                <ReactSlider
                  className={Style?.horizontal_slider}
                  thumbClassName="example_thumb"
                  trackClassName="example_track"
                  min={0}
                  max={bannerData?.price_per_m2}
                  step={0.01}
                  value={askingPrice}
                  onChange={(e) => {
                    setAskingPrice(e);
                  }}
                />
              </div>
            </div> */}

            {/* Commented for future use */}

            <div>
              <label>
                Min / Max Height per <sup>2</sup>
              </label>
              <div className="mt-2">
                <div className={Style.label}>
                  <div className={Style.label_item}>
                    {height?.[0] ?? 0} m<sup>2</sup>
                  </div>
                  <div className={Style.label_item}>
                    {height?.[1] ?? bannerData?.height} m<sup>2</sup>
                  </div>
                </div>
                <ReactSlider
                  className={Style?.horizontal_slider}
                  thumbClassName="example_thumb"
                  trackClassName="example_track"
                  min={0}
                  step={0.01}
                  max={bannerData?.height}
                  value={height}
                  onChange={(e) => {
                    setHeight(e);
                  }}
                />
              </div>
            </div>

            <div>
              <label>No. of Docks</label>
              <div className="mt-2">
                <div className={Style.label}>
                  <div className={Style.label_item}>{docks?.[0] ?? 0}</div>
                  <div className={Style.label_item}>
                    {docks?.[1] ?? bannerData?.docks}
                  </div>
                </div>
                <ReactSlider
                  className={Style?.horizontal_slider}
                  thumbClassName="example_thumb"
                  trackClassName="example_track"
                  min={0}
                  max={bannerData?.docks}
                  value={docks}
                  onChange={(e) => {
                    setDocks(e);
                  }}
                />
              </div>
            </div>

            <div>
              <label>No. of Ramps</label>
              <div className="mt-2">
                <div className={Style.label}>
                  <div className={Style.label_item}>{ramps?.[0] ?? 0}</div>
                  <div className={Style.label_item}>
                    {ramps?.[1] ?? bannerData?.ramps}
                  </div>
                </div>
                <ReactSlider
                  className={Style?.horizontal_slider}
                  thumbClassName="example_thumb"
                  trackClassName="example_track"
                  min={0}
                  max={bannerData?.ramps}
                  value={ramps}
                  onChange={(e) => {
                    setRamps(e);
                  }}
                />
              </div>
            </div>
            {/* {typeof officeArea?.[1] !== "string" && ( */}
            {/* <div className={typeof officeArea?.[1] == "string" && "opacity-50"}>
              <label>Office area</label>
              <div className="mt-2">
                <div className={Style.label}>
                  <div className={Style.label_item}>
                    {officeArea?.[0] ?? 0} m<sup>2</sup>
                  </div>
                  <div className={Style.label_item}>
                    {officeArea?.[1] ?? bannerData?.office_area} m<sup>2</sup>
                  </div>
                </div>
                <ReactSlider
                  className={`${Style?.horizontal_slider} `}
                  thumbClassName="example_thumb"
                  trackClassName="example_track"
                  min={0}
                  max={bannerData?.office_area}
                  value={officeArea}
                  onChange={(e) => {
                    setOfficeArea(e);
                  }}
                  disabled={typeof officeArea?.[1] == "string" ? true : false}
                />
              </div>
            </div> */}
            {/* )} */}
            {/* 
            <div>
              <label>Minimum years to rent</label>
              <div className="mt-2">
                <div className={Style.label}>
                  <div className={Style.label_item}>{yearRent?.[0] ?? 0}</div>
                  <div className={Style.label_item}>
                    {yearRent?.[1] ?? bannerData?.minimum_years_to_rent}
                  </div>
                </div>
                <ReactSlider
                  className={Style?.horizontal_slider}
                  thumbClassName="example_thumb"
                  trackClassName="example_track"
                  min={0}
                  max={bannerData?.minimum_years_to_rent}
                  value={yearRent}
                  onChange={(e) => {
                    setYearRent(e);
                  }}
                />
              </div>
            </div> */}

            <div>
              <label>No. Parking Slots cars</label>
              <div className="mt-2">
                <div className={Style.label}>
                  <div className={Style.label_item}>
                    {parkingSlots?.[0] ?? 0}
                  </div>
                  <div className={Style.label_item}>
                    {parkingSlots?.[1] ?? bannerData?.no_of_parking_slot}
                  </div>
                </div>
                <ReactSlider
                  className={Style?.horizontal_slider}
                  thumbClassName="example_thumb"
                  trackClassName="example_track"
                  min={0}
                  max={bannerData?.no_of_parking_slot}
                  value={parkingSlots}
                  onChange={(e) => {
                    setParkingSlots(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className={`${Style.submit} d-flex`}>
            <button className="btn btn-link" onClick={() => handleReset()}>
              Clear All{" "}
            </button>
            <button
              className="btn btn-primary w-100"
              onClick={() => handleMoreFilterButton()}
            >
              Apply
            </button>
          </div>
        </Modal.Body>
      </Modal>
      {width <= 1200 && (
        <>
          <Offcanvas
            show={showSorting}
            onHide={handleSortingClose}
            placement={"bottom"}
            name={"sorting lisitng mobile popup"}
            className={Style.sorting_popup}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Sort by</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul>
                {props?.data?.banner_data?.sort?.map((item, key) => {
                  return (
                    <li
                      className={` ${
                        activeSortList == item?.value ? Style.active : ""
                      }`}
                      key={key}
                      onClick={() => {
                        handleSortList(item);
                        setShowSorting(false);
                      }}
                    >
                      {item?.label}
                    </li>
                  );
                })}
              </ul>
            </Offcanvas.Body>
          </Offcanvas>

          <Offcanvas
            show={showFilteringMob}
            onHide={handleFilteringClose}
            placement={"start"}
            name={"sorting lisitng mobile popup"}
            className={Style.filter_mobile}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title onClick={() => handleResetResponse()}>
                Reset
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Accordion
                alwaysOpen={true}
                defaultActiveKey={["0", "1", "2", "3"]}
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Sale or Rent</Accordion.Header>
                  <Accordion.Body>
                    {props?.data?.banner_data?.buy?.map((item, i) => {
                      return (
                        <div className="form-check" key={i}>
                          <label
                            htmlFor={`typeBuy${i}`}
                            className="fs-16 clickable-label"
                          >
                            <input
                              type="radio"
                              id={`typeBuy${i}`}
                              name="typeBuy"
                              value={item?.id}
                              className="form-check-input"
                              onClick={() => setBuy(item.value)}
                              checked={buy === item.value}
                            />
                            {item?.label}
                          </label>
                        </div>
                      );
                    })}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Expansion Possible</Accordion.Header>
                  <Accordion.Body>
                    {expansionPossibleList?.map((item, i) => {
                      return (
                        <div className="form-check" key={i}>
                          <label
                            htmlFor={`possibile${i}`}
                            className="fs-16 clickable-label"
                          >
                            <input
                              type="radio"
                              id={`possibile${i}`}
                              name="possibile"
                              value={item?.id}
                              checked={expansionPossible === item.value}
                              className="form-check-input"
                              onClick={() => setExpansionPossible(item.value)}
                            />
                            {item?.label}
                          </label>
                        </div>
                      );
                    })}
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Electricity Extra Power</Accordion.Header>
                  <Accordion.Body>
                    {electricityList?.map((item, i) => {
                      return (
                        <div className="form-check" key={i}>
                          <label
                            htmlFor={`Power${i}`}
                            className="fs-16 clickable-label"
                          >
                            <input
                              type="radio"
                              id={`Power${i}`}
                              name="Power"
                              value={item?.id}
                              checked={electricity === item.value}
                              className="form-check-input"
                              onClick={() => setElectricity(item.value)}
                            />
                            {item?.label}
                          </label>
                        </div>
                      );
                    })}
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>Air Condition</Accordion.Header>
                  <Accordion.Body>
                    {airConditionList?.map((item, i) => {
                      return (
                        <div className="form-check" key={i}>
                          <label
                            htmlFor={`Air${i}`}
                            className="fs-16 clickable-label"
                          >
                            <input
                              type="radio"
                              id={`Air${i}`}
                              name="Air"
                              value={item?.id}
                              checked={airCondition === item.value}
                              className="form-check-input"
                              onClick={() => setAirCondition(item.value)}
                            />
                            {item?.label}
                          </label>
                        </div>
                      );
                    })}
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    Square m<sup>2</sup>
                  </Accordion.Header>
                  <Accordion.Body>
                    {modifiedSquareOptions?.map((item, i) => {
                      return (
                        <div className="form-check" key={i}>
                          <label
                            htmlFor={`Squ${i}`}
                            className="fs-16 clickable-label"
                          >
                            <input
                              type="radio"
                              id={`Squ${i}`}
                              name="Squ"
                              value={item?.id}
                              checked={squareMeter === item.value}
                              className="form-check-input"
                              onClick={() => setSquareMeter(item.value)}
                            />
                            {item?.label}
                          </label>
                        </div>
                      );
                    })}
                  </Accordion.Body>
                </Accordion.Item>

                {/* Commented as per client's requirement */}

                {/* <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Asking Price per m<sup>2</sup>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={Style.label}>
                      <div className={Style.label_item}>
                        {askingPrice?.[0] ?? 0} USD
                      </div>
                      <div className={Style.label_item}>
                        {askingPrice?.[1] ?? bannerData?.price_per_m2} USD
                      </div>
                    </div>
                    <ReactSlider
                      className={Style?.horizontal_slider}
                      thumbClassName="example_thumb"
                      trackClassName="example_track"
                      min={0}
                      max={bannerData?.price_per_m2}
                      value={askingPrice}
                      onChange={(e) => {
                        setAskingPrice(e);
                      }}
                    />
                  </Accordion.Body>
                </Accordion.Item> */}

                {/* Commented for future use */}

                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Min / Max Height per m<sup>2</sup>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={Style.label}>
                      <div className={Style.label_item}>
                        {height?.[0] ?? 0} m<sup>2</sup>
                      </div>
                      <div className={Style.label_item}>
                        {height?.[1] ?? bannerData?.height} m<sup>2</sup>
                      </div>
                    </div>
                    <ReactSlider
                      className={Style?.horizontal_slider}
                      thumbClassName="example_thumb"
                      trackClassName="example_track"
                      min={0}
                      max={bannerData?.height}
                      value={height}
                      onChange={(e) => {
                        setHeight(e);
                      }}
                    />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>No. of Docks</Accordion.Header>
                  <Accordion.Body>
                    <div className={Style.label}>
                      <div className={Style.label_item}>{docks?.[0] ?? 0}</div>
                      <div className={Style.label_item}>
                        {docks?.[1] ?? bannerData?.docks}
                      </div>
                    </div>
                    <ReactSlider
                      className={Style?.horizontal_slider}
                      thumbClassName="example_thumb"
                      trackClassName="example_track"
                      min={0}
                      max={bannerData?.docks}
                      value={docks}
                      onChange={(e) => {
                        setDocks(e);
                      }}
                    />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header>No. of Ramps</Accordion.Header>
                  <Accordion.Body>
                    <div className={Style.label}>
                      <div className={Style.label_item}>{ramps?.[0] ?? 0}</div>
                      <div className={Style.label_item}>
                        {ramps?.[1] ?? bannerData?.ramps}
                      </div>
                    </div>
                    <ReactSlider
                      className={Style?.horizontal_slider}
                      thumbClassName="example_thumb"
                      trackClassName="example_track"
                      min={0}
                      max={bannerData?.ramps}
                      value={ramps}
                      onChange={(e) => {
                        setRamps(e);
                      }}
                    />
                  </Accordion.Body>
                </Accordion.Item>

                {/* Commented as per client's requirement */}

                {/* <Accordion.Item eventKey="8">
                  <Accordion.Header>Office area</Accordion.Header>
                  <Accordion.Body>
                    <div className={`${Style.label} ${
                        typeof officeArea?.[1] == "string" && "opacity-50"
                      }`}>
                      <div className={Style.label_item}>
                        {officeArea?.[0] ?? 0} m<sup>2</sup>
                      </div>
                      <div className={Style.label_item}>
                        {officeArea?.[1] ?? bannerData?.office_area} m
                        <sup>2</sup>
                      </div>
                    </div>
                    <ReactSlider
                      className={`${Style?.horizontal_slider}`}
                      thumbClassName="example_thumb"
                      trackClassName="example_track"
                      min={0}
                      max={bannerData?.office_area}
                      value={officeArea}
                      onChange={(e) => {
                        setOfficeArea(e);
                      }}
                      disabled={
                        typeof officeArea?.[1] == "string" ? true : false
                      }
                    />
                  </Accordion.Body>
                </Accordion.Item> */}

                <Accordion.Item eventKey="9">
                  <Accordion.Header>Minimum years to rent</Accordion.Header>
                  <Accordion.Body>
                    <div className={Style.label}>
                      <div className={Style.label_item}>
                        {yearRent?.[0] ?? 0}
                      </div>
                      <div className={Style.label_item}>
                        {yearRent?.[1] ?? bannerData?.minimum_years_to_rent}
                      </div>
                    </div>
                    <ReactSlider
                      className={Style?.horizontal_slider}
                      thumbClassName="example_thumb"
                      trackClassName="example_track"
                      min={0}
                      max={bannerData?.minimum_years_to_rent}
                      value={yearRent}
                      onChange={(e) => {
                        setYearRent(e);
                      }}
                    />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="10">
                  <Accordion.Header>No. Parking Slots cars</Accordion.Header>
                  <Accordion.Body>
                    <div className={Style.label}>
                      <div className={Style.label_item}>
                        {parkingSlots?.[0] ?? 0}
                      </div>
                      <div className={Style.label_item}>
                        {parkingSlots?.[1] ?? bannerData?.no_of_parking_slot}
                      </div>
                    </div>
                    <ReactSlider
                      className={Style?.horizontal_slider}
                      thumbClassName="example_thumb"
                      trackClassName="example_track"
                      min={0}
                      max={bannerData?.no_of_parking_slot}
                      value={parkingSlots}
                      onChange={(e) => {
                        setParkingSlots(e);
                      }}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <div className={Style.btn_wrap}>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => {
                    handleMoreFilterButton();
                    setShowFilteringMob(false);
                  }}
                >
                  Show results
                </button>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          {!scrollHide && (
            <div className={Style.bottom_menu}>
              <div className="row align-items-center">
                <div className="col">
                  <Select
                    menuPlacement="top"
                    menuIsOpen={isMenuOpen}
                    // menuIsOpen
                    onMenuOpen={handleMenuOpen}
                    onMenuClose={handleMenuClose}
                    id="value1"
                    options={cities}
                    onChange={(e) => {
                      handleSelectCities(e);
                    }}
                    placeholder="All Locations"
                    isSearchable={false}
                    className="custom-select-wrap"
                    classNamePrefix="custom-select"
                    defaultValue={defaultVALUE}
                  ></Select>
                </div>

                <div className={`col-auto ${Style.col_right}`}>
                  <button
                    className="btn btn-sm btn-white d-inline-flex align-items-center"
                    onClick={handleFilteringShow}
                  >
                    <span className="text-primary">
                      <Icon icon="icon_filter" size={19} />
                    </span>
                  </button>
                  <button
                    className="btn btn-sm btn-white d-inline-flex align-items-center"
                    onClick={handleSortingShow}
                  >
                    <span className="text-primary">
                      <Icon icon="icon_sorting" size={19} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default FilterBar;
