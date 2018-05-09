import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import Api from "../Api.js";
import styles from "./Home.scss";

const api = new Api();

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: "",
        };
    }

    componentWillMount() {
      api.getDayCount(5, result => {
      this.setState({
            count: result.count
        });
      });
    }

    render() {
        return(
          <div className="Home">
            Day 5 has { this.state.count } people
          </div>
        );
    }
}

export default Home;
