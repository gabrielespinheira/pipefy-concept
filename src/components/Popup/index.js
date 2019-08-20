import React, { useState } from 'react';
import { Container } from './styles';

import { MdClose } from "react-icons/md";

export default function Popup() {
	const [status, setStatus] = useState('disabled');

	function handleClose(e) {
		e.preventDefault();

		setStatus('active');
	}

	return (
		<Container status={status}>
			<div className="content">
				Teste

				<button className="close" onClick={handleClose}><MdClose /></button>
			</div>
		</Container>
	);
}