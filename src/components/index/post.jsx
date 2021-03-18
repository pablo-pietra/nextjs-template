import React from 'react';
import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { formatDate } from '../../utils/functions';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.color.grey,
    },
    title: {
        minHeight: '3em',
    },
    subtitle: {
        minHeight: '4.29em',
    },
    image: {
        transition: '0.3s ease',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
}));

export default function Post({ post }) {
  
    const classes = useStyles();
    const router = useRouter();

    const handleClick = (url) => router.push(url);

    const truncate = (text) => {
        const maxLength = 150;
        return text.length > maxLength ? text.slice(0, maxLength - 1) + "…" : text;
    };

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => handleClick(post.url)}>
                <CardMedia
                component="img"
                height="250"
                image={post.image.url}
                title={post.image.title}
                className={classes.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" className={classes.title}>
                        {post.title}
                    </Typography>
                    <Typography variant="caption" component="p">
                        {formatDate(post.date)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.subtitle}>
                        {truncate(post.subtitle)}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
