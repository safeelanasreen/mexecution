import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "./IconHoverItem.module.scss";
import Icon from "../../Layout/Icons";
const IconHoverItem = ({ data }) => {
    const ref = useRef();
    return (
        <Link href={`${data?.link}`} className={`${Style.item} `} aria-labelledby="service card"  >
            <div className={Style.item_body}>
                <div className={Style.item_img}>
                    <div className={Style.icon}>
                        <Image src={data?.img} fill alt={data?.title} />
                    </div>
                </div>
                <div className={Style.item_info}>
                    <h4 className="mb-0">{data?.title}</h4>
                </div>

                <div className={Style.arrow}>
                    <span><span>
                        <Icon icon="arrow-top" size={15} />
                    </span></span>
                </div>
            </div>
        </Link>
    );
};

export default IconHoverItem;
