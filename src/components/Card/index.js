import React, { useRef, useContext } from 'react';
import { Container, Label } from './styles';

import BoardContext from '../Board/context';
import Popup from "reactjs-popup";
import { MdClose, MdLabelOutline } from "react-icons/md";

import { useDrag, useDrop } from 'react-dnd';

export default function Card({ data, index, listIndex }) {
	const ref = useRef();
	const { move } = useContext(BoardContext);

	const [{ isDragging }, dragRef] = useDrag({
		item: { type: 'CARD', index, listIndex },
		collect: monitor => ({
			isDragging: monitor.isDragging(),
		})
	});

	const [{ isActive }, dropRef] = useDrop({
		accept: 'CARD',
		collect: monitor => ({
			isActive: monitor.canDrop() && monitor.isOver(),
		}),
		hover(item, monitor) {
			const draggedListIndex = item.listIndex;
			const targetListIndex = listIndex;

			const draggedIndex = item.index;
			const targetIndex = index;

			if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
				return;
			}

			const targetSize = ref.current.getBoundingClientRect();
			const targetCenter = (targetSize.bottom - targetSize.top) / 2;

			const draggedOffset = monitor.getClientOffset();
			const draggedTop = draggedOffset.y - targetSize.top;

			if (draggedIndex < targetIndex && draggedTop < targetCenter) {
				return;
			}

			if (draggedIndex > targetIndex && draggedTop > targetCenter) {
				return;
			}

			move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

			item.index = targetIndex;
			item.listIndex = targetListIndex;
		}
	});

	dragRef(dropRef(ref));

	return (
		<Popup trigger={
			<Container ref={ref} isDragging={isDragging} isActive={isActive}>
				<header>
					{ data.labels.map(label => <Label key={label} color={label} />) }
				</header>
				<p>{data.content}</p>
				{ data.user && <img src={data.user} alt="" /> }
			</Container>
		} modal>
			{close => (
				<div className="modal">
					<a className="close" onClick={close}><MdClose /></a>

					<h1>{data.content}</h1>

					<div className="info">
						<div>
							{ data.user && <img src={data.user} alt="" /> }
							<span>Gabriel Araujo</span>
						</div>

						{data.labels.length > 0 &&
						<div>
							{ data.labels.map(label => <Label key={label} color={label} />) }
						</div>
						}
					</div>

					<p>Lorem ipsum dolor set amel Lorem ipsum dolor set amel Lorem ipsum dolor set amel Lorem ipsum dolor set amel Lorem ipsum dolor set amel Lorem ipsum dolor set amel</p>
				</div>
			)}
		</Popup>
	);
}