import Style from "./PropertyCard.module.scss";
import Image from "next/image";
const PropertyCard = ({ props }) => {
    return (
        <div className={`${Style.property_card} `}>
            <div className={Style.property_card_icon}>
                <div className={Style.icon}>
                    <Image src={props?.img}  fill alt={`icon ${props?.title}`}/>
                </div>
            </div>
            <div className={Style.property_card_info}>
                <h4>{props?.title}</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
            </div>
        </div>
    );
};

export default PropertyCard;
