import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

import Loading from '../shared/loading';
import { formatDate } from '../../utils/functions';

const useStyles = makeStyles((theme) => ({
    comment: {
        padding: theme.spacing(2, 2),
        margin: theme.spacing(1, 0),
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
        placeItems: 'center',
    },
    comments: {
        
    },
    leaveComment: {

    },
}));

export default function Comments({ quantity }) {

    const classes = useStyles();
    const router = useRouter();
    const [comments, setComments] = useState(null);
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [showRequiredMessage, setShowRequiredMessage] = useState(false);

    useEffect(() => {
        setShow(false);
    }, [router.push]);

    const handleClick = () => {
        setShow(!show);
        const fetchData = async () => {
            const { slug } = router.query;
            const res = await fetch(`http://localhost:3000/api/posts/${slug}/comments`); 
            const comments = await res.json();
            setComments(comments);
        };
        fetchData();
    };

    const handleSendClick = () => {
        if (name && email && comment) {
            setName("");
            setEmail("");
            setComment("");
            setShowRequiredMessage(false);
        } else {
            setShowRequiredMessage(true);
        }
    }

    const drawComment = (comment) => 
        <div className={classes.comment} key={comment.id}>
            <Typography variant="subtitle1">{comment.author}</Typography>
            <Typography variant="caption">{formatDate(comment.date)}</Typography>
            <Typography variant="body2">{comment.message}</Typography>
        </div>;

    return (
        <div>
            <div className={classes.comments}>
                <Typography variant="h6" gutterBottom>Comments ({quantity})</Typography>
                { show ? comments ? 
                    comments.map((comment) => drawComment(comment)) : <Loading /> 
                    : <div className={classes.button}>{ quantity > 0 ? 
                        <Button variant="contained" color="primary" onClick={handleClick}>Show</Button> : 
                        <Typography variant="caption">There is no comments yet, be the first!</Typography> }</div>
                }
            </div>
            <div className={classes.leaveComment}>
                <Typography variant="h6" gutterBottom>Leave a comment</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField id="name" label="Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)} margin="dense" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField id="email" label="Email" variant="outlined" value={email} onChange={(event) => setEmail(event.target.value)} margin="dense" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="comment" label="Comment" variant="outlined" value={comment} onChange={(event) => setComment(event.target.value)} margin="dense" fullWidth multiline rows={5} />
                    </Grid>
                </Grid>
                <div className={classes.button}>
                    <Fade in={showRequiredMessage}>
                        <Typography variant="caption">All fields are required.</Typography>
                    </Fade>
                    <Button variant="contained" color="primary" onClick={handleSendClick}>Send</Button>
                </div>
            </div>
        </div>
    );
}