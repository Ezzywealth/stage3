import React from 'react';

const LoaderWrapper = ({ children }) => {
	return (
		<div
			style={{
				border: '1px solid #ccc',
				display: 'flex',
				gap: '1rem',
				lineHeight: 2,
				padding: '1rem',
				margin: '0.5rem',
				width: '300px',
				padding: '1rem',
				justifyContent: 'center',
			}}>
			{children}
		</div>
	);
};

export default LoaderWrapper;
