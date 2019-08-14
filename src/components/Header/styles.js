import styles from 'styled-components';

export const Container = styles.div`
	height: 80px;
	padding: 0 10px;
	background: #2196F3;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;

	h1 {
		font-weight: 500;
	}

	.dropdown {
		display: flex;
		align-items: center;
		padding: 10px 15px;
		border-radius: 5px 5px 0 0;
		position: relative;
		cursor: pointer;
		transition: all .3s;

		&:hover {
			span, h1 {
				color: #333;
				transition: all .3s;
			}

			nav {
				opacity: 1;
				visibility: visible;
				transition: all .3s;
			}
		}

		img {
			width: 32px;
			height: 32px;
			border-radius: 50%;
		}

		span {
			margin-right: 15px;
			font-size: 15px;
			color: #fff;
			transition: all .3s;
		}

		h1, span, img {
			z-index: 4;
		}

		nav {
			opacity: 0;
			visibility: hidden;
			position: absolute;
			top: 0;
			display: flex;
			flex-direction: column;
			padding-top: 50px;
			width: auto;
			min-width: 100%;
			height: auto;
			background: #fff;
			border-radius: 5px;
			overflow: hidden;
			border: 1px solid #fff;
			box-shadow: 0 3px 10px rgba(0, 0, 0, 0.07);
			transition: all .3s;
			z-index: 3;

			a {
				text-decoration: none;
				color: #333;
				padding: 10px 15px;

				&:hover {
					background: #ecf1f8;
				}
			}
		}

		&.right nav {
			right: 0;
		}

		&.left nav {
			left: 0;
		}

		&#board {
			max-width: 250px;
			width: 100%;
		}
	}
`;