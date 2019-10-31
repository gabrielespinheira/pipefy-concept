import React, { useContext } from 'react'

import { Container } from './styles'
import MainContext from '../Main/context'

export default function Header() {
  const { mode, handleToggleMode } = useContext(MainContext)

  return (
    <Container>
      <div id="board" className="dropdown left">
        <h1>Board</h1>

        <nav>
          <a href="/">Sprint</a>
          <a href="/">Kanban</a>
        </nav>
      </div>

      <div id="perfil" className="dropdown right">
        <span>Gabriel Araujo</span>
        <img src="https://api.adorable.io/avatars/100/7.png" alt="Avatar" />

        <nav>
          <a href="/">Perfil</a>
          <a href="/" onClick={handleToggleMode}>
            {mode === 'light' ? 'Dark' : 'Light'} mode
          </a>
          <a href="/logout">Sair</a>
        </nav>
      </div>
    </Container>
  )
}
