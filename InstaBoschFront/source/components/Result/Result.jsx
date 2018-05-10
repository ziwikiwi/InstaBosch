import React, { Component } from 'react';
import styles from "./Result.scss";

class Result extends Component {
	constructor(props) {
		super(props);
	}


	render() {

		return(
			<div className='Result'>
				<h3> Average number of people in the current timeframe : {this.props.count}</h3>
			</div>
		)
	}
}

export default Result
