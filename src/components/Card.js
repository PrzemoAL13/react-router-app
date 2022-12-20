import React from "react";

class Card extends React.Component {
	// user = { user: "" };

	// componentDidMount() {
	// 	// let user = this.props.match.params.user;
	// 	let user = this.props.match;
	// 	console.log(this.props.match);
	// 	// this.setState({ user: user });
	// }

	render() {
		// const { user } = this.state;
		return (
			<div
				className='ui raised very padded text container segment'
				style={{ marginTop: "80px" }}>
				<h3 className='ui header'>Card</h3>
			</div>
		);
	}
}

export default Card;
