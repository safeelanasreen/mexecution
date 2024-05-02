import Style from "./PartnerCardShimmer.module.scss";
import Image from "next/image";
import Link from "next/link";


const PartnerCardShimmer = ({ props }) => {
    return (
        <>
            <div className={Style.partner_card} aria-labelledby="partner-card">
                <div className={`${Style.partner_card_img} ${Style.placeholder}`}>
                    <div className={Style.img}>
                        {/* <Image
                            src=""
                            fill
                            alt=""
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        /> */}
                    </div>
                </div>
                <div className={Style.partner_card_info} >
                    <h4 className={Style.placeholder}>Alan Almanza </h4>
                    <h6 className={Style.placeholder}>Logistics(3PL-5PL)</h6>
                    <p className={Style.placeholder}>25 + Year Experience</p>
                </div>
            </div>
        </>
    );
};
export default PartnerCardShimmer;