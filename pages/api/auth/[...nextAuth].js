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
			async authorize(credentials) {
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
		jwt: true,
	},
	pages: {
		signIn: '/',
	},
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			return true;
		},
		async redirect({ url, baseUrl }) {
			return baseUrl;
		},
		async session({ session, token, user }) {
			return session;
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			return token;
		},
	},
};

export default NextAuth(authOptions);
