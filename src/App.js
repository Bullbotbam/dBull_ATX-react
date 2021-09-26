import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
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

						<Route path="/projects" component={Portfolio} />
						<Route path="/contact" component={Contact} />
						<Route path="/resume" component={Resume} />
					</Switch>
				</div>
			</Router>
			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					<Footer />
				</Typography>
				<Typography variant="h5" align="center" style={{ color: '#757575' }}>
					&copy;2021 by dBull_ATX
				</Typography>
			</footer>
			;
		</div>
	);
}
export default App;
