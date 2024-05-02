import Image from "next/image";
import Style from "./ImageCircle.module.scss";

const ImageCircle = ({ props }) => {
  return (
    <div className={`img-circle ${Style.imagecircle}`}>
      <div className={` img-wrap ${Style.image_wrap}`}>
        <figure className="ratio">
          <Image src={props?.image} fill alt="image" />
        </figure>
      </div>
      <div className={Style.text_wrap}>
        <p className="mb-0">{props?.title}</p>
      </div>
    </div>
  );
};
export default ImageCircle;
