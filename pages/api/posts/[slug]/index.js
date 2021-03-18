import { posts } from '../../data';

export default (req, res) => {

    const { slug } = req.query
    res.status(200).json(posts.find((post) => post.slug === slug));
}