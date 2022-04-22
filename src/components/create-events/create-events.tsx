import React, { useRef } from 'react';
import ColorSelectorBox from '../../containers/color-selector-box';

interface CreateEventsProps {
	colors: Array<string>;
	onAddButtonClick: () => void;
	onSelectedColorClick: (color: string) => void;
	onTodoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CreateEvents({
	colors,
	onAddButtonClick,
	onTodoChange,
	onSelectedColorClick,
}: CreateEventsProps): JSX.Element {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<div id="create-event">
			<div className="preference">
				<p>create Event</p>
				<div className="input-area">
					<input
						ref={inputRef}
						type="text"
						onChange={onTodoChange}
						placeholder="할 일을 입력해 주세요"
					/>
					<button onClick={onAddButtonClick}>Add</button>
				</div>
				<div className="select-color"></div>
				<div className="color-selector">
					<p>color</p>
					{colors.map((color, index) => (
						<ColorSelectorBox
							data-testid={'colorBox'}
							key={index}
							color={color}
							onSelectedColorClick={onSelectedColorClick}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default CreateEvents;
