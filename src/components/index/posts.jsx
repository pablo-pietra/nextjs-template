import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Paginator from '../shared/paginator';
import Search from './search';
import Post from './post';

import { searchText } from '../../utils/functions';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.color.white,
        padding: theme.spacing(2),
    },
}));

export default function Posts({ posts }) {

    const classes = useStyles();
    const postsPerPage = 4;
    const [page, setPage] = useState(1);
    const [text, setText] = useState("");

    const mapItem = (post) => ({
        title: post.title,
        subtitle: post.subtitle,
        url: `/post/${post.slug}`,
        date: post.date,
        image: {
            url: `images/${post.image}`,
            title: post.title,
        },
    });

    const handlePageChange = (page) => setPage(page);

    const handleSearchClick = (text) => setText(text);

    return (
        <div className={classes.root}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h5">Posts</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Search handleSearchClick={handleSearchClick} />
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
            {
                posts
                    .filter((post) => !text || searchText(text, post.title))
                    .slice((page - 1) * postsPerPage, ((page - 1) * postsPerPage) + postsPerPage)
                    .map((post) => 
                        <Grid item xs={12} md={6} key={post.id}>
                            <Post post={mapItem(post)} />
                        </Grid>
                    )
            }    
            </Grid>
            <Paginator items={posts.length} itemsPerPage={postsPerPage} handlePageChange={handlePageChange} />
        </div>
    );
}
