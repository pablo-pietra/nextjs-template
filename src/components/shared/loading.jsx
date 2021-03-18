import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  	root: {
    	textAlign: 'center',
    	padding: theme.spacing(2, 0),
  	},
}));

export default function Loading() {

  	const classes = useStyles();

  	return (
    	<div className={classes.root}>
      		<CircularProgress />
    	</div>
  	);
}
