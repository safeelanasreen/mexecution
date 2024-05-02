import { useEffect, useRef, useState } from "react";
import { getPageContent } from "../../../lib/pages";
import useDebounce from "../../logic/useDebounce";

export const useSupplierMap = (props) => {
  const [selectedOption, setSelectedOption] = useState({});
  const [dataTable, setDataTable] = useState(props?.data?.results);
  const [active, setActive] = useState("0");
  const [count, setCount] = useState(props?.data?.count);
  const [offSet, setOffSet] = useState(0);
  const [status, setStatus] = useState("idle");

  const [selectedOption1, setSelectedOption1] = useState(null);

  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [tier, setTier] = useState("");
  const [subTier, setsubTier] = useState("");
  const [show, setShow] = useState(false);
  const [activeData, setActiveData] = useState("");
  const [modalData, setModalData] = useState("");
  let tierCat = [];
  let tierSubCat = [];
  const handleShowDetail = (i) => {
    setActiveData(props?.data?.states?.filter((item) => item.id == i)?.[0]?.id);
  };

  const handleClose = () => {
    setShow(false);
    setModalData("");
  };
  const handleShow = () => setShow(true);
  // useEffect(()=>{
  //   setTimeout(() => {
  //     setShow(true);
  //   }, 1000);
  // },[])

  const debouncedSearchTerm = useDebounce(searchTerm, 700);

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleChange(debouncedSearchTerm, "search");
    }
  }, [debouncedSearchTerm]);

  const handleClick = async (id) => {
    await getPageContent(`supplier/company?company_id=${id}`)
      .then((res) => {
        setShow(true);
        setModalData(res);
      })
      .catch(() => {});
  };

  const handleChange = (value, type) => {
    if (type === "supplierList") {
      setActive(value);
    }
    setSelectedOption((prev) => {
      if (prev?.industries && prev?.tier && prev?.subTier && type === "industries") {
        getData({ ...prev, industries: value, tier: null, subTier: null });

        return {
          ...prev,
          tier: null,
          subTier: null,
          industries: value,
        };
      } else if (prev?.industries && prev?.tier && type === "industries") {
        getData({ ...prev, industries: value, tier: null, subTier: null });

        return {
          ...prev,
          tier: null,
          subTier: null,
          industries: value,
        };
      } else if (prev?.industries && prev?.tier && type === "tier") {
        getData({ ...prev, industries: prev?.industries, tier: value, subTier: null });

        return {
          ...prev,
          industries: prev?.industries,
          tier: value,
          subTier: null,
        };
      } else {
        getData({ ...selectedOption, [type]: value });
        return {
          ...prev,
          [type]: value,
        };
      }
    });
  };

  const supplierList = [
    { title: "All ", value: "0" },
    ...props?.data?.filter?.supplierOrDistributor,
  ];

  let loationList = props?.data?.filter?.location?.map((item) => ({
    label: item?.name,
    value: item?.id,
  }));
  let industries = props?.data?.filter?.industry?.map((item) => ({
    label: item?.title,
    value: item?.id,
  }));

  industries = [{ label: "All", value: "0" }, ...industries];

  loationList = [{ label: "All", value: "0" }, ...loationList];

  const websiteAvail = [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ];

  const getData = async (data) => {
    if (Object?.keys(data)?.length > 0) {
      setStatus("pending");

      await getPageContent(
        `supplier/filter?supplier_or_distributor=${data?.supplierList ?? ""}&industry=${
          data?.industries ?? ""
        }&tier=${data?.tier ?? ""}&subcategory=${data?.subTier ?? ""}&location=${
          data?.location ?? ""
        }&website_available=${data?.webavail ?? ""}&search_term=${data?.search ?? ""}&offset=${
          data?.loadMore == undefined || !data?.loadMore == false ? 0 : data?.loadMore
        }&limit=${500}`
      )
        .then((r) => {
          setStatus("success");
          setDataTable((state) =>
            r?.data?.length > 0 && data.loadMore ? [...state, ...r?.data] : r?.data
          );
          setCount(r?.count);
          setTier(r?.tier);
          setsubTier(r?.tier_sub_category);
        })
        .catch(() => {
          console.log("errror");
        });
    }
  };

  tierCat = tier?.length > 0 && [
    { label: "All", value: "0" },
    ...tier.map((item) => ({
      label: item?.title,
      value: item?.id,
    })),
  ];

  tierSubCat = subTier?.length > 0 && [
    { label: "All", value: "0" },
    ...subTier.map((item) => ({
      label: item?.title,
      value: item?.id,
    })),
  ];

  const handleReset = () => {
    setSelectedOption({});
    setActiveData("");
    setSelectedOption1(null);
    setSelectedOption2(null);

    setSelectedOption3(null);

    getData({});
    setTier("");
    setsubTier("");
    setActive("0");

    setDataTable(props?.data?.results);
    setCount(props?.data?.count);

    tierCat = [];
    tierSubCat = [];
  };

  return {
    count,
    offSet,
    modalData,
    supplierList,
    loationList,
    industries,
    websiteAvail,
    selectedOption,
    dataTable,
    active,
    searchTerm,
    tierCat,
    tierSubCat,
    show,
    activeData,
    selectedOption1,
    selectedOption2,
    selectedOption3,
    status,
    setOffSet,
    setSelectedOption1,
    setSelectedOption2,
    setSelectedOption3,
    setShow,
    handleReset,
    handleClick,
    handleClose,
    handleShow,
    handleChange,
    setSearchTerm,
    handleShowDetail,
  };
};
