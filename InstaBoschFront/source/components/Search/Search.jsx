import React, { Component } from 'react';
import { Search as SemanticSearch } from 'semantic-ui-react';
import styles from "./Search.scss";
import _ from 'lodash'

class Search extends Component {
	constructor(props) {
		super(props);
		this.selected = '';

		this.state = {
			value: "",
			results: [{title: 'Foellinger Auditorium',
						value: 'foellinger'}, {
						title: 'Illini Union',
						value: 'union'}],
			placeList: [{title: 'Foellinger Auditorium',
						value: 'foellinger'}, {
						title: 'Illini Union',
						value: 'union'}],
			selected: ''
		};

		this.returnResults = this.returnResults.bind(this);
		this.handleResultSelect = this.handleResultSelect.bind(this);
	}

	returnResults (event, {value}) {

		this.setState({
			value,
			results: _.filter(this.state.placeList, (result) => {
				var starts = _.startsWith(_.lowerCase(result.title), this.state.value);
				return starts;
			})
		});

	}

	handleResultSelect (event, {result}) {
		this.props.selectLocation(result.value);

		this.setState({value: result.title,
			selected: result.value}, () => {
			this.selected = this.state.selected;
			console.log('selected: ', this.selected);
		});



		return this.selected;
	}


	render() {
		const {value, results, selected} = this.state;
		return(
			<div>
				<SemanticSearch
				  fluid = { true }
					onSearchChange = {this.returnResults}
					type='text'
					value = {value}
					results = {results}
					onResultSelect = {this.handleResultSelect}
					placeholder = 'Search for a Location'
				/>
			</div>
		)
	}
}

export default Search
