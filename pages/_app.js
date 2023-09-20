import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import { Layout } from '../components/Layout';
import { SessionProvider } from 'next-auth/react';
import Auth from '../components/Auth';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<Provider store={store}>
			<SessionProvider session={session}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SessionProvider>
		</Provider>
	);
}

export default MyApp;
