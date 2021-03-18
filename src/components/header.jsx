import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Fade from '@material-ui/core/Fade';
import Hidden from '@material-ui/core/Hidden';

import SiteContext from '../utils/context';

const useStyles = makeStyles((theme) => ({
    root: {
      	flexGrow: 1,
    },
    title: {
		flexGrow: 1,
		display: 'flex',
    },
    post: {
		margin: theme.spacing(0, 2),
		[theme.breakpoints.up('md')]: {
			marginLeft: theme.spacing(4),
      	}
    },
}));

export default function Header() {

    const classes = useStyles();
	const router = useRouter();
	const { title } = useContext(SiteContext);
  
    const handleClick = () => router.push("/");

    return (
      	<div className={classes.root}>
        	<AppBar position="fixed">
				<Toolbar>
					<div className={classes.title}>
						<Link underline="none" component="button" variant="h6" color="inherit" onClick={() => handleClick()}>
							Logo
						</Link>
						<Hidden smDown>
							<Fade in={title} className={classes.post}>
								<Typography variant="h6">{title}</Typography>
							</Fade>
						</Hidden>
					</div>
					<Link underline="none" component="button" variant="subtitle2" color="inherit" onClick={() => router.push("/about")}>
						About
					</Link>
				</Toolbar>
				<Hidden mdUp>
					<Fade in={title} className={classes.post}>
						<Typography variant="subtitle1" gutterBottom>{title}</Typography>
					</Fade>
				</Hidden>
        	</AppBar>
      	</div>
    );
}