import {
	Typography,
	Backdrop,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Container,
	CardActions,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import useStyles from '../../styles';
import techBlog from '../../img/just-tech-blog.png';
const cardInfo = [
	{
		Project: 1,
		name: 'Project 1',
		img: '$img',
		github: '$github',
		demo: '$demo',
		technologies: 'technologies',
	},
	{
		Project: 2,
		name: 'Project 2',
		img: '$img',
		github: '$github',
		demo: '$demo',
		technologies: 'technologies',
	},
	{
		Project: 3,
		name: 'Project 3',
		img: '$img',
		github: '$github',
		demo: '$demo',
		technologies: 'technologies',
	},
	{
		Project: 4,
		name: 'Project 4',
		img: '$img',
		github: '$github',
		demo: '$demo',
		technologies: 'technologies',
	},
	{
		Project: 5,
		name: 'Project 5',
		img: '$img',
		github: '$github',
		demo: '$demo',
		technologies: 'technologies',
	},
	{
		Project: 6,
		name: 'Just Tech Blog',
		img: techBlog,
		github: 'https://github.com/Bullbotbam/just_tech_blog',
		demo: 'https://afternoon-anchorage-01216.herokuapp.com/login',
		dependencies:
			'express express-handlebars mysql2 sequelize dotenv bcrypt express-sessions connect-sessions-sequelize',
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
										<GitHubIcon />

										<HttpIcon fontSize="large" />
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
