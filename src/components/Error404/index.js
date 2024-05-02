import Image from "next/image";
import Style from "./Error404.module.scss";
import Link from "next/link";


const Error404 = ({ props }) => {
    return (
        <section className={Style.mx_error_page}>
            <div className={`${Style.error_page_container} container`} >
                <div className={Style.error_img}>
                    <div className="ratio">
                        <Image src={'/images/banner/404.svg'} fill alt="404 image" />
                    </div>
                </div>
                <h4 className="h4">
                    Page Not Found
                </h4>
                <p>
                    We're sorry, the page you requested could not be found.
                    Please go back to the homepage!
                </p>
                <Link  className="button button-sm button-primary" href="/"><span>Back to Home</span></Link>
            </div>
        </section>
    );
};
export default Error404;