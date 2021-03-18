import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  	root: {
      	padding: props => theme.spacing(props.marginV, props.marginH),
  	},
}));

export default function Separator(props) {

  	const classes = useStyles(props);

  	return (
    	<div className={classes.root}>
      		<Divider />
    	</div>
  	);
}
