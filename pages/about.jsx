import Head from 'next/head';

import Layout from '../src/components/layout';

export default function About() {

	const content = () =>
    	<div>
      		<Head>
        		<title>About</title>
      		</Head>
    	</div>
  	;

  	return <Layout content={content()} />;
}
