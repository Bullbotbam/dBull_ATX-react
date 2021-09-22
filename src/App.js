import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

function App() {
	// 	const [currentTechnology, setCurrentTechnology] = useState(technologies[0]);
	const classes = useStyles();

	return (
		<div className="app">
			<Router>
				<div className="App">
					<Navbar />
					{/* <Route path="/" component={Home} /> */}

					<Switch>
						<Route path="/about" component={About} />

						<Route path="/projects" component={Projects} />
						<Route path="/contact" component={ContactForm} />
						<Route path="/resume" component={Resume} />
					</Switch>
				</div>
			</Router>
			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					<Footer />
				</Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary">
					A message or Social Media links
				</Typography>
			</footer>
			;
		</div>
	);
}
export default App;
