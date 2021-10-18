import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	icon: {
		marginRight: '20px',
	},
	butons: {
		marginTop: '40px',
	},
	cardGrid: {
		padding: '20px 0',
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: '5px 0',
	},
	procard: {
		backgroundColor: '#ddd',
		border: 'none',
		color: 'black',
		padding: '16px 32px',
		textAlign: 'center',
		fontSize: '16px',
		margin: '4px 2px',
		transition: '0.3s',
		'procard:hover': {
			backgroundColor: '#3e8e41',
			color: 'white',
		},
	},
}));
export default useStyles;
