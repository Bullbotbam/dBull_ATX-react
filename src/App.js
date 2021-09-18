import React from 'react';
import LandingPage from './components/LandingPage';
import PhotoAlbum from './components/PhotoAlbum';

function App() {
	return (
		<div>
			<>
				<LandingPage />
			</>
			):(
			<PhotoAlbum />
		</div>
	);
}
export default App;
