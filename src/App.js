import React from 'react';
import LandingPage from './components/LandingPage';
import PhotoAlbum from './components/PhotoAlbum';

function App() {
	const [contactSelected, setContactSelected] = useState(false);
	const [technologies] = useState([
		{
			name: 'JavaScript',
			description: 'dinner_n_movie, Note taking app,',
		},
		{
			name: 'node.js',
			description: 'Team profiles, Note taking app,',
		},
		{
			name: 'express.js',
			description: 'high5!, Just Tech News,  e-shop',
		},
		{
			name: 'Mongodb',
			description: 'Know More, Budget Tracker, Pizza hunt ',
		},
	]);

	const [currentTechnology, setCurrentTechnology] = useState(technologies[0]);
	return (
		<div>
			<PhotoAlbum />
		</div>
	);
}
export default App;
