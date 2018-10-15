import React, { Component } from 'react';
import axios from 'axios';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import PaginationBar from './components/PaginationBar';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			itemIndex: 1
		};

		this.imageSearch('egypt');
	}

	changePageIndex = index => {
		this.setState({
			itemIndex: index
		});
	};

	imageSearch = keyWord => {
		axios.get(`https://images-api.nasa.gov/search?q=${keyWord}`).then(res => {
			this.setState({
				items: res.data.collection.items
			});
		});
	};

	render() {
		return (
			<div>
				<SearchBar imageSearch={this.imageSearch} />
				<CardList items={this.state.items} itemIndex={this.state.itemIndex} />

				<div className="pagination">
					<PaginationBar
						items={this.state.items}
						changePageIndex={this.changePageIndex}
					/>
				</div>
			</div>
		);
	}
}

export default App;