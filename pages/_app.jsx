import React, { useState } from 'react';
import '../styles/globals.css';
import { ThemeProvider, createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';

import SiteContext from '../src/utils/context';

const generateClassName = createGenerateClassName({
  	productionPrefix: 'myclasses-'
});

export default function MyApp({ Component, pageProps }) {

	const [title, setTitle] = useState("");

  	return (
		<StylesProvider generateClassName={generateClassName}>
			<React.Fragment>
				<ThemeProvider theme={theme}>
				<CssBaseline />
				<SiteContext.Provider value={{ title, setTitle }}>
					<Component {...pageProps} /></SiteContext.Provider>
				</ThemeProvider>
			</React.Fragment>
		</StylesProvider>
  	)
}
