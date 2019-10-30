import React from 'react'

import GlobalStyle from '../styles/global'
import styles from 'styled-components'

export default function Login({ history }) {
  function handleSubmit(e) {
    e.preventDefault()

    history.push(`/dashboard`)
  }

  return (
    <Container>
      <form>
        <div>
          <img src="/favicon.png" alt="" />
        </div>
        <input type="email" name="user" id="user" />
        <input type="password" name="pass" id="pass" />
        <button type="button" name="send" onClick={handleSubmit}>
          Login
        </button>
      </form>

      <GlobalStyle />
    </Container>
  )
}

export const Container = styles.main`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 320px;
		padding: 15px;

		div {
			display: flex;
			width: 100%;
			justify-content: center;
			align-items: center;
			margin-bottom: 30px;

			img {
				width: 32px;
				height: 32px;
			}
		}

		input {
			width: 100%;
			background: #fff;
			border-radius: 5px;
			box-shadow: 0 1px 4px 0 rgba(0,0,0,0.07);
			border: 0;
			padding: 15px;
			margin-bottom: 15px;
			font: 14px 'Roboto',sans-serif;
		}

		button {
			background: #2196F3;
			border-radius: 5px;
			padding: 15px;
			border: 0;
			cursor: pointer;
			color: #fff;
			font: 14px 'Roboto',sans-serif;
			width: 100%;
		}
	}
`
