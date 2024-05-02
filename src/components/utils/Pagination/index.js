import Style from "./Pagination.module.scss";
const Pagination = ({ data }) => {
    return (
        <div className={Style.pagination}>
            <button className={`${Style.pagination_item} ${Style.pagination_item_active}`}>1</button>
            <button className={`${Style.pagination_item}`}>2</button>
            <button className={`${Style.pagination_item}`}>3</button>
            <button className={`${Style.pagination_item}`}>Next</button>
        </div>
    );
};

export default Pagination;
