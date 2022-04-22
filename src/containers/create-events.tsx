import React, { useState } from 'react';
import CreateEventsComponent from '../components/create-events/create-events';
import { IExternalEventsSource } from './external-events';

export interface ExternalEventsContainerProps {
	addExternalEventSource: (
		newExternalEventsSources: IExternalEventsSource,
	) => void;
}

export function CreateEventsContainer({
	addExternalEventSource,
}: ExternalEventsContainerProps): JSX.Element {
	const [todo, setTodo] = useState<string>('');
	const [selectedColor, setSelectedColor] = useState<string>('');

	const colors: Array<string> = [
		'#F44336',
		'#e91E63',
		'#9C27B0',
		'#673AB7',
		'#3F51B5',
		'#2196F3',
	];

	const onTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodo(e.target.value);
	};

	const onSelectedColorClick = (color: string) => {
		console.log(color);
		setSelectedColor(color);
	};

	const onAddButtonClick = () => {
		addExternalEventSource({
			title: todo,
			color: selectedColor || '#F44336',
			id: 999,
		});
	};

	return (
		<CreateEventsComponent
			colors={colors}
			onAddButtonClick={onAddButtonClick}
			onTodoChange={onTodoChange}
			onSelectedColorClick={onSelectedColorClick}
		/>
	);
}

export default CreateEventsContainer;
