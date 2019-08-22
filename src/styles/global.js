import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,600i&display=swap');

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html, body, #root {
		height: 100%;
	}

	body {
		font: 14px 'Roboto', sans-serif;
		background: #ecf1f8;
		color: #333;
		-webkit-font-smoothing: antialiased !important;
		overflow: hidden;
	}

	main {
		height: 100%;

		&.dark {
			background: #333;
			color: #fff;
		}
	}

	ul {
		list-style: none;
	}

	.popup-content {
		border: 0 !important;
		border-radius: 5px;
		padding: 15px 20px !important;

		.modal {
			color: #444;

			.close {
				position: absolute;
				top: 4px;
				right: 4px;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #555;
				font-size: 23px;
				cursor: pointer;
				width: 32px;
				height: 32px;
				line-height: 40px;
			}

			h1 {
				font-size: 25px;
				font-weight: 300;
				margin-bottom: 20px;
			}

			.info {
				display: flex;
				width: 100%;

				div {
					display: flex;
					align-items: center;
					border: 1px solid #eee;
					border-radius: 5px;
					padding: 7px 10px;
					margin-right: 10px;

					img {
						width: 32px;
						height: 32px;
						border-radius: 5px;
						margin-right: 10px;
					}

					span {
						margin-right: 0;
					}
				}
			}
		}
	}
`;