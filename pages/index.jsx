import Head from 'next/head';

import Grid from '@material-ui/core/Grid';

import Layout from '../src/components/layout';
import Posts from '../src/components/index/posts';
import Menu from '../src/components/index/menu';
import Main from '../src/components/index/main';

export default function Home({ posts }) {

	const content = (posts) => (
		<div>
			<Head>
				<title>Index</title>
			</Head>
			<Main posts={posts} />
			<Grid container spacing={4}>
				<Grid item xs={12} md={8}>
					<Posts posts={posts} />
				</Grid>
				<Grid item xs={12} md={4}>
					<Menu />
				</Grid>
			</Grid>
		</div>
  );

  return <Layout content={content(posts)} />;
}

export async function getServerSideProps() {
    
  	const res = await fetch(`http://localhost:3000/api/posts`);
  	const posts = await res.json();
	  
	return { props: { posts } };
}
