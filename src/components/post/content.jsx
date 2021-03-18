import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Timer from '@material-ui/icons/Timer';

import Separator from '../shared/separator';
import Navigator from './navigator';
import Comments from './comments';

import { formatDate, readTime } from '../../utils/functions';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('md')]: {
            backgroundColor: theme.palette.color.white,
            padding: theme.spacing(2),
        }
    },
    timer: {
        marginTop: theme.spacing(1),
        backgroundColor: theme.palette.color.grey,
    },
    image: {
        margin: theme.spacing(2, 0),
    },
}));

export default function Content({ post, commentsCount }) {

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Navigator title={post.title} />
            <Separator marginV={2} marginH={0} />
            <Typography variant="caption" gutterBottom>{formatDate(post.date)}</Typography>
            <Typography variant="h5" gutterBottom>{post.title}</Typography>
            <Typography variant="subtitle2" gutterBottom>{post.subtitle}</Typography>
            <Chip
                icon={<Timer />}
                size="small"
                label={`Reading time: ${readTime(post.content)} minutes.`}
                className={classes.timer}
            />
            <div className={classes.image}>
                <img src={`/images/${post.image}`} title={post.title} width="100%" />
                <Typography variant="caption" gutterBottom>{post.caption}</Typography>
            </div>
            <Typography variant="body2">{post.content}</Typography>
            <Separator marginV={2} marginH={0} />
            <Comments quantity={commentsCount} />
        </div>
    );
}