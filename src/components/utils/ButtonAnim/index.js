import Link from "next/link";
import Style from "./Link.module.scss";
import Icon from "../../Layout/Icons";
const ButtonAnim = ({ props, children }) => {
    return (
        <>
        {/* {props} */}
        <button href={`${props?.href}`} className={`${props?.className} ${Style.link}`} >
            <div className="button__bg"></div>
            <span>
                {children}
            </span>
        </button>
        </>
    );
};

export default ButtonAnim;
