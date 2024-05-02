import Link from "next/link";
import Image from "next/image";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Icon from "../Layout/Icons";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { useWindowSize } from "../../logic/useDimension";
import Style from "./ContactForm.module.scss";
import { useRef, useState } from "react";
import * as Yup from "yup";
import Animate from "../Animate/Animate";
import { useFormik } from "formik";
import { postContent } from "../../../lib/pages";
import toast from "react-hot-toast";

const ContactForm = ({ props }) => {
  const { width } = useWindowSize();
  const selectCountryRef = useRef(null);
  const formRef = useRef(null);

  // const [show, setShow] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [defaultCountry, setDefaultCountry] = useState(["us"]);
  // const handleClose = () => setShow(false);

  const handleFocus = () => {
    const inputField = formRef.current.querySelectorAll(
      '.form-control[value=""]'
    );
    inputField[0]?.focus();
  };

  const phoneRegExp = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const nameRegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  const formik = useFormik({
    initialValues: {
      company_name: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    },

    validationSchema: Yup.object({
      company_name: Yup.string()
        .required("Company name is required")
        .matches(nameRegExp, "Please enter valid name"),
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
      message: Yup.string()  
      .required("Message is required")
    }),
    onSubmit: (values, { resetForm }) => {
      if (!loading) {
        setLoading(true);
        let obj = {
          company_name: values.company_name,
          name: values.name,
          email: values.email,
          phone: countryCode + values.phone,
          message: values.message,
        };

        // postContent("contact-us/main/save", obj).then((response) => {
        //   if (response?.status == 200) {
        //     selectCountryRef?.current?.setValue([], "clear");
        //     toast.success("Thank you for submission", {
        //       position: "bottom-right",
        //     });
        //     setDefaultCountry(["us"]);
        //     submitForm(resetForm);
        //     // setShow(true);
        //   }
        // });

        postContent("contact-us/main/save", obj).then((response) => {
          if (response?.status == 200) {
            selectCountryRef?.current?.setValue([], "clear");
            toast.success("Thank you for submission", {
                   position: "bottom-right",
                 });
            setDefaultCountry(["us"]);
            submitForm(resetForm);
        
            const formDataQueryString = new URLSearchParams(obj).toString();
            const currentUrlWithMessage = `${window.location.href}?form-submitted`;  
            window.history.pushState({}, '', currentUrlWithMessage);
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
  return (
    <Animate className={Style.mx_contact_form}>
      <div className="container">
        <div className="col-lg-auto">
          <div className="breadcrumb breadcrumb-light">
            <Link href={"/"} className="breadcrumb-item">
              Home
            </Link>
            <span className="breadcrumb-item active">Contact</span>
          </div>
        </div>
        <div className={Style.form_wrap}>
          <div className={`${Style.form_row} row`}>
            <div className={Style.col_left}>
              <div className={Style.form_img}>
                <div className="ratio">
                  <Image
                    src={props?.data?.image}
                    priority
                    fill
                    alt="contact_form"
                    quality={90}
                  />
                </div>
                <div
                  className={`${Style.movable_icon} ${Style.movable_icon_tel}`}
                >
                  <Image src={"/images/anim_contact/tel_icon.svg"} fill />
                </div>
                <div
                  className={`${Style.movable_icon} ${Style.movable_icon_map}`}
                >
                  <Image src={"/images/anim_contact/map_icon.png"} fill />
                  <div className={Style.map_point}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27.455"
                      height="39.069"
                      viewBox="0 0 27.455 39.069"
                    >
                      <g
                        id="Group_88197"
                        data-name="Group 88197"
                        transform="translate(-337.61 -13.811)"
                      >
                        <path
                          id="Path_114587"
                          data-name="Path 114587"
                          d="M290.4,20.681a8.448,8.448,0,1,0-8.448,8.448,8.448,8.448,0,0,0,8.448-8.448m-14.784,0a6.336,6.336,0,1,1,6.336,6.336,6.336,6.336,0,0,1-6.336-6.336"
                          transform="translate(69.392 6.858)"
                          fill="#007864"
                        />
                        <path
                          id="Path_114588"
                          data-name="Path 114588"
                          d="M282.993,47.49a1.056,1.056,0,0,0,1.7,0c.086-.119.487-.668,1.1-1.537l6.235-9.64c2.895-4.939,5.543-10.373,5.543-13.735a13.727,13.727,0,0,0-27.455,0c0,3.265,2.5,8.484,5.3,13.306L281.9,45.957c.609.866,1.008,1.415,1.094,1.533m.852-36.528a11.615,11.615,0,0,1,11.616,11.617c0,5.052-7.722,16.986-11.616,22.478-3.894-5.492-11.616-17.426-11.616-22.479a11.615,11.615,0,0,1,11.617-11.616"
                          transform="translate(67.494 4.961)"
                          fill="#007864"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div
                  className={`${Style.movable_icon} ${Style.movable_icon_msg}`}
                >
                  <Image src={"/images/anim_contact/msg_icon.svg"} fill />
                </div>
              </div>
              <div className={Style.contact_wrap}>
                <h2 className="h5">{props?.data?.title}</h2>
                <ul>
                  {props?.data?.phone && (
                    <li>
                      <a href={`tel:${props?.data?.phone}`}>
                        <span>
                          <Icon icon="phone" size={width >= 992 ? 26 : 19} />
                        </span>
                        <span className={Style.ph}>{props?.data?.phone}</span>
                      </a>
                    </li>
                  )}
                  {props?.data?.phone2 && (
                    <li>
                      <a href={`tel:${props?.data?.phone2}`}>
                        <span>
                          <Icon icon="phone" size={width >= 992 ? 26 : 19} />
                        </span>
                        <span className={Style.ph}>{props?.data?.phone2}</span>
                      </a>
                    </li>
                  )}
                  <li>
                    <a
                      href={`mailto:${props?.data?.email}`}
                      className={Style.link_phone}
                    >
                      <span>
                        <Icon icon="mail" size={width >= 992 ? 17 : 12} />
                      </span>
                      <span className={Style.ph}>{props?.data?.email}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={Style.col_right}>
              <h1 className="h2">Get in touch with us</h1>
              <div className={Style.form_wrapper}>
                <form
                  className="row"
                  onSubmit={formik.handleSubmit}
                  ref={formRef}
                >
                  <div className="col-lg-12">
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Company name"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Company name"
                        {...formik.getFieldProps("company_name")}
                      />
                      {formik.errors.company_name &&
                      formik.touched.company_name ? (
                        <div className="error">
                          {formik.errors.company_name}
                        </div>
                      ) : null}
                    </FloatingLabel>
                  </div>

                  <div className="col-12">
                    <FloatingLabel controlId="floatingInputGrid" label="Name">
                      <Form.Control
                        type="text"
                        placeholder="Name"
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
                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Message"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Message"
                        value={formik.values.message}
                        onChange={(e) => {
                          formik.handleChange(e);
                        }}
                        name="message"
                      />
                        {formik.errors.message && formik.touched.message ? (
                        <div className="error">{formik.errors.message}</div>
                      ) : null}
                    </FloatingLabel>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="button"
                      onClick={handleFocus}
                    >
                      <span>Send</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className={`${Style.contact_wrap} ${Style.contact_wrap_mob}`}>
              <h2 className="h5">{props?.data?.title}</h2>
              <ul>
                <li>
                  <a href={`tel:${props?.data?.phone}`}>
                    <span>
                      <Icon icon="phone" size={width >= 992 ? 26 : 19} />
                    </span>
                    {props?.data?.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${props?.data?.email}`}
                    className={Style.link_phone}
                  >
                    <span>
                      <Icon icon="mail" size={width >= 992 ? 17 : 12} />
                    </span>
                    {props?.data?.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Animate>
  );
};
export default ContactForm;
