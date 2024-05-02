import Image from "next/image";
import Assets from "../../Layout/CommonLayout/assets";
import Style from "./LocationCard.module.scss";
const LocationCard = ({ props, handleLocationFilter }) => {
  return (
    <div
      className={Style.location_card}
      aria-labelledby="location other card"
      onClick={() => {
        handleLocationFilter(props?.id);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <div className={Style.location_card_head}>
        <div className="ratio">
          <Image src={props?.image} width={330} height={144} alt="Michoacan" />
        </div>
      </div>
      <div className={Style.location_card_body}>
        <h3 className="h6">{props?.title}</h3>
        <p className="mb-0">{props?.production_count} warehouses & industrial units</p>
      </div>
    </div>
  );
};

export default LocationCard;
