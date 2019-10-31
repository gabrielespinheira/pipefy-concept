import React, { useState } from 'react'

import MainContext from './context'

import GlobalStyle from '../../styles/global'
import Header from '../Header'
import Board from '../Board'

export default function Main() {
  const [mode, setMode] = useState('light')

  function handleToggleMode(e) {
    e.preventDefault()

    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  return (
    <MainContext.Provider value={{ mode, handleToggleMode }}>
      <main className={mode}>
        <Header />
        <Board />

        <GlobalStyle />
      </main>
    </MainContext.Provider>
  )
}
