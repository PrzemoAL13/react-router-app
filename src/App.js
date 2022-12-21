import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Card from "./components/Card";
import CardHook from "./components/CardHook";

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					{/* problem z przekazaniem props */}
					{/* <Route path='/card/:us' element={<Card />} /> */}
					<Route path='/cardhook' element={<CardHook />} />
					<Route path='/cardhook/:123' element={<CardHook />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
