import Link from "next/link";
import Style from "./StyleGuide.module.scss";
const StyleGuide = (props) => {

  const menu = ` const mapData = [
    {
      id: "1",
      city: "monterrey",
      state: "",
      category: "ports",
      position: {
        top: "22%",
        left: "23%"
      },
      description: "Mexico is with its competitive salaries, educated workforce, 50 international trade agreements and tax advantage the perfect spot to set up your Production or market your products to The whole continent of America. ",
      stats: [
        {
          count: "05",
          title: "Production &  Warehouses"
        }, {
          count: "07",
          title: "Million Habitants"
        }, {
          count: "06",
          title: "Distributors"
        },
      ],
      companies: [
        {
          title: "Nestle",
          img: Assets.brand1
        }, {
          title: "LG",
          img: Assets.brand3
        }, {
          title: "Toyota",
          img: Assets.brand2
        },
      ]
    }, {
      id: "2",
      city: "monterrey1",
      state: "",
      category: "Distribution Center",
      position: {
        top: "48%",
        left: "38%"
      },
      description: "Mexico is with its competitive salaries, educated workforce, 50 international trade agreements and tax advantage the perfect spot to set up your Production or market your products to The whole continent of America. ",
      stats: [
        {
          count: "05",
          title: "Production &  Warehouses"
        }, {
          count: "07",
          title: "Million Habitants"
        }, {
          count: "06",
          title: "Distributors"
        },
      ],
      companies: [
        {
          title: "Nestle",
          img: Assets.brand1
        }, {
          title: "LG",
          img: Assets.brand3
        }, {
          title: "Toyota",
          img: Assets.brand2
        },
      ]
    }, {
      id: "3",
      city: "monterrey2",
      state: "",
      category: "Manufacturing & Warehouses",
      position: {
        top: "50%",
        left: "45%"
      },
      description: "Mexico is with its competitive salaries, educated workforce, 50 international trade agreements and tax advantage the perfect spot to set up your Production or market your products to The whole continent of America. ",
      stats: [
        {
          count: "05",
          title: "Production &  Warehouses"
        }, {
          count: "07",
          title: "Million Habitants"
        }, {
          count: "06",
          title: "Distributors"
        },
      ],
      companies: [
        {
          title: "Nestle",
          img: Assets.brand1
        }, {
          title: "LG",
          img: Assets.brand3
        }, {
          title: "Toyota",
          img: Assets.brand2
        },
      ]
    },
  ]`

  const links = [{
    title: "Home",
    link: "/"
  }, {
    title: "Service",
    link: "/service"
  }, {
    title: "locations",
    link: "/locations"
  }, {
    title: "location-detail",
    link: "/location-detail"
  }, {
    title: "feasibility",
    link: "/feasibility"
  },
  {
    title: "blogs",
    link: "/blogs"
  }, {
    title: "blogs-section",
    link: "/blogsection"
  },
  {
    title: "industry-detail",
    link: "/industrydetail"
  },
  {
    title: "about",
    link: "/about"
  }, {
    title: "contact",
    link: "/contact"
  },
  {
    title: "service execute",
    link: "/execute-expansion"
  },
  {
    title: "why mexico",
    link: "/whymexico"
  },
  {
    title: "supplier",
    link: "/supplier"
  },
  {
    title: "404",
    link: "/404"
  },
  ]


  const buttons = [{
    class: "btn btn-primary"
  }, {
    class: "btn btn-outline-primary"
  },
  {
    class: "btn btn-secondary"
  }, {
    class: "btn btn-outline-secondary"
  },]


  let value
  let type
  const handleCopy = (e) => {
    type = e.target.getAttribute("data-type")
    if (e.target.getAttribute("data-type") == "button") {
      value = `<button className="${e.target.getAttribute("data-class")}">${e.target.getAttribute("data-class")}</button>`
    }
    navigator.clipboard.writeText(value);
  }

  return (
    <section className={`${Style.banner_sec} pt-5 mt-5`} >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className={Style.card}>
              <div className={Style.card_head}>T O C</div>
              <div className={Style.card_body}>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {links.map((item, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>
                          <td>{item.title}</td>
                          <td>
                            <Link href={`${item.link}`} target={"_blank"}>{item.title}</Link>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>


            <div className={Style.card}>
              <div className={Style.card_head}>Color Pallette</div>
              <div className={Style.card_body}>
                <h5>Colors</h5>
                <div className={`${Style.circle} bg-primary`}>primary</div>
                <div className={`${Style.circle} bg-secondary`}>secondary</div>
              </div>
            </div>


            <div className={Style.card}>
              <div className={Style.card_head}>UI Components.
                <p >Click on Elements to Copy </p></div>
              <div className={Style.card_body}>
                <h5>Buttons</h5>
                {buttons.map((button, i) => {
                  return (
                    <button key={i} className={`mb-3 me-3 ${button.class}`} data-class={button.class} data-type="button" onClick={(e) => handleCopy(e)}>{button.class}</button>
                  )
                })}

                <hr />

                <h5>Card</h5>
              </div>

            </div>


            <div className={Style.card}>
              <div className={Style.card_head}>Typography</div>
              <div className={Style.card_body}>
                <h5>Heading</h5>
                <h3 className="h1">Aa</h3>
                <h3 className="h2">Aa</h3>
                <h3 className="h3">Aa</h3>
                <h3 className="h4">Aa</h3>
                <h3 className="h5">Aa</h3>
                <h3 className="h6">Aa</h3>

                <hr />

                <h5>Card</h5>
              </div>

            </div>


          </div>

          <div className="col-lg-6">
            <div className={Style.card}>
              <div className={Style.card_head}>JSON Structure</div>
              <div className={Style.card_body}>
                <div>

                  <h5 className={Style.title_sticky}>
                    <Link href="/" target={"_blank"}>Home Page</Link>
                  </h5>
                  <div className={Style.code}>
                    <code><pre>
                      {JSON.stringify(props?.datas[0], null, 4)}
                    </pre></code>
                  </div>
                </div>

                <div>

                  <h5 className={Style.title_sticky}>Map</h5>
                  <div className={Style.code}>
                    <code><pre>
                      {menu}
                    </pre></code>
                  </div>
                </div>

                <div>

                  <h5 className={Style.title_sticky}>
                    <Link href="/service" target={"_blank"}>Service Page</Link>
                  </h5>
                  <div className={Style.code}>
                    <code><pre>
                      {JSON.stringify(props?.datas[1], null, 4)}
                    </pre></code>
                  </div>
                </div>

                <div>

                  <h5 className={Style.title_sticky}>
                    <Link href="/service" target={"_blank"}>Feasibility Page</Link>
                  </h5>
                  <div className={Style.code}>
                    <code><pre>
                      {JSON.stringify(props?.datas[2], null, 4)}
                    </pre></code>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StyleGuide;
