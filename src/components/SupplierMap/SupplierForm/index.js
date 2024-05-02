import { FloatingLabel, Form, Modal } from "react-bootstrap";
import Style from "../SupplierMap.module.scss";
import Assets from "../../Layout/CommonLayout/assets";
import Select from "react-select";
import useSupplierForm from "./useSupplierForm";
import IntlTelInput from "react-intl-tel-input";
import Image from "next/image";
import Icon from "../../Layout/Icons";
import { useWindowSize } from "../../../logic/useDimension";
import Link from "next/link";
const SupplierForm = ({
  show,
  setShow,
  modalData,
  handleClose,
  loationList,
  props,
  selectedOption,
}) => {
  const {
    formik,
    formRef,
    country,
    defaultCountry,
    selectLocationRef,
    handlePhone,
    handleFocus,
    onSelectFlag,
  } = useSupplierForm({ selectedOption, modalData, setShow });
  const parse = require("html-react-parser");

  const { width } = useWindowSize();

  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          handleClose();
          formik.resetForm();
        }}
        centered
        className={` background-white  modal_centered methodology-modal ${Style.methodology_modal}`}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4 className={Style.modal_main_title}>{props?.popup_title}</h4>
          <div className={`${Style.methodology_modal_content} d-flex flex-column flex-lg-row `}>
            <div className={Style.left_content}>
              {modalData ? (
                <div>
                  <table border={1}>
                    <tbody>
                      <tr>
                        <th>Company ID</th>
                        <td>{modalData?.id}</td>
                      </tr>
                      <tr>
                        <th>Company Name</th>
                        <td className={`${Style.company_name} data-blur`}>
                          {modalData?.company_name}
                        </td>
                      </tr>
                      <tr>
                        <th>Industry</th>
                        <td>{modalData?.industry?.title}</td>
                      </tr>
                      <tr>
                        <th>Zipcode</th>
                        <td>{modalData?.zipcode}</td>
                      </tr>
                      <tr>
                        <th>Description</th>

                        <td>{modalData?.description}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className={`${Style.left_top} d-flex flex-column justify-content-lg-between`}>
                  <div className={Style.img_top}>
                    <div className="ratio">
                      <Image src={props?.first_logo} fill alt="top-img" />
                    </div>
                  </div>
                  <div className={Style.img_btm}>
                    <div className="ratio">
                      <Image src={props?.second_logo} fill alt="top-img" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={Style.right_content}>
              <ul>
                {props?.text?.map((item, i) => (
                  <li key={i}>
                    <div className={Style.count}>{i + 1}</div>
                    <div className={Style.content}>
                      <h5 className={Style.content_ttl}>{item?.title} </h5>
                      <p className="mb-0">{item?.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className={`${Style.left_bottom} d-flex flex-column flex-md-row`}>
                <div className={Style.profile_info}>
                  <div className={Style.profile_img}>
                    <figure className="mb-0 ratio">
                      <Image src={props?.image} fill alt="image" />
                    </figure>
                  </div>
                </div>
                <div className={Style.contact_info}>
                  <dl className="d2 mb-3">
                    <dt className="h4 text-black">{props?.name}</dt>
                    <dd className="text-black list-star mb-0">Founder Mexecution LLC</dd>
                  </dl>
                  <ul>
                    <li>
                      <a href={`tel:${props?.owner_phone}`}>
                        <span>
                          <Icon icon="phone" size={width >= 992 ? 20 : 19} />
                        </span>
                        <span className={Style.ph} href>
                          {props?.owner_phone}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${props?.owner_mail}`} className={Style.link_phone}>
                        <span>
                          <Icon icon="mail" size={width >= 992 ? 20 : 19} />
                        </span>
                        <span className={Style.ph}>{props?.owner_mail}</span>
                      </a>
                    </li>
                  </ul>

                  <Link className="btn btn-primary" href={props?.button?.url}>
                    {props?.button?.title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SupplierForm;
