import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ScrollToTop from "react-scroll-to-top";

const useStyles = makeStyles((theme) => ({
    root: {
		backgroundColor: theme.palette.color.white,
		right: theme.spacing(2),
		bottom: theme.spacing(6),
		position: 'fixed',
		zIndex: '2',
		cursor: 'pointer',
		borderRadius: theme.spacing(1),
		width: theme.spacing(6),
		height: theme.spacing(6),
		transition:'opacity 1s ease-in-out',
		boxShadow: '0 9px 25px 0 rgba(132,128,177,0.28)',
		border: 'none',
		outline: 'none',
    },
}));

export default function Top() {

    const classes = useStyles();

    return (
		<ScrollToTop smooth top={150} component={<ArrowUpwardIcon />} className={classes.root} />
	);
}