import Style from "./Bloglisting.module.scss";
import BlogFilter from "../utils/BlogFilter";
import ArticleCard from "../utils/ArticleCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { getPageContent } from "../../../lib/pages";
import BlogShimmer from "../BlogShimmer";
import { parseCookies } from "nookies";
import NoData from "../utils/NoData";

const Bloglisting = ({ props }) => {
  const [count, setCount] = useState(props?.data?.count);
  const [offSet, setOffSet] = useState(0);
  const [category, setCategory] = useState(0);
  const [contentData, setContentData] = useState(props?.data?.blogs);
  const [active, setActive] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("idle");

  const router = useRouter();

  const cookies = parseCookies();

  let langCookie = cookies?.lang;

  const getData = async (cat, perPage, search, source, controller) => {
    setStatus("pending");
    await getPageContent(
      `blog/filter?search_term=${search}&category=${cat}&offset=${perPage}&limit=9&language=${langCookie}`,
      {
        cancelToken: source ? source.token : null,
        signal: controller ? controller.signal : null,
      }
    )
      .then((r) => {
        setContentData((state) => (r?.data?.length ? [...state, ...r?.data] : [...state]));
        setCount(r?.count);
        setActive(cat);
        setTimeout(() => {
          setStatus("success");
        }, 100);
      })
      .catch(() => {
        setStatus("error");
      });
  };

  useEffect(() => {
    const controller = new AbortController();
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const getSearchData = async () => {
      if (searchTerm) {
        setStatus("pending");
        await getPageContent(
          `blog/filter?search_term=${searchTerm}&category=${category}&offset=${offSet}&limit=9&language=${langCookie}`,
          { cancelToken: source.token, signal: controller.signal }
        )
          .then((r) => {
            setContentData(r?.data);
            setCount(removeEventListener?.count);
            setActive(category);
            setTimeout(() => {
              setStatus("success");
            }, 100);
          })
          .catch(() => {
            setStatus("error");
          });
      }
    };
    getSearchData();
    return () => {
      source.cancel();
    };
  }, [searchTerm]);

  return (
    <section
      className={`${Style.mx_blog_listing} ${
        router.pathname === "/blogs" ? Style.theme_second : ""
      }`}
    >
      <div className="container">
        <div className={Style.blog_list_title}>
          <h4 className={Style.h4}>{props?.title}</h4>
        </div>

        <div className={Style.blog_list_head}>
          <BlogFilter
            button="search"
            props={props?.data}
            setCategory={setCategory}
            active={active}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            getData={getData}
            category={category}
            offSet={offSet}
            setOffSet={setOffSet}
            setContentData={setContentData}
          />
        </div>

        {contentData?.length !== 0 ? (
          <div className={`row row-cols-lg-3 ${Style.list_row}`}>
            {status === "pending" ? (
              <>
                {[...Array(count ?? 5)]?.map(() => (
                  <BlogShimmer />
                ))}
              </>
            ) : (
              contentData?.map?.((item, i) => {
                return (
                  <div key={i}>
                    <ArticleCard type="listing" data={item} />
                  </div>
                );
              })
            )}
          </div>
        ) : (
          status !== "pending" && (
            <h1>
              <NoData />
            </h1>
          )
        )}

        {count > contentData?.length && status !== "pending" && (
          <div className={`${Style.btn_wrapper} text-center `}>
            <button
              className=" mt-5 btn-width me-1 btn btn-outline-secondary"
              data-type="button"
              onClick={() => {
                setOffSet(offSet + 9);
                getData(category, offSet + 9, searchTerm);
              }}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default Bloglisting;
