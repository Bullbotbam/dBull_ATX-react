import { Container } from '@material-ui/core';
import React from 'react';

function Content(props) {
	return (
		<>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<PhotoCamera className={classes.icon} />
					<Typography variant="h6">Photo Album</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div className={classes.container}>
					<Container maxWidth="sm">
						<Typography
							variant="h2"
							align="center"
							color="textPrimary"
							gutterBottom
						>
							Photo Album
						</Typography>
						<Typography
							variamt="h5"
							align="center"
							color="textSecondary"
							paragraph
						>
							This is the beinning of then end of the beginning of the start to
							get ready to end the beginning and so on and so on.
						</Typography>
						<div className={classes.buttons}>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Button variant="contained" color="primary">
										See My Phtos
									</Button>
									<Button variant="outlined" color="primary">
										Secondary Action
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
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
			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary">
					A message or Social Media links
				</Typography>
			</footer>
		</>
	);
}

export default Content;
