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
import Filler from '../Filler/Filler.jsx';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedResult: '',
          displayDropdowns: false,
          unit: null,
          number: 0,
          data: [],
          result: 0
        }
        this.handleSelectedLocation = this.handleSelectedLocation.bind(this);
        this.callGraph = this.callGraph.bind(this);
    }

    callGraph(unit, number) {
      if (!unit) {
        console.log('sf', this.state.selectedResult);
        api.getAllMonthCount(this.state.selectedResult, result => {
        let i;
        var currData = [];
        for(i = 0; i < result.counts.length; i++) { // add all promises to list
          currData.push({ x : i, y : result.counts[i] });
        }
        this.setState({
          data: currData
        });
        console.log(this.data);
        });
      }

      if (unit === 'month') {
        api.getMonthCount(this.state.selectedResult, number, result => {
        this.setState({
          result: result
        });
        //TODO: Figure out how to best display result
        console.log(result);
        });
      }

    }

    handleSelectedLocation(result) {
      this.setState({
        selectedResult: result,
        displayDropdowns: true
      }, () => {
        this.callGraph();
      });
    }

    render(props) {
        return(
          <div className="Home">
            <Header/>
            <div className='description'>
              Choose a location.
            </div>
            <div className="Search">
            <Search {...props} selectLocation={this.handleSelectedLocation}/>
            </div>
            <div className="Dropdown">
              {this.state.displayDropdowns ? <Input {...props} generateGraph={this.callGraph}/> : null}
            </div>
            <XYPlot
            width={300}
            height={300}>
            <VerticalBarSeries
              data={this.state.data}/>
            <XAxis />
            <YAxis />
            </XYPlot>
            {this.state.unit ? <h1> Number of people in the {this.state.value} {this.state.unit} : {this.state.result}</h1> : null}
            <Filler/>
          </div>
        );
    }
}

export default Home;
