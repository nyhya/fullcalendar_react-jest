import React from 'react';
import ColorSelectBoxComponent from '../components/color-selector/color-selector-box';

interface ColorSelectorBoxProps {
	color: string;
	onSelectedColorClick: (color: string) => void;
}

export function ColorSelectBoxContainer({
	color,
	onSelectedColorClick,
}: ColorSelectorBoxProps): JSX.Element {
	return (
		<ColorSelectBoxComponent color={color} onClick={onSelectedColorClick} />
	);
}

export default ColorSelectBoxContainer;
