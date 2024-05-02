import Image from "next/image";
import Assets from "../../Layout/CommonLayout/assets";
import Style from "./ImportCard.module.scss";

const ImportCard = ({ data }) => {
    return (
        <div className={Style.import_card}>

            <div className="row mt-5" >
                <div className="col-lg-5">
                    <div className={Style.import_card_img}>
                        <figure className="mb-3 ratio">
                            <Image src={Assets.import_container} fill alt="" />
                        </figure>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className={`h-100 d-flex justify-content-center flex-column ${Style.import_card_content}`}>
                        <h3 className="h5 mb-3">Import & Export</h3>

                        <p>There are various factors which must be taken into consideration when you import and export goods across the Mexican border. With our import & export partners, we calculate your total import and export costs, recommend you possible Incoterms, and outline the whole clearance process.
                        </p>
                        <p>
                            In addition, we ensure that you are compliant with the import & export laws to avoid costly fines and penalties as well as taking advantage of the tax benefits Mexico offers to minimize the tariffs
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ImportCard;
