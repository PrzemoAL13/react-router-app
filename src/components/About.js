import React from "react";
import "./modal.css"; 	

const About = () => {
	return (
		<div>
			<div className='modal'>
				<div className='modal-content'>
					<h3>i am a modal</h3>
				</div>
			</div>
			<div
				className='ui raised very padded text container segment'
				style={{ marginTop: "80px" }}>
				<h3 className='ui header'>About</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
					minus molestiae vel beatae natus eveniet.
				</p>
			</div>
		</div>
	);
};

export default About;
