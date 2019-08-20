import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import GlobalStyle from '../styles/global';
import styles from 'styled-components';

export default function Login({ history }) {
	return(
		<>{ history.push(`/`) }</>
	);
}
