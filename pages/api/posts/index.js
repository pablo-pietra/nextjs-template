import { posts } from '../data';

export default (req, res) => {
  res.status(200).json(posts)
}
