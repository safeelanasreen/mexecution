import { useEffect, useRef, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Style from "./LocationContact.module.scss";
// import Select from 'react-select'
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import SearchableDropDown from "../utils/SearchableDropDown";
import * as Yup from "yup";
import Image from "next/image";
import { useFormik } from "formik";
import { postContent } from "../../../lib/pages";
import Select from "react-select";
import { useInView } from "react-intersection-observer";
import toast from "react-hot-toast";
import Link from "next/link";
import Assets from "../Layout/CommonLayout/assets";
import { useRouter,usePathname } from "next/navigation";

// import SuccessModal from "../utils/SuccessModal";

const style = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    // This line disable the blue border
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
    },
  }),
};

const LocationContact = ({ props }) => {
  const selectLocationRef = useRef(null);

  const router= useRouter();
  const pathname = usePathname();


  const parse = require("html-react-parser");

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [defaultCountry, setDefaultCountry] = useState(["us"]);

  const phoneRegExp = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const nameRegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .matches(nameRegExp, "Please enter valid name"),
      message: Yup.string().required("Message is required"),

      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required")
        .matches(emailRegex, "Please enter a valid email"),
      phone: Yup.string()
        .matches(phoneRegExp, "Please enter a valid phone number")
        .required("Please enter your phone number")
        .min(6, "Phone number must be greater than 6 digits ")
        .max(13, "Phone number must be less than 13 digits"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (!loading) {
        setLoading(true);

        let obj = {
          name: values.name,
          email: values.email,
          phone: countryCode + values.phone,
          message: values.message,
        };


        // const currentRoute = "locations";

        postContent("contact-us/save", obj).then((response) => {
          if (response?.status == 200) {
            selectLocationRef?.current?.setValue([], "clear");
            toast.success("Thank you for submission", {
              position: "bottom-right",
            });
            // setShow(true);
            submitForm(resetForm);
            setDefaultCountry(["us"]);

            const formDataQueryString = new URLSearchParams(obj).toString();

            // if(pathname?.includes("locations")){

              const currentUrlWithMessage = `${window.location.href}?form-submitted`;
  
              window.history.pushState({}, "", currentUrlWithMessage);
            // }

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
      // setShow(false);
    }, 3000);
  };

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

  const phoneNumber = props?.data?.whatsapp;
  const cleanedPhoneNumber = parseInt(phoneNumber?.replaceAll(/[-\s]+/g, ""));

  return (
    <section className={Style.mx_location_contact}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={`${Style.head_wrap}`}>
              <h2 className="h4">{parse(`${props?.data?.title}`)}</h2>
              <p>{parse(`${props?.data?.description}`)}</p>{" "}
            </div>
            <div className={Style.btn_meeting}>
 
              {props?.data?.button?.text && (
                <Link
                  className="d-block button"
                  href={props?.data?.button?.url}
                >
                  {props?.data?.button?.text}
                </Link>
              )}
            </div>

            <ul className={Style.contact_modes}>
              <li>
                <a
                  href={`https://api.whatsapp.com/send?phone=${cleanedPhoneNumber}`}
                  target="_blank"
                  className="d-block"
                >
                  <Image
                    src={Assets.modalwtsp}
                    priority
                    width={26}
                    height={26}
                    alt="whtasap-icon"
                  />
                  <span>Whatsapp</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${props?.data?.email}  `} className="d-block">
                  <Image
                    src={Assets.modalgmail}
                    priority
                    width={26}
                    height={26}
                    alt="whtasap-icon"
                  />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className={`${Style.contact_wrap} position-relative`}>
              <form className="row" onSubmit={formik.handleSubmit}>
                <div className="col-12">
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Full name"
                  >
                    <Form.Control
                      type="text"
                      id="firstname"
                      placeholder="Full Name"
                      {...formik.getFieldProps("name")}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <div className="error">{formik.errors.name}</div>
                    ) : null}
                  </FloatingLabel>
                </div>

                <div className="col-lg-6">
                  <FloatingLabel controlId="floatingInputGrid" label="Email">
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}
                  </FloatingLabel>
                </div>

                <div className="col-lg-6">
                  <FloatingLabel className="phonenumber">
                    <IntlTelInput
                      numberType=""
                      separateDialCode={true}
                      placeholder="Mobile number"
                      containerClassName="intl-tel-input w-100"
                      inputClassName="form-control"
                      preferredCountries={["us"]}
                      onPhoneNumberChange={handlePhone}
                      defaultCountry={defaultCountry}
                      onSelectFlag={onSelectFlag}
                      value={formik.values.phone}
                      onPhoneNumberBlur={(e) =>
                        formik.setFieldTouched("phone", true)
                      }
                      telInputProps={{ maxLength: 13 }}
                    />
                    {formik.errors.phone && formik.touched.phone ? (
                      <div className="error">{formik.errors.phone}</div>
                    ) : null}
                  </FloatingLabel>
                </div>

                <div className={`${Style.msg_area} col-12`}>
                  <FloatingLabel controlId="floatingTextarea2" label="Message">
                    <Form.Control
                      as="textarea"
                      placeholder="Message"
                      value={formik.values.message}
                      onChange={(e) => {
                        formik.handleChange(e);
                      }}
                      name="message"
                      {...formik.getFieldProps("message")}
                    />
                    {formik.errors.message && formik.touched.message ? (
                      <div className="error">{formik.errors.message}</div>
                    ) : null}
                  </FloatingLabel>
                </div>
                <div className="col-12">
                  <button type="submit" className="button ">
                    {loading ? "....." : <span>Write Us</span>}
                  </button>
                </div>

                {/* {formSubmitted && (
                  <span className="succeress_messagee"> Thank you for Submission</span>
                )} */}
                {/* {formSubmitted && (
                  <span className={`${Style.success_message}`}>
                    <div className={Style.success_icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11.188"
                        height="8.361"
                        viewBox="0 0 11.188 8.361"
                      >
                        <path
                          id="tick"
                          d="M12938.7,6317.932l-4.241-4.241,1.414-1.414,2.827,2.827,5.533-5.533,1.414,1.414Z"
                          transform="translate(-12934.454 -6309.571)"
                          fill="#fff"
                        />
                      </svg>
                    </div>{" "}
                    Thank you for submission
                  </span>
                )} */}
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* {show && <SuccessModal show={show} handleClose={handleClose} />
            } */}
      <div className={Style.mx_location_contact_bg}>
        <div className={Style.img}>
          <div className="ratio">
            <Image src={"/images/banner/loc_contact_bg_2.png"} fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;
