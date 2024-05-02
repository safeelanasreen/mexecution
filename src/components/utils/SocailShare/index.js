import React, { useState } from "react";
import Style from "./SocialShare.module.scss";
import {
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
} from "react-share";
import Icon from "../../Layout/Icons";

const SocialShare = ({ theme }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className={`${Style.blogshare} ${theme === "sticky" ? Style.blogshare_sticky : ""}`}>
      <ul className={Style.blogsocial_wrap}>
        <li>
          <FacebookShareButton
            url={`${typeof window !== "undefined" && window.location.href}`}
          >
            <Icon icon="facebook" size={20} />{" "}
          </FacebookShareButton>
        </li>
        <li>
          <LinkedinShareButton
            url={`${typeof window !== "undefined" && window.location.href}`}
          >
            <Icon icon="linkedin" size={20} />{" "}
          </LinkedinShareButton>
        </li>
        <li>
          <TwitterShareButton
            url={`${typeof window !== "undefined" && window.location.href}`}
          >
            <Icon icon="twitter" size={20} />{" "}
          </TwitterShareButton>
        </li>
        <li
          onClick={() => {
            navigator.clipboard.writeText(
              `${typeof window !== "undefined" && window.location.href}`
            );
            setCopied(true),
              setInterval(() => {
                setCopied(false);
              }, 2000);
          }}
          className={Style.copybutton}
        >
          <Icon icon="file" size={20} />
          {copied ? <div className="url_copy">Copied</div> : ""}
        </li>

      </ul>
    </div >
  );
};

export default SocialShare;
