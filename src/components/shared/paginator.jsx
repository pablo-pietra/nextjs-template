import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
      display: 'flex',
  },
}));

export default function Paginator({ items, itemsPerPage, handlePageChange }) {

	const classes = useStyles();
  	const [total, setTotal] = useState(0);
  	const [current, setCurrent] = useState(1);

  	useEffect(() => {
    	setTotal(Math.ceil(items / itemsPerPage));
  	}, []);

  	const handleChange = (event, value) => {
    	setCurrent(value);
    	handlePageChange(value);
  	};

  	return (
    	<div className={classes.root}>
      		<Pagination count={total} page={current} color="primary" onChange={handleChange} />
    	</div>
  	);
}
