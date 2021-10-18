import {
	Typography,
	Card,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Container,
	CardActions,
	makeStyles,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import useStyles from '../../styles';
import farmgo from '../../assets/img/farmgo-logo.jpeg';
import highfive from '../../assets/img/highfive.PNG';
import deepThoughts from '../../assets/img/deep-thoughts.png';
import dinnerNMovie from '../../assets/img/dinner_n_movie.png';
import budget from '../../assets/img/budget_tracker.gif';
import knowMore from '../../assets/img/know-more.gif';
import { AnimationWrapper } from 'react-hover-animation';

const cardInfo = [
	{
		Project: 1,
		name: 'FarmGo Market',
		img: farmgo,
		github: 'https://github.com/Bullbotbam/farm-go',
		demo: 'https://farm-gomarket.herokuapp.com/',
		dependencies:
			'mongodb, express, react, node.js, graphql, apollo, mongoose, jsonwebtoken, material-ui, stripe, bcrypt',
	},
	{
		Project: 2,
		name: 'High5!',
		img: highfive,
		github: 'https://github.com/Bullbotbam/high-five',
		demo: 'https://evening-oasis-97339.herokuapp.com/',
		dependencies:
			'node, express, mysql, mysql2, sequelize, handlebars, dotenv, connect-session-sequelize, bcrypt,',
	},
	{
		Project: 3,
		name: 'Dinner and Movie',
		img: dinnerNMovie,
		github: 'https://github.com/Bullbotbam/dinner_n_movie',
		demo: 'https://bullbotbam.github.io/dinner_n_movie/',
		dependencies:
			'javascript, css, html, bulma, edamam api, the movie database api',
	},
	{
		Project: 4,
		name: 'Deep Thoughts',
		img: deepThoughts,
		github: 'https://github.com/Bullbotbam/deep-thoughts',
		demo: 'https://nameless-escarpment-98092.herokuapp.com/',
		dependencies:
			'graphql, mongoose, node.js, express, react, apollo-server-express, jsonwebtoken, material-ui, bcrypt',
	},
	{
		Project: 5,
		name: 'Budget Tracker',
		img: budget,
		github: 'https://github.com/Bullbotbam/budget-tracker',
		demo: 'https://warm-lowlands-12680.herokuapp.com/',
		dependencies: 'node.js, express, mongoose, morgan, compression, mongodb',
	},

	{
		Project: 6,
		name: 'Know More',
		img: knowMore,
		github: 'https://github.com/Bullbotbam/know-more',
		demo: 'https://www.youtube.com/watch?v=wVESsP6NQUo',
		dependencies: 'node.js, express, mongoose, mongodb',
	},
];

const Portfolio = () => {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />

			<main style={{ margin: '1rem' }}>
				<Container className={classes.cardGrid} maxWidth="lg">
					<Typography variant="h2">Recent Projects</Typography>
					<Grid container spacing={3} style={{ marginTop: '3rem' }}>
						{/*  mapping over cardInfo to get each project. The key of index allows each project to have a separate key */}
						{cardInfo.map((project, index) => (
							<Grid item key={index} xs={12} sm={6} md={4}>
								<AnimationWrapper>
									<Card
										className={`${classes.card} procard`}
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
											<a href={project.github} target="_blank" rel="noreferrer">
												<GitHubIcon fontSize="large" />
											</a>
											<a href={project.demo} target="_blank" rel="noreferrer">
												<HttpIcon fontSize="large" />
											</a>
										</CardActions>
									</Card>
								</AnimationWrapper>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</>
	);
};

export default Portfolio;
