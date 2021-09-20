import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
	// 	const [contactSelected, setContactSelected] = useState(false);
	// 	const [resumeSelected, setResumeSelected] = useState(false);

	// 	const [technologies] = useState([
	// 		{
	// 			name: 'JavaScript',
	// 			description: 'dinner_n_movie, Note taking app,',
	// 		},
	// 		{
	// 			name: 'node.js',
	// 			description: 'Team profiles, Note taking app,',
	// 		},
	// 		{
	// 			name: 'express.js',
	// 			description: 'high5!, Just Tech News,  e-shop',
	// 		},
	// 		{
	// 			name: 'Mongodb',
	// 			description: 'Know More, Budget Tracker, Pizza hunt ',
	// 		},
	// 	]);

	// 	const [currentTechnology, setCurrentTechnology] = useState(technologies[0]);

	return (
		<div className="app">
			<div className="row">
				<div className="col-11">
					<Navbar />
					<div className="home">
						<div className="col=1 App_about bg-white">
							<About></About>
						</div>
						<div className="home-btn">
							<button>Book It Now</button>
						</div>
					</div>
				</div>
			</div>
			<div className="col=1 App_footer bg-white">
				<Footer />
			</div>
		</div>
	);
}
export default App;
