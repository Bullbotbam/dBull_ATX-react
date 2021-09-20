import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
	const [contactSelected, setContactSelected] = useState(false);
	const [resumeSelected, setResumeSelected] = useState(false);

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
					<Navbar
						contactSelected={contactSelected}
						setContactSelected={setContactSelected}
						resumeSelected={resumeSelected}
						setResumeSelected={setResumeSelected}
					/>
					<main className="home">
						{
							(!contactSelected,
							!resumeSelected ? (
								<>
									<About></About>
								</>
							) : (
								<ContactForm />
							))
						}
					</main>
				</div>
			</div>

			<Footer />
		</div>
	);
}
export default App;
