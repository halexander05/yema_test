import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./Photos.css";

import Cards from "./card/Card";
import Pagination from "@material-ui/lab/Pagination";
import * as actions from "../../stores/actions/Index";

class Photos extends Component {
  state = {
    page: 1,
    count: 10,
    pageSize: 12,
  };

  fetchPhotos = () => {
    return (
      <div className="row">
        {this.props.photos.map((dp) => (
          <Cards data={dp} />
        ))}
      </div>
    );
  };

  retrieveNewCards = () => {
    const page = this.state.page;
    this.props.onFetchPhotos(page);
  };

  handlePageChange = (event, value) => {
    this.setState(
      {
        page: value,
      },
      () => {
        this.retrieveNewCards();
      }
    );
  };

  render() {
    const { page, count } = this.state;
    const photos = this.props.photos ? this.fetchPhotos() : null;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <h1>Photos List</h1>
            <Link to="/">About Us</Link>
          </div>
        </div>
        <hr />
        <div className="photoContainer">
          <div className="row">
            <div className="col">
              <Pagination
                page={page}
                count={count}
                onChange={this.handlePageChange}
              />
            </div>
          </div>
          {photos}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPhotos: (page) => {
      dispatch(actions.fetchAllPhotos(page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
