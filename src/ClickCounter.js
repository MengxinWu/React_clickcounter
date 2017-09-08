import React, { Component } from 'react';

class ClickCounter extends Component {
	constructor(props) {
		super(props);
		this.onClickButton = this.onClickButton.bind(this);
		this.state = { count: 0 };
	}

	onClickButton() {
		this.setState({ count: this.state.count + 1 });
	}

	render() {
		const conterStyle = {
			margin: '25px'
		};
		return (
			<div style={conterStyle}>
				<button onClick={this.onClickButton}> Click Me </button>
				<div>
					Click Count: <span id='clickcount'> {this.state.count} </span>
				</div>
			</div>
		);
	}
}

export default ClickCounter;