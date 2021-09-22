import {
	Typography,
	AppBar,
	Backdrop,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Toolbar,
	Container,
	CardActions,
} from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import useStyles from '../../styles';

const cards = [1, 2, 3, 4, 5, 6];

const Projects = () => {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<AttachFileIcon className={classes.icon} />
					<Typography variant="h6">Past Projects</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<Container className={classes.cardGrid} maxWidth="md">
					<Grid container spacing={4}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image="https://source.unsplash.com/random"
										title="Image title"
									/>
									<CardContent className={classes.CardContent}>
										<Typography gutterBottom variant="h5">
											Heading
										</Typography>
										<Typography>
											This is a media card to be used for card content. There
											may need to be more information to get the proper
											perspective.
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" color="primary">
											View
										</Button>
										<Button size="small" color="primary">
											Edit
										</Button>
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

export default Projects;
