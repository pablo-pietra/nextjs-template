import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.color.white,
        padding: theme.spacing(2),
        height: '100%',
    },
}));

export default function Menu() {

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            
        </div>
    );
}