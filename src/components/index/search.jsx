import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        placeItems: 'baseline',
    },
    button: {
        marginLeft: theme.spacing(2),
    },
}));

export default function Search({ handleSearchClick }) {
  
    const classes = useStyles();
    const [filter, setFilter] = useState("");

    return (
        <div className={classes.root}>
            <TextField id="filter" label="Search" variant="outlined" value={filter} onChange={(event) => setFilter(event.target.value)} margin="dense" fullWidth />
            <Button variant="contained" color="primary" onClick={() => handleSearchClick(filter)} className={classes.button}>Search</Button>
        </div>
    );
}
