import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import Api from "../Api.js";
import styles from "./Home.scss";
import Header from '../Header/Header.jsx'
import Input from '../Input/Input.jsx'
const api = new Api();

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: "",
        };
    }

    componentWillMount() {
      api.getDayCount(3, result => {
      this.setState({
            count: result.count
        });
      });
    }

    render() {
        return(
          <div className="Home">
            <Header/>
            <div className='description'>
              This code does something. Write here what it does. Decorate it and put it in a box or some shit.
            </div>
            <Input/>
          </div>
        );
    }
}

export default Home;
