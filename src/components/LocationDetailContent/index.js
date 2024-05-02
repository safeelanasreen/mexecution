import { useWindowSize } from "../../logic/useDimension";
import Icon from "../Layout/Icons";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ScrollSpy from "react-ui-scrollspy";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./LocationDetailContent.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import IntlTelInput from "react-intl-tel-input";
import { useEffect, useState } from "react";
import { postContent } from "../../../lib/pages";
import axios from "axios";
import { saveAs } from "file-saver";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LocationDetailContent = ({ props }) => {
  const parse = require("html-react-parser");
  const [pdfFile, setPdfFile] = useState("");
  const router = useRouter();

  const { width } = useWindowSize();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [defaultCountry, setDefaultCountry] = useState(["us"]);


  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
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

        postContent("contact-us/asset/save", obj).then((response) => {
          if (response?.status == 200) {
            // toast.success("Thank you for submission", {
            //   position: "bottom-right",
           
            // });
     
            submitForm(resetForm);
            setDefaultCountry(["us"]);
            router.push('/thankyou');
            // setShow(true);

           
            // const formDataQueryString = new URLSearchParams(obj).toString();

            //   const currentUrlWithMessage = `${window.location.href}/thankyou`;
  
            //   window.history.pushState({}, "", currentUrlWithMessage);
          

          }
        });
      }
    },
  });
  const submitForm = (resetForm) => {
    resetForm();
    setLoading(false);
    setFormSubmitted(true);
    // setTimeout(() => {
    //   setFormSubmitted(false);
    //   // setShow(false);
    // }, 3000);
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

  useEffect(() => {
    if (props?.data?.id) {
      axios
        .get(`${process.env.MEXPANSION_BASE_URL}generate/pdf?id=${props?.data?.id}`)
        .then((response) => {
          let file = response?.data?.[0]?.url;
          setPdfFile(file);
        });
    }
  }, []);

  const handlePDF = () => {
    fetch(pdfFile)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "document.pdf");
      })
      .catch((error) => {
        // console.error("Error downloading the PDF:", error);
      });
  };
  return (
    <section className={Style.mx_detail_scrollspy}>
      <nav>
        <div className="container">
          <ul>
            <li>
              <a href="#first" data-to-scrollspy-id="first">
                Description
              </a>
            </li>
            <li>
              <a href="#second" data-to-scrollspy-id="second">
                Main details
              </a>
            </li>
            <li>
              <a href="#third" data-to-scrollspy-id="third">
                State facts
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {width >= 992 ? (
        ""
      ) : (
        <div className={`d-lg-none container ${Style.main_info}`}>
          {props?.data?.asset_type === "Gold" ? (
            <p className={Style.membership}>
              <span className={Style.gold_plan}>
                <Image src={"/images/icon/gold.svg"} fill />
              </span>
              Gold Asset
            </p>
          ) : props?.data?.asset_type === "Silver" ? (
            <p className={Style.membership}>
              <span className={Style.gold_plan}>
                <Image src={"/images/icon/silver.svg"} fill />
              </span>
              Silver Asset
            </p>
          ) : (
            ""
          )}

          <h1 className="h4">
            {props?.data?.title} <span>{props?.data?.mex_id}</span>
          </h1>
          <div className={Style.tag}>
            <div className={Style.tag_item}>
              <span>
                <Icon icon="warehouse_fill" className={Style.icon} />
              </span>
              {props?.data?.category}
            </div>
            <div className={Style.tag_item}>
              <span>
                <Icon icon="warehouse_alt" className={Style.icon} />
              </span>
              {props?.data?.area}
            </div>
            <div className={Style.tag_item}>
              <span>
                <Icon icon="plane_fill" className={Style.icon} />
              </span>
              Distance to Border: {props?.data?.distance?.airport}km
            </div>

            <div className={Style.tag_item}>
              <span>
                <Icon icon="area_fill" className={Style.icon} />
              </span>
              Distance to Highway: {props?.data?.distance?.us_border}km
            </div>
          </div>
        </div>
      )}

      <ScrollSpy>
        <div className={Style.content_wrap}>
          <div className="container">
            <div className={`row ${Style.row}`}>
              <div className="col-lg">
                <ScrollSpy>
                  {props?.data?.tabs?.description_widget?.description?.length > 0 && (
                    <div id="first" className={`${Style.content_item} ${Style.content_item_about}`}>
                      <h2 className={`h5 ${Style.head}`}>
                        {props?.data?.tabs?.description_widget?.title}
                      </h2>
                      {props?.data?.tabs?.description_widget?.description &&
                        parse(
                          !isReadMore
                            ? `${props?.data?.tabs?.description_widget?.description?.slice(
                                0,
                                500
                              )}${
                                props?.data?.tabs?.description_widget?.description?.length > 500
                                  ? "..."
                                  : ""
                              }`
                            : props?.data?.tabs?.description_widget?.description
                        )}

                      {props?.data?.tabs?.description_widget?.description?.length > 500 && (
                        <span onClick={toggleReadMore} className="btn btn-link link">
                          {`${isReadMore ? " Read Less" : "Read More"}`}
                          <span className="link-anim">
                            <Icon icon="arrow-right1" size={13} />
                          </span>
                        </span>
                      )}
                    </div>
                  )}

                  <div id="second" className={`${Style.content_item} ${Style.content_item_more}`}>
                    <div className={`${Style.row_more} row`}>
                      {props?.data?.tabs?.table_widget?.data?.map((item, i) => (
                        <div className={`${Style.common_table_wrap} col-xl-6`} key={i}>
                          <h2 className="h6">{item?.title}</h2>
                          <table className="table table-striped">
                            <tbody>
                              {item?.table?.map((data, key) => (
                                <tr key={key}>
                                  <th scope="row">{data?.label}</th>
                                  <td>{parse(`${data?.value}`)}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </div>
                    <div className={Style.file_download}>
                      <button onClick={() => handlePDF()} className={Style.file_download_icon}>
                        <Image src={Assets.icon_file} width={18} height={24} />
                        Download all details
                      </button>
                    </div>

                    <div className={Style.note}>
                      {parse(`${props?.data?.tabs?.table_widget?.note}`)}
                    </div>
                  </div>
                  {props?.data?.tabs?.distributor_widget?.distributor_title?.length > 0 && (
                    <div id="third" className={`${Style.content_item} ${Style.content_item_facts}`}>
                      <h2 className="h5">
                        {props?.data?.tabs?.distributor_widget?.distributor_title}
                      </h2>

                      <ul className={` list-star ${Style.list_star_col}`}>
                        {props?.data?.tabs?.distributor_widget?.data_distributor?.length > 0 &&
                          props?.data?.tabs?.distributor_widget?.data_distributor?.map(
                            (data, i) => (
                              <li className="row gx-0" key={i}>
                                <div className="col-lg-4">
                                  <h4 className={Style.h4}>{data?.title}</h4>
                                </div>
                                <div className="col-lg-8">
                                  <p>{parse(`${data?.description}`)}</p>
                                </div>
                              </li>
                            )
                          )}
                      </ul>
                    </div>
                  )}

                  <div id="third" className={`${Style.content_item} ${Style.content_item_facts}`}>
                    <h2 className={`h5 ${Style.head_third}`}>
                      {props?.data?.tabs?.facts_widget?.title}
                    </h2>

                    <ul className={`${Style.list_info} row row-cols-md-2 g-0`}>
                      {props?.data?.tabs?.facts_widget?.data?.length &&
                        props?.data?.tabs?.facts_widget?.data?.map((data, i) => (
                          <li key={i}>
                            <span>
                              <Image src={data?.image} fill alt="icon" />
                            </span>
                            {parse(`${data?.title}`)}
                          </li>
                        ))}
                    </ul>
                  </div>
                </ScrollSpy>
              </div>
              {width >= 992 ? (
                <div className="col-lg-auto">
                  <div className={Style.contact_card}>
                    <div className={Style.contact_card_head}>
                      <h3 className="h5">More info needed?</h3>
                      {props?.data?.tabs?.location_detail_form?.description && (
                        <p>{parse(`${props?.data?.tabs?.location_detail_form?.description}`)} </p>
                      )}
                      {props?.data?.tabs?.location_detail_form?.call_us?.title && (
                        <a
                          href={`tel:${props?.data?.tabs?.location_detail_form?.call_us?.url}`}
                          className="btn btn-outline-primary w-100"
                        >
                          {props?.data?.tabs?.location_detail_form?.call_us?.title}
                        </a>
                      )}
                    </div>
                    <div className={Style.contact_card_body}>
                      <h6 className="h6">Write us your queries </h6>

                      <form className={`${Style.row} row`} onSubmit={formik.handleSubmit}>
                        <FloatingLabel controlId="floatingInputGrid" label="Full name">
                          <Form.Control
                            type="text"
                            placeholder="Full name"
                            {...formik.getFieldProps("name")}
                          />
                          {formik.errors.name && formik.touched.name ? (
                            <div className="error">{formik.errors.name}</div>
                          ) : null}
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInputGrid" label="Email">
                          <Form.Control
                            type="email"
                            {...formik.getFieldProps("email")}
                            placeholder="name@example.com"
                          />
                          {formik.errors.email && formik.touched.email ? (
                            <div className="error">{formik.errors.email}</div>
                          ) : null}
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInputGrid" className="phonenumber">
                          <IntlTelInput
                            numberType=""
                            separateDialCode={true}
                            placeholder="Mobile Number"
                            containerClassName="intl-tel-input w-100"
                            inputClassName="form-control"
                            preferredCountries={["us"]}
                            onPhoneNumberChange={handlePhone}
                            defaultCountry={defaultCountry}
                            onSelectFlag={onSelectFlag}
                            value={formik.values.phone}
                            onPhoneNumberBlur={(e) => formik.setFieldTouched("phone", true)}
                            telInputProps={{ maxLength: 13 }}
                          />
                          {formik.errors.phone && formik.touched.phone ? (
                            <div className="error">{formik.errors.phone}</div>
                          ) : null}
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingTextarea2" label="Message">
                          <Form.Control
                            as="textarea"
                            placeholder="Message"
                            style={{ height: "120px" }}
                            {...formik.getFieldProps("message")}
                            onChange={(e) => {
                              formik.handleChange(e);
                            }}
                            name="message"
                          />
                          {formik.errors.message && formik.touched.message ? (
                            <div className="error">{formik.errors.message}</div>
                          ) : null}
                        </FloatingLabel>

                        <div className="col-12 text-lg-end">
                          <button type="submit" className="btn btn-primary w-100">
                            {loading ? "...." : "Send"}
                          </button>
                        </div>
                      </form>
                      {/* {formSubmitted && (
                        // <span className="success_message"> Thank you for submission</span>
                        <ThankyouPage/>
                        
                      )} */}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {/* {show && <SuccessModal show={show} handleClose={handleClose} />} */}
        {/* <div id="fourth">
          <LocationBrands />
          <LocationManufacture />
        </div> */}
      </ScrollSpy>
      {width <= 992 ? (
        <div className="container">
          <div className="col-lg-auto">
            <div className={Style.contact_card}>
              <div className={Style.contact_card_head}>
                <h3 className="h5">More info needed?</h3>
                {props?.data?.tabs?.location_detail_form?.description && (
                  <p>{parse(`${props?.data?.tabs?.location_detail_form?.description}`)} </p>
                )}
                {props?.data?.tabs?.location_detail_form?.call_us?.title && (
                  <a
                    href={`tel:${props?.data?.tabs?.location_detail_form?.call_us?.url}`}
                    className="btn btn-outline-primary w-100"
                  >
                    {props?.data?.tabs?.location_detail_form?.call_us?.title}
                  </a>
                )}
              </div>
              <div className={Style.contact_card_body}>
                <h6 className="h6">Write us your queries </h6>

                <form className={`${Style.row} row`} onSubmit={formik.handleSubmit}>
                  <FloatingLabel controlId="floatingInputGrid" label="Full name">
                    <Form.Control
                      type="text"
                      placeholder="Full name"
                      {...formik.getFieldProps("name")}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <div className="error">{formik.errors.name}</div>
                    ) : null}
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingInputGrid" label="Email">
                    <Form.Control
                      type="email"
                      {...formik.getFieldProps("email")}
                      placeholder="name@example.com"
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingInputGrid" className="phonenumber">
                    <IntlTelInput
                      numberType=""
                      separateDialCode={true}
                      placeholder="Mobile Number"
                      containerClassName="intl-tel-input w-100"
                      inputClassName="form-control"
                      preferredCountries={["us"]}
                      onPhoneNumberChange={handlePhone}
                      defaultCountry={defaultCountry}
                      onSelectFlag={onSelectFlag}
                      value={formik.values.phone}
                      onPhoneNumberBlur={(e) => formik.setFieldTouched("phone", true)}
                      telInputProps={{ maxLength: 13 }}
                    />
                    {formik.errors.phone && formik.touched.phone ? (
                      <div className="error">{formik.errors.phone}</div>
                    ) : null}
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingTextarea2" label="Message">
                    <Form.Control
                      as="textarea"
                      placeholder="Message"
                      style={{ height: "100px" }}
                      {...formik.getFieldProps("message")}
                      onChange={(e) => {
                        formik.handleChange(e);
                      }}
                      name="message"
                    />
                    {formik.errors.message && formik.touched.message ? (
                      <div className="error">{formik.errors.message}</div>
                    ) : null}
                  </FloatingLabel>

                  <div className="col-12 text-lg-end">
                    <button type="submit" className="btn btn-primary w-100">
                      {loading ? "...." : "Send"}
                    </button>
                  </div>
                </form>
                {/* {formSubmitted && (
                        // <span className="success_message"> Thank you for submission</span>
                        <ThankyouPage/>

                      )} */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default LocationDetailContent;
