import { posts } from '../data';

export default (req, res) => {
  res.status(200).json(posts.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)).slice(0, 3))
}
