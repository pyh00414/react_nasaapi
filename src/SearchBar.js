import React, { Component } from 'react';
import CardList from './CardList';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			keyWord: ''
		};
	}

	handleInputChange = keyWord => {
		this.setState({
			keyWord: keyWord
		});
	};

	handleSubmit = event => {
		this.props.imageSearch(this.state.keyWord);
	};

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.keyWord}
					onChange={event => this.handleInputChange(event.target.value)}
				/>
				<button onClick={this.handleSubmit}>검색</button>
			</div>
		);
	}
}

export default SearchBar;