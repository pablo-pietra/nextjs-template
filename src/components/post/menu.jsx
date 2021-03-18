import React from 'react';
import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import Separator from '../shared/separator';
import Follow from '../shared/follow';

import { formatDate } from '../../utils/functions';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.color.white,
        padding: theme.spacing(2),
        height: '100%',
    },
    follow: {
        display: 'flex',
    },
    icon: {
        marginLeft: theme.spacing(1),
    },
    other: {
        display: 'flex',
    },
    card: {
        border: 'none',
        backgroundColor: theme.palette.color.grey,
    },
    content: {
        paddingBottom: '0 !important',
    },
    image: {
        width: 150,
    },
}));

export default function Menu({ latest, popular }) {

    const classes = useStyles();
    const router = useRouter();

    const drawItem = (item) => 
    <Card className={classes.card} variant="outlined">
        <CardActionArea className={classes.other} onClick={() => router.push(`/post/${item.slug}`)}>
            <CardMedia
                component="img"
                height="100"
                image={`/images/${item.image}`}
                title={item.image.title}
                className={classes.image}
            />
            <CardContent className={classes.content}>
                <Typography variant="caption">
                    {formatDate(item.date)}
                </Typography>
                <Link underline="none" color="inherit">
                    <Typography variant="body1">{item.title}</Typography>
                </Link>
            </CardContent>
        </CardActionArea>
    </Card>;

    return (
        <div className={classes.root}>
            <Follow />
            <Separator marginV={2} marginH={0} />
            <Typography variant="h6" gutterBottom>Latest</Typography>
            <Grid container spacing={2}>
            { 
                latest.map((post) => 
                    <Grid item xs={12} key={post.id}>
                        { drawItem(post) }
                    </Grid>) 
            }     
            </Grid>
            <Separator marginV={2} marginH={0} />
            <Typography variant="h6" gutterBottom>Popular</Typography>
            <Grid container spacing={2}>
            { 
                popular.map((post) => 
                    <Grid item xs={12} key={post.id}>
                        { drawItem(post) }
                    </Grid>) 
            }     
            </Grid>
        </div>
    );
}