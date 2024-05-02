import Assets from "../../src/components/Layout/CommonLayout/assets"

export default {
  "data": {},
  "widgets": [
    {
      "slug": "ServiceBanner",
      "data": {
        img: Assets.banner_poster,
        title: "Partner Selection",
        description: "With our Mexican local partners in HR, Import & Export, Legal, Logistic, Distributor and Suppliers, and Industries, we ensure you a successful expansion to Mexico."
      }
    }, {
      "slug": "ScrollSection",
      "widgets": [
        {
          "slug": "ContentWidget",
          "sectionId": "Local partners in Mexico",
          "data": {
            title: "We find your local partners in Mexico",
            description: "Beside the language barrier, selecting the right real estate in Mexico is the most crucial but also complex process when setting up a manufacturing operation or finding the proper logistic or distribution partner. Through data gathering from your company and your must have requirements, we evaluate the feasibility in the strategically and financially perception of an expansion to Mexico. In that, we conduct a review the warehouses, distribution or production plants with on-site visits, evaluate the supply chain, rules and regulations, workforce availability & qualifications, and import export respectively duty/tariff implications. ",
          }
        }, {
          "slug": "ServiceLocalPartner",
          // "sectionId": "Local partners in Mexico",
          "data": {
              title: "We find your local partners in Mexico",
              description: "In addition, we get you in touch with engineers from various industries such as aerospace, mechatronic, electric, appliances, or machinery.",
              list: [
                {
                  img: Assets.icon_partner1,
                  title: "Partners in various states"
                }, {
                  img: Assets.icon_partner2,
                  title: "10+ years of core competencies"
                }, {
                  img: Assets.icon_partner3,
                  title: "Wide portfolio"
                }, {
                  img: Assets.icon_partner4,
                  title: "Fluent in English & Spanish"
                }, {
                  img: Assets.icon_partner5,
                  title: " Certified & standard norms"
                }, {
                  img: Assets.icon_partner6,
                  title: "Corporate / limited companies"
                },
              ],
              mapData: [
              {
                id: "1",
                title: "Monterrey",
                position: {
                  top: "22%",
                  left: "23%"
                },
              }, {
                id: "2",
                title: "Baja California Sur",
                position: {
                  top: "75%",
                  left: "55%"
                },
              },
              {
                id: "3",
                title: "San Juan Teotihuacan",
                position: {
                  top: "51%",
                  left: "22%"
                },
              },
              {
                id: "3",
                title: "San Juan Teotihuacan",
                position: {
                  top: "62%",
                  left: "93%"
                },
              },
              {
                id: "4",
                title: "San Juan Teotihuacan",
                position: {
                  top: "30%",
                  left: "53%"
                },
              },
            ]
          }
        },  {
          "slug": "ServicePartners",
          "sectionId": "Our Local Partners",
          "data": {
            title:"Our Local Partners",
            description:"Whether site selection, supply chain, import & export, legal topics, governmental incentives or recruitment, with our large network of local partners and experts, we ensure a successful expansion to Mexico.",
            locations:[
              {
                id:"",
                title:"Mexico"
              },{
                id:"",
                title:"Mexico"
              },{
                id:"",
                title:"Mexico"
              },
            ],
            categories:[
              {
                id:"",
                title:"Legal Consultation"
              },{
                id:"",
                title:"Transportation"
              },{
                id:"",
                title:"Distribution"
              },
            ],
            partners: [
              {
                img: "",
                name: "Marta Jose",
                category: "Distribution",
                location:"",
                experience: "8+",
                data:["Industry - Food, wood, Electronics", "Located - Monterrey", "Speaks - Spanish & English", "Lorem - lorem ipsum"],
                description:""
              }, {
                img: "",
                name: "Marta Jose",
                category: "Distribution",
                location:"",
                experience: "8+",
                data:["Industry - Food, wood, Electronics", "Located - Monterrey", "Speaks - Spanish & English", "Lorem - lorem ipsum"],
                description:""
              }, {
                img: "",
                name: "Marta Jose",
                category: "Distribution",
                location:"",
                experience: "8+",
                data:["Industry - Food, wood, Electronics", "Located - Monterrey", "Speaks - Spanish & English", "Lorem - lorem ipsum"],
                description:""
              }, {
                img: "",
                name: "Marta Jose",
                category: "Distribution",
                location:"",
                experience: "8+",
                data:["Industry - Food, wood, Electronics", "Located - Monterrey", "Speaks - Spanish & English", "Lorem - lorem ipsum"],
                description:""
              },
            ]
          }
        }, {
          "slug": "HomeProcess",
          "sectionId": "Partnering with a partner2",
          "data": {
            title: "Partnering with a partner",
            titleSub: "We analyze your requirements and connect you with the right partners.",
            description: " If you are interested in executing an expansion with us, set up contracts with your elected partners under the detailed framework conditions. Besides facilitating finding the right partners, we accompany you in the whole execution process of the expansion. We locally act as project managers in which we represent your interests and ensure coordination:",
            steps: [{
              img: Assets.step1,
              title: "Analyse your requirements"
            }, {
              img: Assets.step2,
              title: "Set up contract & plan milestones"
            }, {
              img: Assets.step3,
              title: "Find in our portfolio proper Locations based on your needs"
            }, {
              img: Assets.step1,
              title: "Analyse your requirements"
            }, {
              img: Assets.step1,
              title: "Analyse your requirements"
            }, {
              img: Assets.step1,
              title: "Analyse your requirements"
            }, {
              img: Assets.step1,
              title: "Analyse your requirements"
            }, {
              img: Assets.step1,
              title: "Analyse your requirements"
            }, {
              img: Assets.step1,
              title: "Analyse your requirements"
            },]
          }
        },
      ],
      "data": {
        "nav": [
          {
            title: "Local partners in Mexico"
          }, {
            title: "Our Local Partners"
          }, {
            title: "Partnering with a partner"
          },
        ],

      }
    }, {
      "slug": "LocationContact",
      "data": {}
    },
  ]
}