import React, { useEffect, useContext } from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';

import Layout from '../../src/components/layout';
import Top from '../../src/components/shared/top';
import Share from '../../src/components/shared/share';
import Content from '../../src/components/post/content';
import Menu from '../../src/components/post/menu';

import SiteContext from '../../src/utils/context';

export default function Post({ post, latest, popular, commentsCount }) {
    
    const { setTitle } = useContext(SiteContext);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const handleScroll = () => window.scrollY > 150 ? setTitle(post.title) : setTitle("");

    const content = (post) => 
        <div>
            <Head>
        		<title>Post</title>
      		</Head>
            <Top />
            <Share />
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <Content post={post} commentsCount={commentsCount} />
                </Grid>
                <Grid item xs={0} md={4}>
                    <Menu latest={latest} popular={popular} />
                </Grid>
            </Grid>
        </div>
    ;

    return <Layout content={content(post)} />;
}

export async function getServerSideProps(context) {
    
    const { slug } = context.params

    const [resPost, resLatest, resPopular, resCommentsCount] = await Promise.all([
        fetch(`http://localhost:3000/api/posts/${slug}`), 
        fetch(`http://localhost:3000/api/posts/latest`),
        fetch(`http://localhost:3000/api/posts/popular`),
        fetch(`http://localhost:3000/api/posts/${slug}/commentsCount`)
    ]);
    const [post, latest, popular, commentsCount] = await Promise.all([
        resPost.json(), 
        resLatest.json(),
        resPopular.json(),
        resCommentsCount.json(),
    ]);

    return { props: { post, latest, popular, commentsCount } };
}