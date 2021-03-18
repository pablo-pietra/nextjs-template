import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Featured from './featured';
import Follow from '../shared/follow';
import Separator from '../shared/separator';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    },
}));

export default function Main({ posts }) {

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" gutterBottom>Example</Typography>
                    <Typography variant="body1" gutterBottom>This is a blog example template created with React + Next + Material.</Typography>
                    <Typography variant="body1" gutterBottom>The topic choosen to fill with data is about famous nature places in Argentina.</Typography>
                    <Typography variant="body1" gutterBottom>In the "About" page you can see in detail and explained the libraries used.</Typography>         
                    <Typography variant="body1" gutterBottom>Also, do not forget to check the readme before install and configure it.</Typography>
                    <Separator marginV={2} marginH={0} />
                    <Follow />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Featured posts={posts} />
                </Grid>
            </Grid>
        </div>
        
    );
}