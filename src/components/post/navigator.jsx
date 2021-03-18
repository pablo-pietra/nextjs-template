import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

export default function Navigator({ title }) {

    const classes = useStyles();
    const router = useRouter();
    
    return (
        <div className={classes.root}>
            <Link component="button" variant="subtitle2" onClick={() => router.push('/#posts')}>
                Posts
            </Link>
            <Typography variant="subtitle2">&nbsp;{`> ${title}`}</Typography>
        </div>
    );
}