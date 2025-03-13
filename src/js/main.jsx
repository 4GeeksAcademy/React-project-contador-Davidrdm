// Import React into the bundle
import React from 'react';
import ReactDOM from 'react-dom/client';
// Include bootstrap npm library into the bundle


// Include your index.scss file into the bundle
import '../styles/index.css';
import SimpleCounter from './components/simpleCounter';


let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));

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