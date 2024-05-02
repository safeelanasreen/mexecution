import * as Yup from "yup";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { postContent } from "../../../../lib/pages";
import { useRef, useState } from "react";
import country from "../../../constants/country.json";

const useSupplierForm = ({ selectedOption, modalData, setShow }) => {
  const formRef = useRef(null);
  const selectLocationRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [defaultCountry, setDefaultCountry] = useState(["us"]);
  const [countryCode, setCountryCode] = useState("+1");

  const handlePhone = (status, phoneNumber, country) => {
    setCountryCode(country?.dialCode);
    if (/^\d+$/.test(phoneNumber) || phoneNumber == "") {
      formik.setFieldValue("phone", phoneNumber);
      if (Object.keys(country)?.length === 0) {
        setCountryCode("1");
      }
    }
  };
  const onSelectFlag = (currentNumber, countryData, fullNumber) => {
    setCountryCode(countryData.dialCode);
  };

  if (formSubmitted) {
    const telInput = document.querySelector(".selected-dial-code");
    if (telInput) {
      telInput.textContent = "+1";
    }
  }

  const handleFocus = () => {
    const inputField = formRef.current.querySelectorAll('.form-control[value=""]');
    inputField[0]?.focus();
  };

  const phoneRegExp = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const nameRegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .matches(nameRegExp, "Please enter valid name"),
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required")
        .matches(emailRegex, "Please enter a valid email"),
      phone: Yup.string()
        .matches(phoneRegExp, "Please enter a valid phone number")
        .required("Please enter your mobile number")
        .min(6, "Phone number must be greater than 6 digits ")
        .max(13, "Phone number must be less than 13 digits"),
      location: Yup.string().required("Location is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (!loading) {
        setLoading(true);
        let obj = {
          name: values.name,
          email: values.email,
          phone: countryCode + values.phone,
          message: values.message,
          location: values.location,

          id: modalData?.id ?? "",
          supplier_or_distributor_param: selectedOption?.supplierList ?? "",
          industry_param: selectedOption?.industries ?? "",
          tier_param: selectedOption?.tier ?? "",
          subtier_param: selectedOption?.subTier ?? "",

          location_param: selectedOption?.location ?? "",
          website_available_param: selectedOption?.webavail ?? "",
          search_param: selectedOption?.search ?? "",
          filter_param: Object?.keys(selectedOption)?.length > 0 ? true : false,
        };

        postContent("save/form", obj).then((response) => {
          if (response?.status == 200) {
            toast.success("Thank you for submission", {
              position: "bottom-right",
            });
            selectLocationRef.current.setValue([], "clear");
            setDefaultCountry(["us"]);
            submitForm(resetForm);
          } else {
            toast.error("Something went wrong", {
              position: "bottom-right",
            });
          }
        });
      }
    },
  });

  const submitForm = (resetForm) => {
    resetForm();
    setLoading(false);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShow(false);
    }, 3000);
  };

  return {
    formik,
    formRef,
    country,
    defaultCountry,
    selectLocationRef,
    handlePhone,
    handleFocus,
    onSelectFlag,
  };
};

export default useSupplierForm;
