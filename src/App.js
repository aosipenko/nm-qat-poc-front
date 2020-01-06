import React from 'react';
import './App.css';
import "react-table/react-table.css";
import Homepage from "./shop/Homepage";

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div>
				<Homepage/>
			</div>
		);
	}

}

export default App;
