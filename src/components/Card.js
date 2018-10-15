import React, { Component } from 'react';
import TextEllipsis from 'react-text-ellipsis'; // description 태그 넘어가는 부분 처리
import OverflowScrolling from 'react-overflow-scrolling'; // description 스크롤링

class Card extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="col">
					<div className="card">
						<img
							className="card-img-top"
							style={{ width: 510, height: 200, textAlign: 'center' }}
							src={this.props.url}
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">{this.props.center}</h5>
							<p className="card-text">{this.props.date}</p>
							<TextEllipsis>
								<OverflowScrolling className="overflow-scrolling">
									<p
										className="card-text"
										style={{ width: 470, height: 60, overflowY: 'auto' }}
									>
										{this.props.description}
									</p>
								</OverflowScrolling>
							</TextEllipsis>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;