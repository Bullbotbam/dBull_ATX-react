import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactForm from './components/ContactForm';

function App() {
	return (
		<div className="app">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/projects" component={Portfolio} />
					<Route exact path="/contact" component={ContactForm} />
					<Route exact path="/resume" component={Resume} />
					<Route path="/" component={Home} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}
export default App;



