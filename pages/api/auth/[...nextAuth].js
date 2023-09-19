import NextAuth from 'next-auth';

export const authOptions = {
	providers: [
		CredentialsProvider({
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
};

export default NextAuth(authOptions);
