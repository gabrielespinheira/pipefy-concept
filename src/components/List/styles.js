import styles, { css } from 'styled-components'

export const Container = styles.div`
	padding: 0 5px 0 15px;
	height: 100%;
	flex: 0 0 330px;

	ul li, header h2 {
		opacity: ${props => (props.done ? 0.6 : 1)}
	}

	& + div {
		border-left: 1px solid rgba(0, 0, 0, 0.05);
	}

	.dark & + div {
		border-left: 1px solid rgba(0,0,0,0.08);
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 42px;
		margin-bottom: 20px;
		margin-right: 10px;

		h2 {
			font-weight: 500;
			font-size: 16px;
			padding: 0 10px;
		}

		button {
			width: 42px;
			height: 42px;
			border-radius: 5px;
			background: #2196F3;
			border: 0;
			cursor: pointer;
			transition: all .3s;

			&:hover {
				background: #1e85fa;
				transition: all .3s;
			}
		}
	}

	.list {
		overflow-y: auto;
		max-height: calc(100% - 62px);

		&::-webkit-scrollbar-corner { background: 0 0; }

		&::-webkit-scrollbar { width: 6px; border-radius: 30px; }
		&::-webkit-scrollbar-track { background: #d9e3f0; border-radius: 30px; }
		&::-webkit-scrollbar-thumb { background: #c0d0e6; border-radius: 30px; }
		&::-webkit-scrollbar-thumb:hover { background: #9AAABE; border-radius: 30px; }

		.dark &::-webkit-scrollbar { width: 6px; border-radius: 30px; }
		.dark &::-webkit-scrollbar-track { background: #333; border-radius: 30px; }
		.dark &::-webkit-scrollbar-thumb { background: #555; border-radius: 30px; }
		.dark &::-webkit-scrollbar-thumb:hover { background: #888; border-radius: 30px; }
	}

	${props =>
    props.isActive &&
    css`
      .list ul {
        border: 2px dashed rgba(0, 0, 0, 0.2);
        padding-top: 31px;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
        cursor: grabbing;
        border-radius: 5px;
        min-height: 70px;

        p,
        img,
        header {
          opacity: 0;
        }

        .dark & {
          background: #666;
          border-color: #fff;
        }
      }
    `}
`
