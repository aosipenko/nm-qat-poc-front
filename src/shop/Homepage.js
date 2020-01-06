import React from 'react';
import ShopItem from './components/ShopItem';
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";

class Homepage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Grid container justify="center" spacing={500}>
					<Paper>
						<ShopItem text = "Text One"/>
					</Paper>
					<Paper>
						<ShopItem text = "Text Three"/>
					</Paper>
					<Paper>
						<ShopItem text = "Text Three"/>
					</Paper>
				</Grid>
			</div>
		);
	}

}

export default Homepage;