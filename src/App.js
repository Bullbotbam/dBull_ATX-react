import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';
function App() {
	return (
		<div className="app">
			<div className="row">
				<div className="col-11">
					<Navbar />
					<div className="home">
						<div className="home-text">
							<h1>Book your</h1>

							<h1 className="home-text-2">Project today!</h1>
						</div>
						<div className="home-btn">
							<button>Book It Now</button>
						</div>
					</div>
				</div>
				<div className="col=1 App_sidebar bg-white">
					<Sidebar />
				</div>
			</div>
		</div>
	);
}
export default App;
