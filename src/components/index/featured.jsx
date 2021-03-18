import React from 'react';
import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Star from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 0,
    },
    chip: {
        color: "#FFFFFF",
        position: "absolute",
        margin: theme.spacing(1),
    },
    cardContent: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: '100%',
        color: '#FFFFFF',
        position: 'absolute',
        bottom: 0,
    },
}));

export default function Featured({ posts }) {
  
    const classes = useStyles();
    const router = useRouter();

    const mapItem = (post) => ({
        title: post.title,
        url: `/post/${post.slug}`,
        image: {
            url: `images/${post.image}`,
            title: post.title,
        },
    });

    const handleOnClick = (url) => router.push(url);
    
    const Item = ({post}) =>
        <Card className={classes.root}>
            <CardActionArea onClick={() => handleOnClick(post.url)}>     
                <Chip icon={<Star />} size="small" label="Featured" color="primary" className={classes.chip} />
                <CardMedia
                    component="img"
                    height="250"
                    image={post.image.url}
                    title={post.image.title}
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="subtitle1" className={classes.title}>
                        {post.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    return (
        <Carousel navButtonsAlwaysInvisible={true} animation="fade" interval={5000}>
            {
                posts.map( (post, i) => <Item key={i} post={mapItem(post)} /> )
            }
        </Carousel>
    )
}
