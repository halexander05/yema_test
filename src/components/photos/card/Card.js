import React from "react";

const Card = (props) => {
  const data = props.data;
  return (
    <React.Fragment>
      <div className={["col", "col-lg-3"].join(" ")}>
        <div className="card" key={data.id}>
          <div className="card-body">
            <h5 className="card-title">{data.alt_description}</h5>
            <img src={data.urls.small} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
