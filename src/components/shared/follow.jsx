import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Instagram, Facebook, Twitter } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginLeft: theme.spacing(1),
        height: 22,
    },
}));

export default function Follow() {

    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Typography variant="subtitle2" display="inline">Follow us and stay tuned:</Typography>
        <Link href="#" className={classes.icon}><Instagram /></Link>
        <Link href="#" className={classes.icon}><Facebook /></Link>
        <Link href="#" className={classes.icon}><Twitter /></Link>
      </div>
    );
}