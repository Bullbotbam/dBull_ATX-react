import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import ContactForm from './components/ContactForm';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

function App() {
	const classes = useStyles();

	return (
		<div className="app">
			<Router>
				<div className="App">
					<Navbar />

					<Switch>
						<Route path="/" component={About} />
						<Route path="/projects" component={Portfolio} />
						<Route path="/contact" component={ContactForm} />
						<Route path="/resume" component={Resume} />
					</Switch>
				</div>
			</Router>
			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					<Footer />
				</Typography>
			</footer>
			;
		</div>
	);
}
export default App;
