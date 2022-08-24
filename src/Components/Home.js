import React, { Component } from "react";
import Poster from "./Poster.js";
import Movies from "./HomeMovies.js";

export default class Home extends Component {
  render() {
    return (
      <>
          <Poster/>
          <Movies/>
      </>
    );
  }
}