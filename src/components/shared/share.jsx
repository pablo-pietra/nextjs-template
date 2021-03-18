import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { WhatsApp, Facebook, Twitter, Email } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  	root: {
      	display: 'none',
      	[theme.breakpoints.up('md')]: {
			position: 'fixed',
			left: 0,
			top: theme.spacing(10),
			display: 'flex',
			flexDirection: 'column',
      	}
  	},
  	icon: {
		display: 'flex',
		padding: theme.spacing(1),
		marginBottom: theme.spacing(0.5),
		color: theme.palette.color.white,
		backgroundColor: theme.palette.primary.main,
		borderTopRightRadius: theme.spacing(2),
		borderBottomRightRadius: theme.spacing(2),
  	}
}));

export default function Share() {

  	const classes = useStyles();

  	return (
    	<div className={classes.root}>
      		<Typography variant="button">Share!</Typography>
      		<Link href="#" className={classes.icon}><WhatsApp /></Link>
      		<Link href="#" className={classes.icon}><Facebook /></Link>
      		<Link href="#" className={classes.icon}><Twitter /></Link>
      		<Link href="#" className={classes.icon}><Email /></Link>
    	</div>
  	);
}
