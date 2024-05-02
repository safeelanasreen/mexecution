import Link from "next/link";
import Style from "./Link.module.scss";
import Icon from "../../Layout/Icons";
import { Button } from "react-bootstrap";
const LinkBtn = (props) => {
  return (
    <>
      {props?.as == "button" ? (
        <button className={`${props?.className} ${Style.link}`}>
          {props?.children}
          <span>
            <span>
              <Icon icon="arrow-right1" size={13} />
            </span>
          </span>
        </button>
      ) : (
        <Link href={`${props?.href}`} className={`${props?.className} ${Style.link}`}>
          {props?.children}
          <span>
            <span>
              <Icon icon="arrow-right1" size={13} />
            </span>
          </span>
        </Link>
      )}
    </>
  );
};

export default LinkBtn;
