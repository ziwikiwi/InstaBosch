import React, { Component } from "react";
import { Button, Dropdown } from "semantic-ui-react";
import styles from "./Input.scss";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lengthrange: [{
                text: 'Month',
                value: 'month'
                },{
                    text: 'Day of Week',
                    value: 'day'
                },{
                    text: 'Date',
                    value: 'date'
                }],
            dayrange: _.range(31).map((date) => {
                return {
                    text: date,
                    value: date
                };
            }),
            timeunit: '',
            value: -1
        }
        this.monthHandler = this.monthHandler.bind(this);
        this.dayHandler = this.dayHandler.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);

    }

    monthHandler(event, {value}) {
        this.setState({
            timeunit: value
        }, () => {
            let numdays = 0;
            if (value === "month") numdays = 12;
            if (value === "day") numdays = 7;
            if (value === "date") numdays = 31;
            this.setState({
                dayrange: _.range(numdays).map((date) => {
                    return {
                        text: date,
                        value: date
                    };
                })
            });
        });
    }

    dayHandler(event, {value}) {
        this.setState({
            value: value
        }, () => {
        });
    }

    handleButtonClick (event) {
        this.props.generateGraph(this.state.timeunit, this.state.value);
    }

    render() {
        const {monthrange, dayrange, value, timeunit, lengthrange} = this.state;
        return(
          <div className="Input">
            <Dropdown placeholder='Length' fluid selection options={lengthrange} onChange={this.monthHandler} value = {timeunit}/>
            <Dropdown  fluid selection options={dayrange} onChange={this.dayHandler} value = {value}/>
            <Button onClick={this.handleButtonClick}>Generate Graph</Button>
          </div>
        );
    }
}

export default Input;
