import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

const Navbar = () => {
	return (
		<nav className=' ui raised very padded segment'>
			<a className='ui teal inverted segment'>ABCDE</a>
			<div className='ui right floated header'>
				<button className='ui button'>
					<a href='/'>Home</a>
				</button>
				<button className='ui button'>
					<a href='/about'>About</a>
				</button>
				<button className='ui button'>
					<a href='/contact'>Contact</a>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
