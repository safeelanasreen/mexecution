"use client";
import React from "react";
import Select from "react-select";
import style from "./searchableDropDown.module.scss";
const SearchableDropDown = (props) => {
  return (
    <>
      <Select
        className={`${style.select_wrap}  ${
          props?.theme === "secndry" ? style.border_primary : ""
        } form-control`}
        classNamePrefix="custom-select"
        {...props}
      />
    </>
  );
};

export default SearchableDropDown;
