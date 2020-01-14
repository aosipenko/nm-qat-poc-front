import React from 'react';
import {getItems} from '../service/ShopDataService'

class ShopItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			id: props.id,
			name: props.name,
			url: props.url,
			price: props.price,
			amount: props.amount
		};
	}

	render() {
		return (
			<div>
				<div>Артикул товара: {this.state.id}</div>
				<div>Название товара: {this.state.name}</div>
				<img src={this.state.url} height="250" width="250"/>
				<div>Цена: {this.state.price}</div>
				<div>На складе: {this.state.amount}</div>
			</div>
		);
	}
}

export default ShopItem;
