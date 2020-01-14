import React from 'react';
import Grid from "@material-ui/core/Grid";
import {getItems} from "./service/ShopDataService";
import ShopItem from "./components/ShopItem";
import {Paper} from "@material-ui/core";

class Homepage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			shopItems: <Grid/>
		};
	}

	componentDidMount() {
		this.handleLoad();
	}

	render() {
		return (
			<div>
				{this.state.shopItems}
			</div>
		);
	}

	handleLoad() {
		getItems().then(response => response.json()).then(json => {
			console.log(json);
			var shopGoods = [];
			json.forEach(jitem => {
				shopGoods.push(
					<Paper>
						<ShopItem id={jitem.id} name={jitem.name} url={jitem.url} price={jitem.price}
								  amount={jitem.amount}/>
					</Paper>
				);
			});
			this.setState({
				shopItems: <Grid container justify="center" spacing={0}>
					{shopGoods}
				</Grid>
			});
		});
	}
}

export default Homepage;