import { comments } from '../../data';

export default (req, res) => {

    const { slug } = req.query
    res.status(200).json(comments.filter((comment) => comment.post === slug).length);
}