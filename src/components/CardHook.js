import React from "react";
import { useLocation } from "react-router-dom";

const usePathName = () => {
	const location = useLocation();
	return location.pathname;
};

const CardHook = () => {
	let myName = usePathName();
	return (
		<div
			className='ui raised very padded text container segment'
			style={{ marginTop: "80px" }}>
			<h3 className='ui header'>{myName}</h3>
		</div>
	);
};

export default CardHook;
