import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

function Auth({ children }) {
	const { data: session, status } = useSession();
	const router = useRouter();
	if (status === 'loading') return null;

	if (status === 'unauthenticated') {
		router.push('/');
		return null;
	} else {
		router.replace('/gallery');
	}
	return children;
}

export default Auth;
