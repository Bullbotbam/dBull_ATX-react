import React from 'react';
import { makeStyles } from '@material-ui/core';

import techBlog from '../../assets/img/just-tech-blog.png';
import highfive from '../../assets/img/highfive.PNG';
import noteTaker from '../../assets/img/note-taker.png';
import dinnerNMovie from '../../assets/img/dinner_n_movie.png';
import budget from '../../assets/img/budget_tracker.gif';
import knowMore from '../../assets/img/know-more.gif';

const cardInfo = [
	{
		Project: 1,
		name: 'High5!',
		img: highfive,
		github: 'https://github.com/Bullbotbam/high-five',
		demo: '$demo',
		dependencies:
			'node, express, mysql, mysql2, sequelize, handlebars, dotenv, connect-session-sequelize, bcrypt,',
	},
	{
		Project: 2,
		name: 'Dinner and Movie',
		img: dinnerNMovie,
		github: 'https://github.com/Bullbotbam/dinner_n_movie',
		demo: 'https://bullbotbam.github.io/dinner_n_movie/',
		dependencies:
			'JavaScript, CSS, HTML, Bulma, Edamam API, The Movie Database API',
	},
	{
		Project: 3,
		name: 'Budget Tracker',
		img: budget,
		github: 'https://github.com/Bullbotbam/budget-tracker',
		demo: 'https://warm-lowlands-12680.herokuapp.com/',
		dependencies: 'node.js, express, mongoose, morgan, compression, MongoDB',
	},
	{
		Project: 4,
		name: 'Note Taker',
		img: noteTaker,
		github: 'https://github.com/Bullbotbam/Note-taking-app',
		demo: 'https://stark-castle-00977.herokuapp.com/',
		dependencies: 'node.js, express, inquire, mysql, uuidv4',
	},
	{
		Project: 5,
		name: 'Know More',
		img: knowMore,
		github: 'https://github.com/Bullbotbam/know-more',
		demo: 'https://www.youtube.com/watch?v=wVESsP6NQUo',
		dependencies: 'node.js, express, mongoose, MongoDB',
	},
	{
		Project: 6,
		name: 'Just Tech Blog',
		img: techBlog,
		github: 'https://github.com/Bullbotbam/just_tech_blog',
		demo: 'https://afternoon-anchorage-01216.herokuapp.com/login',
		dependencies:
			'node.js, express, express-handlebars, mysql2, sequelize, dotenv, bcrypt, express-sessions, connect-sessions-sequelize',
	},
];

const useStyles = makeStyles((theme) => ({}));
export default function () {
	const classes = useStyles();
	return (
		<div>
			<h1>dbull_ATX</h1>
		</div>
	);
}
