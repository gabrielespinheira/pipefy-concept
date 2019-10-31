import React, { useState } from 'react'
import { Container } from './styles'

import { MdClose } from 'react-icons/md'

export default function Popup() {
  const [status, setStatus] = useState('active')

  function handleClose(e) {
    e.preventDefault()

    setStatus('disabled')
  }

  return (
    <Container status={status}>
      <div className="content">
        Teste
        <button className="close" onClick={handleClose}>
          <MdClose />
        </button>
      </div>
    </Container>
  )
}
