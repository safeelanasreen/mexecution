import React from "react";

const PageLoader = () => {
  return (
    <div className={"progress_loader"}>
      <div className={"linear_progress_material"}>
        <div className={"bar bar1"}></div>
        <div className={"bar bar2"}></div>
      </div>
    </div>
  );
};

export default PageLoader;
