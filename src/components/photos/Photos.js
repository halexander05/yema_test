import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "./card/Card";

class Photos extends Component {
  fetchPhotos = () => {
    return (
      <div className="row">
        {this.props.photos.map((dp) => (
          <Card data={dp} />
        ))}
      </div>
    );
  };

  render() {
    const photos = this.props.photos ? this.fetchPhotos() : null;
    return (
      <React.Fragment>
        <div className="row">
          <div className={["col", "col-lg-10"].join(" ")}>
            <h1>Photos List</h1>
          </div>
        </div>
        <hr />
        <div className="photoContainer">{photos}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos.data,
  };
};

export default connect(mapStateToProps)(Photos);
