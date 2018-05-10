import React, { Component } from 'react';
import { Search as SemanticSearch } from 'semantic-ui-react';
import _ from 'lodash'

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			results: ['Foellinger Auditorium', 'Illini Union', 'Siebel Center'],
			placeList: ['Foellinger Auditorium', 'Illini Union', 'Siebel Center'],
			selected: ''
		};
		this.returnResults = this.returnResults.bind(this);
	}

	returnResults (event, {value}) {
		this.setState({value});
		
		console.log(this.state.value)
		this.setState({
			results: _.filter(this.state.placeList, (result) => {
				console.log('is this printing');
				var starts = _.startsWith(_.lowerCase(result), this.state.value);
				console.log(starts);
				return starts;
			})
		});
		console.log(this.state.results)
		
	}

	handleResultSelect (event, {selected}) {
		this.setState({selected});
		this.props.selectedLocation = this.state.selected;
	}


	render() {
		const {value, results, selected} = this.state;
		return(
			<div>
				<h2> Finding Popular Attractions Near You </h2>
				<SemanticSearch 
					onSearchChange= {this.returnResults}
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