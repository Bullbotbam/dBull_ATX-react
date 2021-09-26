import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';

function App() {
	return (
		<div className="app">
			<div className="row">
				<div className="col-11">
					<Navbar />
					<div className="home">
						<div className="col=1 App_about bg-white">
							<About></About>
						</div>
						<Contact />
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
