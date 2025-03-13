import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../styles/index.css';
import SimpleCounter from './simpleCounter.jsx';

SimpleCounter.propTypes = {
	digitalFour:PropTypes.number,
	digitalThree:PropTypes.number,
	digitalTwo:PropTypes.number,
	digitalOne:PropTypes.number,
	
}


let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('app'));

setInterval(() => {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	
	root.render(
		<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
	);
}, 1000);
