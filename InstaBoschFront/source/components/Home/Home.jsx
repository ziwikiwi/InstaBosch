import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import Api from "../Api.js";
import styles from "./Home.scss";
import Header from '../Header/Header.jsx';
import Input from '../Input/Input.jsx';
import Search from '../Search/Search.jsx';
const api = new Api();
import {XYPlot, XAxis, YAxis, VerticalBarSeries} from 'react-vis';

class Home extends Component {
    constructor(props) {
        super(props);
        this.data = []
    }

    componentWillMount() {
      api.getAllMonthCount(result => {
      let i;
      for(i = 0; i < result.counts.length; i++) { // add all promises to list
        this.data.push({ x : i, y : result.counts[i] });
      }
      console.log(this.data);
      this.forceUpdate();
      });
    }

    render() {
        return(
          <div className="Home">
            <Header/>
            <div className='description'>
              This code does something. Write here what it does. Decorate it and put it in a box or some shit.
            </div>
            <Search />
            <Input/>
            <XYPlot
            width={300}
            height={300}>
            <VerticalBarSeries
              data={this.data}/>
            <XAxis />
            <YAxis />
          </XYPlot>
          </div>
        );
    }
}

export default Home;
