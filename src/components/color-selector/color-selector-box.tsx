import React from 'react';
import styled, { css } from 'styled-components';

const ColorBox = styled.div`
	& {
		display: inline-block;
		padding: 5px;
		cursor: pointer;
	}

	&:first-child {
		padding-left: 0;
	}

	div.colorBox {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: ${props => props.color};
	}
`;

interface ColorSelectorBoxProps {
	color: string;
	onClick: (color: string) => void;
}

export function ColorSelectorBox({
	onClick,
	color,
}: ColorSelectorBoxProps): JSX.Element {
	return (
		<ColorBox color={color}>
			<div
				data-testid="colorBox"
				className="colorBox"
				onClick={() => {
					onClick(color);
				}}
			></div>
		</ColorBox>
	);
}

export default ColorSelectorBox;
