import { useState } from "react";

export const useHomePartner = (props) => {
  const [category, setCategory] = useState([]);
  const [active, setActive] = useState("");
  const [init, setInit] = useState(false);

  const categoryList = [{ name: "All" }, ...props?.data?.category];

  const partnersList = (name) => {
    if (name == "All") {
      setCategory(props?.data?.partners);
      setActive("All");
    } else {
      const filterPArtner = props?.data?.partners?.filter((item) => item?.category == name);
      setCategory(filterPArtner);
      setActive(name);
    }
  };

  return {
    category,
    active,
    categoryList,
    init,
    partnersList,
    setInit,
  };
};
