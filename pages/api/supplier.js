import Assets from "../../src/components/Layout/CommonLayout/assets";

export default {
  data: {},
  widgets: [
    {
      slug: "ServiceBanner",
      data: {
        img: "/images/banner_supplier.png",
        title: "Partner Selection",
        description:
          "With our Mexican local partners in HR, Import & Export, Legal, Logistic, Distributor and Suppliers, and Industries, we ensure you a successful expansion to Mexico.",
      },
    },
    {
      slug: "ScrollSection",
      widgets: [
        {
          slug: "ContentWidget",
          sectionId: "Local partners in Mexico",
          data: {
            title: "Supplier Portfolio",
            description:
              "Besides that Mexico has an enrichment of various raw materials like plastic, oil, or copper, they have also several thousand Original Equipment Manufacturer tier suppliers (Tier 1, 2 & 3) in various industries such as automotive, aeronautic, household appliances, medical devices, or electronics. By analyzing your needs, we ensure that you will find the right supplier partner in Mexico.",
          

          },
        },
        
        {
          slug: "SupplierTab",
          data: {
            tab: [
              {
                nav_title: "Why should you search in Mexico for your supplier?",
                title: "Why should you search in Mexico for your supplier?",
                description:
                  "<p>Several thousand tier suppliers which are clustered throughout 24 states in Mexico. For example, there are over 30 automotive OEMs in Mexico with around a 100 in Tier 1 and a few thousand Tier 2 and Tier 3. Some hard facts about Mexico’s supplier network</p>",
                data: [
                  {
                    title:
                      "Over 30 years of experience in different industries",
                    img: "/images/icon/engineer.svg",
                    description: "Dummy Text Based on your requirements.",
                  },
                  {
                    title: "High standards with certified",
                    img: "/images/icon/engineer.svg",
                    description: "Dummy Text Based on your requirements.",
                  },
                  {
                    title: "Highly educated engineers",
                    img: "/images/icon/engineer.svg",
                    description: "Dummy Text Based on your requirements.",
                  },
                  {
                    title: "Perfect location",
                    img: "/images/icon/engineer.svg",
                    description: "Dummy Text Based on your requirements.",
                  },
                ],
              },
              {
                nav_title: "How to find your supplier",
                title: "How to find your supplier",
                description:
                  "<p>Whether it is raw materials or services required for running a smooth manufacturing operation in Mexico, we help you find potential suppliers with competitive pricing and reliable service. </p>",
                is_timeline: true,
                data: [
                  {
                    title: " 1Define a requirement catalog",
                    img: "/images/cover1.png",
                    description:
                      "Writing all must haves and nice to haves (we have already prepared a list)Interested party shares detailed information about product or service requirements, including samples, specification sheets and other beneficial data to identify the appropriate vendors ",
                  },
                  {
                    title: "2Define a requirement catalog",
                    img: "/images/cover1.png",
                    description:
                      "Writing all must haves and nice to haves (we have already prepared a list)Interested party shares detailed information about product or service requirements, including samples, specification sheets and other beneficial data to identify the appropriate vendors ",
                  },
                  {
                    title: "Define a requirement catalog",
                    img: "/images/cover1.png",
                    description:
                      "Writing all must haves and nice to haves (we have already prepared a list)Interested party shares detailed information about product or service requirements, including samples, specification sheets and other beneficial data to identify the appropriate vendors ",
                  },
                  {
                    title: "Define a requirement catalog",
                    img: "/images/cover1.png",
                    description:
                      "Writing all must haves and nice to haves (we have already prepared a list)Interested party shares detailed information about product or service requirements, including samples, specification sheets and other beneficial data to identify the appropriate vendors ",
                  },
                  {
                    title: "Define a requirement catalog",
                    img: "/images/cover1.png",
                    description:
                      "Writing all must haves and nice to haves (we have already prepared a list)Interested party shares detailed information about product or service requirements, including samples, specification sheets and other beneficial data to identify the appropriate vendors ",
                  },
                ],
              },
            ],
          },
        },
        {
          slug: "AboutMx",
          data: {
            title: "Distribution Partner",
            sub_title:"",
            img: "",
            link: {
              title: "Link",
              url: "",
            },
            description:
              "<p>Find from our network the right distribution partner in Mexico who stocks your goods, processes orders, plans route planning, as well as controls, return management</p><h5>Why Select Mexico As Distribution Partner?</h5><ul><li>Only A Few Driving Hours Away From The United States</li><li>Cost-Efficient Supply Chain And Low Warehouse Costs</li><li>Over 2000 Renowned Logistic Companies Which Meet Various Industry Standards</li></ul>",
          },
        },
       
        {
          slug: "HomeIndustries",
          data: {
            title: "Mexican Industries",
            industries: [
              {
                img: Assets.service1,
                title: "Aerospace",
              },
              {
                img: Assets.service2,
                title: "Medical Devices",
              },
              {
                img: Assets.service1,
                title: "Information Technology",
              },
              {
                img: Assets.service2,
                title: "Automotive",
              },
              {
                img: Assets.service1,
                title: "GENERAL MANUFACTURING",
              },
            ],
          },
        },

      ],
      data: {
        nav: [
          {
            title: "Local partners in Mexico",
          },
          {
            title: "Our Local Partners",
          },
          {
            title: "Partnering with a partner",
          },
        ],
      },
    },
    {
      slug: "SupplierMap",
      data: {
        title: "",
        description: "",
        content: ""
      },
    }
  ],
};
