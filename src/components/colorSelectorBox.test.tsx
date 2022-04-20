import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import ColorSelectorBox from 'components/colorSelectorBox';

describe('<ColorSelectorBox/>', () => {
	const myMock = jest.fn();
	const { container } = render(
		<ColorSelectorBox color="#F44336" click={myMock} />,
	);
	test('renders component correctly', () => {
		expect(container).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});

	test('renders', () => {
		render(<ColorSelectorBox color="#F44336" click={myMock} />);
		const colorBox = screen.getByTestId('colorBox');
		fireEvent.click(colorBox);
	});
});
