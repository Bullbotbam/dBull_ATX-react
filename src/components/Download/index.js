import React from 'react';
import { FileDownloadIcon as Download } from '@mui/icons-material/FileDownload';

export const Download = () => {
	const downloadFile = () => {
		window.location.href =
			'https://docs.google.com/document/d/1Mo2_v1GARc66JF_9e56pqaQ--3O8rO7x4dgZxLf7Nhg/edit?usp=sharing';
	};
	return (
		<div>
			<Download onClick={downloadFile} />
		</div>
	);
};
