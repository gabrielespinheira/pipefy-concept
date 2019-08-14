import React from 'react';

import { Container } from './styles';

export default function Header() {
	return (
		<Container>
			<div id="board" className="dropdown left">
				<h1>Board</h1>

				<nav>
					<a href="">Srpint</a>
					<a href="">Kanban</a>
				</nav>
			</div>

			<div id="perfil" className="dropdown right">
				<span>Gabriel Araujo</span>
				<img src="https://api.adorable.io/avatars/100/7.png" alt="Avatar" />

				<nav>
					<a href="">Perfil</a>
					<a href="">Sair</a>
				</nav>
			</div>
		</Container>
	);
}