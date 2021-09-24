import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const FileDownload = (props) => {
	const useStyles = makeStyles((theme) => {
		button: {
			margin: theme.spacing(1);
		}
	});
	const classes = useStyles();

	const downloadFile = () => {
		window.location.href =
			'https://docs.google.com/document/d/1Mo2_v1GARc66JF_9e56pqaQ--3O8rO7x4dgZxLf7Nhg/edit?usp=sharing';
	};

	return (
		<Button
			onClick={downloadFile}
			variant="contained"
			color="default"
			className={classes.button}
			startIcon={<CloudDownloadIcon />}
		>
			Resume
		</Button>
	);
};

export default FileDownload;
