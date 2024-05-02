import Style from "./StateMapTable.module.scss";

const StateMapTable = (props) => {
  const { titleTheme, main_cities, table_km_title, table_miles_title, table_title } = props;
  return (
    <div
      className={`${Style.table_wrap} ${titleTheme === "secondary" ? Style.theme_secondary : ""}`}
    >
      <div>
        <table>
          <tbody>
            <tr>
              <td>{table_title}</td>
              <td>{table_km_title}</td>
              <td>{table_miles_title}</td>
            </tr>

            {main_cities?.map((item, i) => (
              <tr className="tr" key={i}>
                <td>{item?.city}</td>
                <td>{item?.km}</td>
                <td>{item?.mile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StateMapTable;
