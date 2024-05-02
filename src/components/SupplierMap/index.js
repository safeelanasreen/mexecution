import Image from "next/image";
import Style from "./SupplierMap.module.scss";
import MapMexico from "./MapMexico";
import LocatePin from "../utils/LocatePin";
import { useWindowSize } from "../../logic/useDimension";
import Animate from "../Animate";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import Accordion from "react-bootstrap/Accordion";
import { useSupplierMap } from "./useSupplierMap";
import SupplierForm from "./SupplierForm";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import AssetModal from "../utils/AssetModal";

const SupplierMap = ({ props }) => {
  const { width } = useWindowSize();
  const {
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
  } = useSupplierMap(props);

  return (
    <>
    <Animate as="section" className={Style.mx_location_sec}>
      <div className="container">
        <div className={`${Style.title_bar}`}>
          <div className={`${Style.title_head}`}>
            <h2 className="h3 text-white">{props?.data?.title}</h2>
            <p className="text-white mb-0">{props?.data?.sub_title}</p>
          </div>

          <div className={`${Style.search_bar}`}>
            <Form.Control
              placeholder="e.g. Semiconductor"
              className="search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setOffSet(0);
                setSearchTerm(e?.target?.value);
              }}
            />
          </div>
        </div>

        <div className={`${Style.filter_bar}`}>
          <h3 className="h3 text-white">What are you looking for?</h3>
          <div className={`${Style.filter_bar_row} row`}>
            <div className="col-auto p-0">
              <div className={Style.btn_group}>
                {supplierList?.map((item, i) => (
                  <button
                    className={`${Style.btn} ${active === item?.value ? Style?.activeList : ""}`}
                    key={i}
                    onClick={() => {
                      setOffSet(0);
                      handleChange(item?.value, "supplierList");
                    }}
                  >
                    {item?.title}
                  </button>
                ))}
              </div>
            </div>

            <div className={`${Style.area_select} ${Style.industry_select} col-xl-auto p-0`}>
              <Select
                id="value1"
                value={selectedOption1}
                className="custom-select-wrap s"
                classNamePrefix="custom-select"
                placeholder="Industry"
                options={industries}
                onChange={(e) => {
                  setSelectedOption1(e);
                  setOffSet(0);
                  handleChange(e?.value, "industries");
                }}
                isSearchable={false}
              ></Select>
            </div>
            {tierCat?.length > 0 ? (
              <div
                className={`${Style.area_select} col-xl-auto p-0 ${
                  tierCat?.length > 0 ? Style.visible : ""
                }`}
              >
                <Select
                  id="value2"
                  options={tierCat && tierCat}
                  className="custom-select-wrap"
                  classNamePrefix="custom-select"
                  placeholder="Sub Filter"
                  onChange={(e) => {
                    setOffSet(0);
                    handleChange(e?.value, "tier");
                  }}
                  isSearchable={false}
                ></Select>
              </div>
            ) : (
              ""
            )}
            {tierSubCat?.length > 0 ? (
              <div
                className={`${Style.area_select}  ${
                  tierSubCat?.length > 0 ? Style.visible : ""
                } col-xl-auto p-0`}
              >
                <Select
                  id="value2"
                  options={tierSubCat && tierSubCat}
                  className="custom-select-wrap "
                  classNamePrefix="custom-select"
                  placeholder="Sub Filter 1"
                  onChange={(e) => {
                    setOffSet(0);
                    handleChange(e?.value, "subTier");
                  }}
                  isSearchable={false}
                ></Select>
              </div>
            ) : (
              ""
            )}

            <div className={`${Style.area_select} col-xl-auto p-0`}>
              <Select
                id="value2"
                className="custom-select-wrap"
                classNamePrefix="custom-select"
                placeholder="Location"
                options={loationList}
                value={selectedOption2}
                onChange={(e) => {
                  setSelectedOption2(e);
                  setOffSet(0);

                  handleChange(e?.value, "location");
                  handleShowDetail(e?.value);
                }}
                isSearchable={false}
              ></Select>
            </div>

            <div className={`${Style.area_select} col-xl-auto p-0`}>
              <Select
                id="value2"
                value={selectedOption3}
                className="custom-select-wrap availability"
                classNamePrefix="custom-select"
                placeholder="Website avaliable"
                // menuIsOpen={true}
                options={websiteAvail}
                onChange={(e) => {
                  setSelectedOption3(e);
                  setOffSet(0);
                  handleChange(e?.value, "webavail");
                }}
                isSearchable={false}
              ></Select>
            </div>
            {width >= 992 ? (
              Object.keys(selectedOption).length !== 0 ? (
                <button
                  className={`${Style.reset_btn} ${Style.reset_btn_desk}`}
                  onClick={handleReset}
                >
                  Reset
                </button>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>

          {width < 992 ? (
            Object.keys(selectedOption).length !== 0 ? (
              <button className={`${Style.reset_btn} ${Style.reset_btn_mob}`} onClick={handleReset}>
                Reset
              </button>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>

        <span className={Style.map_results}>
          {count === 0 ? `No Results Found` : `${count}  Results Found`}
        </span>
        <div className={`${Style.map_row} row`}>
          {width >= 992 ? (
            <div className={`${Style.col_left} col-6`}>
              <p className={Style.click_detail}>
                To know more details <span>click on</span> company ID / Explore More
              </p>
              <div
                className={`${Style.table_container} ${
                  dataTable?.length === 0 ? Style.table_no_scroll : ""
                } `}
              >
                <div className={`${Style.table_wrap} `}>
                  <table>
                    <tbody>
                      <tr>
                        <td>Company ID</td>
                        <td>Company Name</td>
                        <td>Industry</td>
                        <td>Zipcode</td>
                        <td>Description</td>
                      </tr>
                      {dataTable?.length !== 0 ? (
                        status === "pending" ? (
                          <div className={Style.loading}>
                            <span class={Style.loading_dot}></span>
                            <span class={Style.loading_dot}></span>
                            <span class={Style.loading_dot}></span>
                          </div>
                        ) : (
                          dataTable?.map((item, i) => {
                            return (
                              <tr key={i} onClick={() => handleClick(item?.id)} className="tr">
                                <td className={Style.company_id}>
                                  {item?.id}
                                  <span className="clickhere">Click here</span>
                                </td>
                                <td className="company_name">{item?.dummy_text}</td>
                                <td>{item?.industry?.title}</td>
                                <td>{item?.zipcode}</td>
                                <td>{`${item?.description?.slice(0, 30)}...`}</td>
                              </tr>
                            );
                          })
                        )
                      ) : (
                        <tr className={Style.no_supplr_data}>
                          <td colspan="5">
                            <p className="mb-0">
                              Sorry no results, Contact us and we are glad to investigate{" "}
                              <button
                                className={Style.no_supplr_data_btn}
                                onClick={() => setShow(true)}
                              >
                                your request!
                              </button>
                            </p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  {count > dataTable?.length && status !== "pending" && (
                    <div className={`${Style.link_wrap} text-center`}>
                      <button
                        as="button"
                        onClick={() => {
                          setOffSet(offSet + 500);
                          handleChange(offSet + 500, "loadMore");
                        }}
                        className="btn btn-link button"
                      >
                        Load More
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <button className={`${Style.table_btn} btn text-black`} onClick={handleShow}>
                Explore More
              </button>
              <p className={`${Style.data_disc} text-white mb-0`}>{props?.data?.bottom_text}</p>
            </div>
          ) : (
            ""
          )}
          <div className={`${Style.col_right} col-xl-6`}>
            <div
              className={`${Style.map_wrap} ${Style.inview} d-none d-sm-block`}
              style={{
                "--theme-port": "#03A9F4",
                "--theme-distribution": "#E8BE4D",
                "--theme-manufacture": "#AF1D2D",
              }}
            >
              <div className={Style.map_base}>
                <MapMexico />
                {props?.data?.states?.map((item, i) => {
                  return (
                    <LocatePin
                      item={item}
                      key={i}
                      category={item?.category}
                      city={item?.city}
                      style={{
                        top: `${item?.position?.top}%`,
                        left: `${item?.position?.left}%`,
                      }}
                      className={`
                        ${
                          i == props?.data?.states?.findIndex((item) => item?.id === activeData)
                            ? "active"
                            : ""
                        } `}
                    />
                  );
                })}

                <Image
                  // src={Assets.map_base}
                  src={"/images/map_base_usa.svg"}
                  fill
                  alt={"map base"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={Style.map_mexico}>
                  <Image
                    // src={Assets.map_mexico}
                    src={"/images/map_mexico_alt.svg"}
                    fill
                    alt={"map decor"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {width <= 991.98 ? (
          <div className={`${Style.map_location_accordion} row`}>
            <p className={Style.click_detail}>
              To know more details <span>click on</span> company Name
            </p>

            <div className="supplier_accordion">
              <div className={`${Style.accordion_title} `}>
                <h4 className="h4 text-white mb-0">Company ID</h4>
              </div>
              <Accordion
                className={`${Style.accordian_round} accordion-rounded`}
                defaultActiveKey="0"
              >
                {dataTable?.length > 0 ? (
                  dataTable?.map((item, i) => {
                    return (
                      <Accordion.Item eventKey={i} key={i}>
                        <Accordion.Header>
                          Company ID <span className={Style.id}>{item?.id} </span>{" "}
                          <span
                            className={Style.id_more_info}
                            onClick={() => handleClick(item?.id)}
                          >
                            *More info
                          </span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div
                            className={`${Style.supplier_row} row`}
                            onClick={() => handleClick(item?.id)}
                          >
                            <div className={`${Style.supplier_detail} col-12`}>
                              <div className="row">
                                <div className={`${Style.category} col-7 `}>Company Name</div>
                                <span>:</span>
                                <div className={`${Style.info} ${Style.company_name}  col-5`}>
                                  {item?.dummy_text}
                                </div>
                              </div>
                            </div>
                            <div className={`${Style.supplier_detail} col-12`}>
                              <div className="row">
                                <div className={`${Style.category} col-7`}>Industry</div>
                                <span>:</span>
                                <div className={`${Style.info} col-5`}>{item?.industry?.title}</div>
                              </div>
                            </div>

                            <div className={`${Style.supplier_detail} col-12`}>
                              <div className="row">
                                <div className={`${Style.category} col-7`}>Zipcode</div>
                                <span>:</span>
                                <div className={`${Style.info} col-5`}>{item?.zipcode}</div>
                              </div>
                            </div>
                            <div
                              className={`${Style.supplier_detail} ${Style.supplier_description} col-12`}
                            >
                              {/* <div className="row">
                                <div className={`${Style.category} col-7`}>Description</div>
                                <span>:</span>
                                <div className={`${Style.info} col-5`}>{item?.description}</div>
                              </div> */}
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })
                ) : (
                  <p className={`${Style.supplier_no_data} mb-0`}>
                    Sorry no results, Contact us and we are glad to investigate{" "}
                    <button className={Style.no_supplr_data_btn} onClick={() => setShow(true)}>
                      your request!
                    </button>
                  </p>
                )}
              </Accordion>
              <button className={`${Style.table_btn} btn text-black`} onClick={handleShow}>
                Explore More
              </button>
              <p className={`${Style.data_disc} text-white mb-0`}>{props?.data?.bottom_text}</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <SupplierForm
        show={show}
        handleClose={handleClose}
        loationList={loationList}
        modalData={modalData}
        props={props?.data?.popup}
        selectedOption={selectedOption}
        setShow={setShow}
      />

      <div className={Style.mex_strip}>
        <div className={Style.img}>
          <div className="ratio">
            <Image src={"/images/mex-strip.svg"} fill alt="mex-strip" />
          </div>
        </div>
      </div>
    </Animate>
    <AssetModal props={props}/>
    </>
  );
};

export default SupplierMap;
