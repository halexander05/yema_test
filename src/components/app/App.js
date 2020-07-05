import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../stores/actions/Index";

import Layout from "../layout/Layout";
import Photos from "../photos/Photos";

class App extends Component {
  componentDidMount() {
    this.props.onFetchPhotos();
  }

  render() {
    const routes = (
      <Switch>
        <Route path="/" exact component={Photos} />
      </Switch>
    );
    return <Layout>{routes}</Layout>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPhotos: () => {
      dispatch(actions.fetchAllPhotos());
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
