import Image from "next/image";
import Style from "./NoData.module.scss";
import { useRouter } from "next/router";

const NoData = () => {
  const router = useRouter();

  return (
    <section className={Style.mx_no_data}>
      <div className={Style.img}>
        <Image src={"/images/icon/not_found.svg"} fill alt="not found image" />
      </div>
      <h4 className="h4">
        {router?.asPath === "/partner-selection" ? "No Data" : " Assets Coming Soon"}
      </h4>
      <p>{/* We can’t find any item matching your search */}</p>
    </section>
  );
};
export default NoData;
