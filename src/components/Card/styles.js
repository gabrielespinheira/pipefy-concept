import styles, { css } from 'styled-components';

export const Container = styles.li`
	position: relative;
	background: #fff;
	border-radius: 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	padding: 15px;
	box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.07);
	border-top: 20px solid rgba(230, 236, 245, 0.4);
	cursor: grab;

	.dark & {
		background: #444;
		border-color: #555;
		box-shadow: 0 1px 7px 0 rgba(0,0,0,0.20);
	}

	header {
		position: absolute;
		top: -22px;
		left: 15px;
	}

	p {
		font-weight: 500;
		line-height: 20px;
	}

	img {
		width: 24px;
		height: 24px;
		border-radius: 4px;
		margin-top: 5px;
	}

	${props => props.isDragging && css`
		border: 2px dashed rgba(0, 0, 0, 0.2);
		padding-top: 31px;
		border-radius: 0;
		background: transparent;
		box-shadow: none;
		cursor: grabbing;
		border-radius: 5px;

		p, img, header {
			opacity: 0;
		}

		.dark & {
			background: #666;
			border-color: #fff;
		}
	`}

	${props => props.isActive && css`
		border: 2px dashed rgba(0, 0, 0, 0.2);
		padding-top: 31px;
		border-radius: 0;
		background: transparent;
		box-shadow: none;
		cursor: grabbing;
		border-radius: 5px;

		p, img, header {
			opacity: 0;
		}

		.dark & {
			background: #666;
			border-color: #fff;
		}
	`}
`;

export const Label = styles.span`
	width: 10px;
	height: 10px;
	border-radius: 2px;
	display: inline-block;
	margin-right: 7px;
	background: ${props => props.color}
`;