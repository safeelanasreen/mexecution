import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useRef, useState } from "react";

export const useFilterBar = ({ query, props }) => {
  let hookData = props?.data?.banner_data;
  const cookies = parseCookies();

  let langCookie = cookies?.lang;

  const [scroll, setScroll] = useState(false);
  const [scrollAnim, setScrollAnim] = useState(false);
  const [show, setShow] = useState(false);
  const [showSorting, setShowSorting] = useState(false);
  const [showFilteringMob, setShowFilteringMob] = useState(false);
  const [buy, setBuy] = useState(null);
  const [askingPrice, setAskingPrice] = useState([0, hookData?.price_per_m2]);
  const [listingViewStatus, setListingViewStatus] = useState(true);
  const [squareMeter, setSquareMeter] = useState(null);
  const [height, setHeight] = useState([0, hookData?.height]);
  const [docks, setDocks] = useState([0, hookData?.docks]);
  const [ramps, setRamps] = useState([0, hookData?.ramps]);
  const [electricity, setElectricity] = useState(null);
  const [officeArea, setOfficeArea] = useState([0, hookData?.office_area]);
  const [yearRent, setYearRent] = useState([0, hookData?.minimum_years_to_rent]);
  const [airCondition, setAirCondition] = useState(null);
  const [parkingSlots, setParkingSlots] = useState([0, hookData?.no_of_parking_slot]);
  const [expansionPossible, setExpansionPossible] = useState(null);
  const [activeSortList, setActiveSortList] = useState("latest");

  const [selectedBuy, setSelectedBuy] = useState(null);
  const [selectedExpPossibile, setSelectedExpPossibile] = useState(null);
  const [selectedExtraPower, setSelectedExtraPower] = useState(null);
  const [selectedAirCondition, setSelectedAirCondition] = useState(null);
  // const [selectedSquareMeter, setSelectedSquareMeter] = useState(null);

  const [activeProductionCategory, setActiveProductionCategory] = useState(
    query?.production_category ?? 0
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
    document.body.classList.add("dropdown-open");
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("dropdown-open");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSortingClose = () => setShowSorting(false);
  const handleSortingShow = () => setShowSorting(true);

  const handleFilteringClose = () => setShowFilteringMob(false);
  const handleFilteringShow = () => setShowFilteringMob(true);
  const handleClick = () => {
    setListingViewStatus(!listingViewStatus);
  };

  const expansionPossibleList = [
    { label: "Yes", value: "true" },
    { label: "No", value: "false" },
    { label: "On Demand", value: "on-demand" },
  ];

  const electricityList = [
    { label: "Yes", value: "true" },
    { label: "No", value: "false" },
    { label: "On Demand", value: "on-demand" },
  ];

  const airConditionList = [
    { label: "Yes", value: "true" },
    { label: "No", value: "false" },
    { label: "On Demand", value: "on-demand" },
  ];

  const selectInputRef1 = useRef(null);
  const selectInputRef2 = useRef(null);
  const selectInputRef3 = useRef(null);
  const selectInputRef4 = useRef(null);

  const handleMoreFilterButton = () => {
    var url = new URL(window.location.href);

    buy && url.searchParams.set("buy_or_rent", buy ?? "");

    if (expansionPossible === null) {
    } else {
      expansionPossible !== null &&
        url.searchParams.set("expansion_possible", expansionPossible ?? "");
    }

    if (electricity === null) {
    } else {
      electricity !== null && url.searchParams.set("extra_power", electricity ?? "");
    }

    if (airCondition === null) {
    } else {
      airCondition !== null && url.searchParams.set("air_condition", airCondition ?? "");
    }

    if (squareMeter === null) {
    } else {
      squareMeter !== null && url.searchParams.set("square_meter", squareMeter ?? "");
    }

    if (askingPrice?.[0] === 0 && askingPrice?.[1] === hookData?.price_per_m2) {
    } else {
      askingPrice?.[0] !== false &&
        url.searchParams.set("asking_price_min", askingPrice?.[0] ?? "");
      askingPrice?.[1] && url.searchParams.set("asking_price_max", askingPrice?.[1] ?? "");
    }

    if (height?.[0] === 0 && height?.[1] === hookData?.height) {
    } else {
      height?.[0] !== false && url.searchParams.set("min_height", height?.[0] ?? "");
      height?.[1] && url.searchParams.set("max_height", height?.[1] ?? "");
    }

    if (docks?.[0] === 0 && docks?.[1] === hookData?.docks) {
    } else {
      docks?.[0] !== false && url.searchParams.set("no_of_docks_min", docks?.[0] ?? "");
      docks?.[1] && url.searchParams.set("no_of_docks_max", docks?.[1] ?? "");
    }

    if (ramps?.[0] === 0 && ramps?.[1] === hookData?.ramps) {
    } else {
      ramps?.[0] !== false && url.searchParams.set("no_of_ramps_min", ramps?.[0] ?? "");
      ramps?.[1] && url.searchParams.set("no_of_ramps_max", ramps?.[1] ?? "");
    }

    if (officeArea?.[0] === 0 && officeArea?.[1] === hookData?.office_area) {
    } else {
      officeArea?.[0] !== false && url.searchParams.set("office_area_min", officeArea?.[0] ?? "");
      officeArea?.[1] && url.searchParams.set("office_area_max", officeArea?.[1] ?? "");
    }

    if (yearRent?.[0] === 0 && yearRent?.[1] === hookData?.minimum_years_to_rent) {
    } else {
      yearRent?.[0] !== false && url.searchParams.set("year_to_rent_min", yearRent?.[0] ?? "");
      yearRent?.[1] && url.searchParams.set("year_to_rent_max", yearRent?.[1] ?? "");
    }

    if (parkingSlots?.[0] === 0 && parkingSlots?.[1] === hookData?.no_of_parking_slot) {
    } else {
      parkingSlots?.[0] !== false &&
        url.searchParams.set("parking_slots_min", parkingSlots?.[0] ?? "");
      parkingSlots?.[1] && url.searchParams.set("parking_slots_max", parkingSlots?.[1] ?? "");
    }

    url.searchParams.set("language", langCookie);

    window.history.pushState(
      { ...window.history.state, as: url.href, url: url.href },
      "",
      url.href
    );

    const myEvent = new CustomEvent("routeChange");
    window.dispatchEvent(myEvent);
    setShow(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleReset = () => {
    var url = new URL(window.location.href);

    [
      "buy_or_rent",
      "expansion_possible",
      "extra_power",
      "air_condition",
      "asking_price_min",
      "asking_price_max",
      "min_height",
      "max_height",
      "square_meter_min",
      "square_meter_max",
      "no_of_docks_min",
      "no_of_docks_max",
      "no_of_ramps_min",
      "no_of_ramps_max",
      "office_area_min",
      "office_area_max",
      "year_to_rent_min",
      "year_to_rent_max",
      "parking_slots_min",
      "parking_slots_max",
    ].forEach((item) => {
      url.searchParams.delete(item);
    });

    window.history.pushState(
      { ...window.history.state, as: url.href, url: url.href },
      "",
      url.href
    );

    selectInputRef1.current.clearValue();
    selectInputRef2.current.clearValue();
    selectInputRef3.current.clearValue();
    selectInputRef4.current.clearValue();

    setAskingPrice([0, hookData?.price_per_m2]);
    setHeight([0, hookData?.height]);
    setDocks([0, hookData?.docks]);
    setRamps([0, hookData?.ramps]);
    setOfficeArea([0, hookData?.office_area]);
    setYearRent([0, hookData?.minimum_years_to_rent]);
    setParkingSlots([0, hookData?.no_of_parking_slot]);
  };

  const handleResetResponse = () => {
    var url = new URL(window.location.href);

    [
      "buy_or_rent",
      "expansion_possible",
      "extra_power",
      "air_condition",
      "asking_price_min",
      "asking_price_max",
      "min_height",
      "max_height",
      "no_of_docks_min",
      "no_of_docks_max",
      "no_of_ramps_min",
      "no_of_ramps_max",
      "office_area_min",
      "office_area_max",
      "year_to_rent_min",
      "year_to_rent_max",
      "parking_slots_min",
      "parking_slots_max",
    ].forEach((item) => {
      url.searchParams.delete(item);
    });

    window.history.pushState(
      { ...window.history.state, as: url.href, url: url.href },
      "",
      url.href
    );
    setBuy("");
    setExpansionPossible("");
    setElectricity("");
    setAirCondition("");
    setSquareMeter("");
    setAskingPrice([0, hookData?.price_per_m2]);
    setHeight([0, hookData?.height]);
    setDocks([0, hookData?.docks]);
    setRamps([0, hookData?.ramps]);
    setOfficeArea([0, hookData?.office_area]);
    setYearRent([0, hookData?.minimum_years_to_rent]);
    setParkingSlots([0, hookData?.no_of_parking_slot]);
  };

  return {
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
    airCondition,
    setAirCondition,
    parkingSlots,
    setParkingSlots,
    expansionPossible,
    setExpansionPossible,
    electricityList,
    airConditionList,
    selectInputRef1,
    selectInputRef2,
    selectInputRef3,
    selectInputRef4,
    handleReset,
    activeSortList,
    setActiveSortList,

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
  };
};
