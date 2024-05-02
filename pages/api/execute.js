import Assets from "../../src/components/Layout/CommonLayout/assets"

export default {
    "data": {},
    "widgets": [
        {
            "slug": "ServiceBanner",
            "data": {
                img: "/images/banner/execute_banner.png",
                title: "Project Management or Execution Expansion",
                description: "You define the strategy and we help you to plan, coordinate, monitor, and execute the expansion – from the initial milestones planning up."
            }
        }, {
            "slug": "ScrollSection",
            "widgets": [
                {
                    "slug": "ContentWidget",
                    "sectionId": "Project Management & milestones planning",
                    "data": {
                        title: "Set up Project Management Team & Milestone Planning ",
                        description: "An expansion bears many hidden hurdles and does not always go as planned, especially in the execution. Once the site has been selected, we set up a project management team with you to plan the new operations in Mexico. With our local presence, we ensure the successful execution of setting up your expansion to Mexico and are representing your interests.During this transition time, we will schedule weekly follow-ups to coordinate and monitor the different milestones.",
                        
                        cards: [
                            {
                                title: "Planning of milestone",
                                img: "/images/icon/planning.svg",
                                description: "Dummy Text Based on your requirements."
                            }, {
                                title: "In time of the project executions",
                                img: "/images/icon/execution.svg",
                                description: "Dummy Text Based on your requirements."
                            }, {
                                title: "Alignment & coordinating  meetings",
                                img: "/images/icon/cordination.svg",
                                description: "Dummy Text Based on your requirements."
                            }, {
                                title: "Monitoring & controlling milestones",
                                img: "/images/icon/monitoring.svg",
                                description: "Dummy Text Based on your requirements."
                            },
                        ],


                    }

                },
                {
                    "slug": "TabExecute",
                    "sectionId": "Set up a company in Mexico",
                    "data": {
                        title: "Set up company in Mexico",
                        description: "There is a quite bureaucratical way to set up your company in Mexico. With our local presence, we and our experts support you in the whole processes in the administrative stuff.",
                        tab: [
                            {
                              category: "Found company",
                              data: {
                                title: "Found company",
                                description: "<p>We make you familiar with the local laws and how to found your company in Mexico. With our local attorney, we ensure to open your company in the respective city in which you will be based, within 90 days.</p><ul><li>Preparing all needed documentation</li><li>Translating into your language</li><li>Go through all details with our experts</li></ul>"
                              }
                            }
                          ],
                          data : {
                            title: "Qualified employees",
                            img: Assets.feasibility_airport,
                            description: "<p>We make you familiar with the local laws and how to found your company in Mexico. With our local attorney, we ensure to open your company in the respective city in which you will be based, within 90 days.</p><ul><li>Preparing all needed documentation</li><li>Translating into your language</li><li>Go through all details with our experts</li></ul>",
                            data: {
                                columns: "2",
                                accordion: true,
                                // type: "accordion",
                                data: [{
                                    title: "Employee salary",
                                    img: "",
                                    description: "Lorem ipsum dolor sit amet, consetetur sadips"
                                }, {
                                    title: "Certification",
                                    img: "",
                                    description: "Lorem ipsum dolor sit amet, consetetur sadips"
                                }, {
                                    title: "Certification",
                                    img: "",
                                    description: "Lorem ipsum dolor sit amet, consetetur sadips"
                                }, {
                                    title: "Certification",
                                    img: "",
                                    description: "Lorem ipsum dolor sit amet, consetetur sadips"
                                }, {
                                    title: "Certification",
                                    img: "",
                                    description: "Lorem ipsum dolor sit amet, consetetur sadips"
                                },]
                            }
                        }
                    }
                },

                {
                    "slug": "ServiceExecution",
                    "sectionId": " Execute Expansion ",
                    "data": {
                        title: "Execution of the Expansion",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
                        cards: [
                            {
                                image: "",
                                title: "",
                                description: "",
                            },
                        ],

                    },
                },
                {
                    "slug": "ServiceTransfer",
                    "sectionId": "Transfer assets and set up production",
                    "data": {
                        title: "",
                        description: "",
                        cards: [{
                            img: "/images/icon/transport.svg",
                            title: "Means of transport",
                            description: "The goods or machines be transported to Mexico and to its customers through Air cargo, Sea freight, Camion, and Train. We ensure all the best ways to transport your products to Mexico.",
                        },
                        {
                            img: "/images/icon/transport.svg",
                            title: "Means of transport",
                            description: "The goods or machines be transported to Mexico and to its customers through Air cargo, Sea freight, Camion, and Train. We ensure all the best ways to transport your products to Mexico.",
                        },
                        {
                            img: "/images/icon/transport.svg",
                            title: "Means of transport",
                            description: "The goods or machines be transported to Mexico and to its customers through Air cargo, Sea freight, Camion, and Train. We ensure all the best ways to transport your products to Mexico.",
                        },
                        {
                            img: "/images/icon/transport.svg",
                            title: "Means of transport",
                            description: "The goods or machines be transported to Mexico and to its customers through Air cargo, Sea freight, Camion, and Train. We ensure all the best ways to transport your products to Mexico.",
                        },]
                    }
                }, {
                    "slug": "ServiceProduction",
                    "sectionId": "Installment & start production",
                    "data": {
                        title: "",
                        description: "",
                        cards: [{
                            img: "/images/icon/productio_card.svg",
                            title: "Means of transport",
                            description: "The goods or machines be transported to Mexico and to its customers through Air cargo, Sea freight, Camion, and Train. We ensure all the best ways to transport your products to Mexico.",
                        },
                        {
                            img: "/images/icon/productio_card.svg",
                            title: "Means of transport",
                            description: "The goods or machines be transported to Mexico and to its customers through Air cargo, Sea freight, Camion, and Train. We ensure all the best ways to transport your products to Mexico.",
                        },
                        {
                            img: "/images/icon/productio_card.svg",
                            title: "Means of transport",
                            description: "The goods or machines be transported to Mexico and to its customers through Air cargo, Sea freight, Camion, and Train. We ensure all the best ways to transport your products to Mexico.",
                        },
                        {
                            img: "/images/icon/productio_card.svg",
                            title: "Means of transport",
                            description: "The goods or machines be transported to Mexico and to its customers through Air cargo, Sea freight, Camion, and Train. We ensure all the best ways to transport your products to Mexico.",
                        },]
                    }
                },
            ],
            "data": {
                "nav": [
                    {
                        title: "Project Management & milestones planning"
                    }, {
                        title: "Set up a company in Mexico"
                    }, {
                        title: "Execute Expansion"
                    }, {
                        title: "Transfer assets and set up production"
                    }, {
                        title: "Installment & start production "
                    }
                ],

            }
        },
    ]
}