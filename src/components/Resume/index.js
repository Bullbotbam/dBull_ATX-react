import React from 'react';
import { makeStyles, Card, CardActionArea, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

const Resume = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image="src/assets/resume/Resume 9_1_pdf.png"
					title="Donald Bull Resume"
				/>
			</CardActionArea>
		</Card>
	);
};

export default Resume;
