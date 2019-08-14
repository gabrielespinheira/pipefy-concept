import React, { useContext } from 'react';
import { Container } from './styles';

import BoardContext from '../Board/context';
import Card from '../Card';
import { MdAdd } from 'react-icons/md';
import { useDrop } from 'react-dnd';

export default function List({ data, index: listIndex }) {
	const { move } = useContext(BoardContext);

	const [{ isActive }, drop] = useDrop({
		accept: 'CARD',
		drop(item, monitor) {
			const draggedListIndex = item.listIndex;
			const targetListIndex = listIndex;

			const draggedIndex = item.index;
			const targetIndex = data.cards.length;

			if (draggedListIndex === targetListIndex) {
				return;
			}

			move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
		},
		collect: monitor => ({
			isActive: monitor.canDrop() && monitor.isOver(),
		}),
	})

	return (
		<Container ref={drop} done={data.done}>
			<header>
				<h2>{data.title}</h2>
				{data.creatable && (
					<button type="button">
						<MdAdd size={24} color="#fff" />
					</button>
				)}
			</header>

			<div className="list">
				<ul>
					{ data.cards.map((card, index) => (
						<Card key={card.id} listIndex={listIndex} index={index} data={card} />
					)) }
				</ul>
			</div>
		</Container>
	);
}