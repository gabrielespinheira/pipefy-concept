import styles, { css } from 'styled-components';

export const Container = styles.div`
	position: fixed;
	top: 0; left: 0; right: 0; bottom: 0;
	z-index: 999;
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
	display: none;
	align-items: center;
	justify-content: center;

	${props => (props.status === 'active') && css`
		display: flex;
	`}

	.content {
		position: relative;
		background: #fff;
		border-radius: 5px;
		width: 500px;
		box-shadow: 0 3px 25px 5px rgba(0, 0, 0, 0.2);
		height: 500px;
		margin: auto;
		color: #444;
	}

	.close {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #ff4040;
		border-radius: 50%;
		width: 32px;
		height: 32px;
		line-height: 32px;
		border: none;
		position: absolute;
		right: -10px;
		top: -10px;
		color: #fff;
		font: 18px 'Roboto',sans-serif;
		cursor: pointer;
	}
`;
