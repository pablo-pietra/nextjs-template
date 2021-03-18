import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from './header';
import Footer from './footer';

const useStyles = makeStyles(theme => ({
	root: {
    	backgroundColor: theme.palette.color.grey,
  	},
  	container: {
      	marginTop: theme.spacing(8),
      	paddingTop: theme.spacing(2),
      	paddingBottom: theme.spacing(2),
  	},
}));

export default function Layout({ content }) {

	const classes = useStyles();

  	return  (
		<div className={classes.root}>
			<Header />
			<Container maxWidth="lg" className={classes.container}>
				{ 
					content 
				}
			</Container>
			<Footer />
		</div>
  	);
}