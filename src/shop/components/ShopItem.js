import React from 'react';

class ShopItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			text: props.text
		};
	}

	render() {
		return (
			<div>
				<div>
					{this.state.text}
				</div>
			</div>
		);
	}
}

export default ShopItem;
