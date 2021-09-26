import {
	Typography,
	Card,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Container,
	CardActions,
	IconButton,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import useStyles from '../../styles';
import techBlog from '../../img/just-tech-blog.png';
import highfive from '../../img/highfive.PNG';
import noteTaker from '../../img/note-taker.png';
import dinnerNMovie from '../../img/dinner_n_movie.png';
import budget from '../../img/budget_tracker.gif';
import knowMore from '../../img/know-more.gif';

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

const Portfolio = () => {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />

			<main>
				<Container className={classes.cardGrid} maxWidth="md">
					<Grid container spacing={4}>
						{/*  mapping over cardInfo to get each project. The key of index allows each project to have a separate key */}
						{cardInfo.map((project, index) => (
							<Grid item key={index} xs={12} sm={6} md={4}>
								<Card
									className={classes.card}
									style={{ alignContent: 'center' }}
								>
									<CardMedia
										className={classes.cardMedia}
										image={project.img}
										title="Image title"
									/>
									<CardContent className={classes.CardContent}>
										<Typography gutterBottom variant="h5">
											{project.name}
										</Typography>
										<Typography style={{ fontWeight: 'bolder' }}>
											Dependencies:{' '}
										</Typography>
										<Typography>{project.dependencies}</Typography>
									</CardContent>
									<CardActions>
										<IconButton>
											<GitHubIcon
												onClick={() =>
													window.open(
														'https://github.com/Bullbotbam/just_tech_blog',
														'_blank'
													)
												}
											/>
										</IconButton>
										<IconButton>
											<HttpIcon fontSize="large" />
										</IconButton>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</>
	);
};

export default Portfolio;
