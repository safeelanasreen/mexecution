import { parseCookies } from "nookies";
import React, { useEffect, useState } from "react";
import { getPageContent } from "../../../lib/pages";

const useUpcomingEvents = ({ props }) => {
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(props?.data?.count);
  const [contentData, setContentData] = useState(props?.data?.events);
  const [offSet, setOffSet] = useState(0);
  const [status, setStatus] = useState("idle");
  const cookies = parseCookies();

  let langCookie = cookies?.lang;

  const upComingEventsLsit = [{ label: "All Events", value: 0 }, ...props?.data?.event_category];

  const handleTabclick = async (cat, perPage) => {
    setStatus("pending");

    await getPageContent(
      `events/tab/switch?category_id=${cat}&offset=${perPage}&limit=${2}&language=${langCookie}`
    )
      .then((r) => {
        setContentData((state) => (r?.data?.length > 0 ? [...state, ...r?.data] : [...state]));
        setActive(cat);
        setCount(r?.count);
        setTimeout(() => {
          setStatus("success");
        }, 100);
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return {
    count,
    status,
    active,
    contentData,
    upComingEventsLsit,
    setOffSet,
    setContentData,
    handleTabclick,
  };
};

export default useUpcomingEvents;
