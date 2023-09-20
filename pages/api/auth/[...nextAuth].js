import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions = {
	providers: [
		CredentialsProvider({
			id: 'credentials',
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text', placeholder: 'user@example.com' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				const user = { id: '1', name: 'J Smith', email: 'user@example.com', password: '1Password' };
				if (user.email === credentials.email && user.password === credentials.password) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	session: {
		jwt: true, // Enable JSON Web Tokens for session management
	},
	unauthorizedRedirect: '/',
	callbacks: {
		async redirect({ url, baseUrl }) {
			// Allows relative callback URLs
			if (url === '/') return baseUrl;
			else if (url.startsWith('/')) return `${baseUrl}${url}`;
			// Allows callback URLs on the same origin
			else if (new URL(url).origin === baseUrl) return url;
			return baseUrl;
		},
	},
};

export default NextAuth(authOptions);
