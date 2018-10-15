import Card from './Card';
import React, { Component } from 'react';
import axios from 'axios';
import CardList from './CardList';

const cardList = props => {
	
	if (props.items.length == 0) {
		return <h1>loading....</h1>;
	}

	let center, description, url, date;
	let itemIndex = props.itemIndex;
	

	const cardItems = props.items.map((item, index) => {
		
		if (index >= (1+(itemIndex-1)*6) && index <= (6+(itemIndex-1)*6)) {
			
			if (item.data[0].media_type == 'image') {
				if (item.links[0].href) {
					
					url = item.links[0].href;
					center = item.data[0].center;
					description = item.data[0].description;
					date = item.data[0].date_created;
				}

				return <Card key={url}url={url} center={center} description={description} date={date} />;
			}
		}
	});

	return (
		<div>
			<div className="row">
				<div className="card-deck">{cardItems}</div>
			</div>
		</div>
	);
};

export default cardList;