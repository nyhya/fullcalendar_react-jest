import React, { useRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  test('renders correctly', () => {
    const { container } = render(<App />);
    /**
     * 외부 이벤트 리스트 렌더링
     */
    const externalEventList = screen.getByTestId('list');
    expect(externalEventList).toBeInTheDocument();

    /**
     * input 렌더링
     */
    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    expect(input).toBeInTheDocument();

    /**
     * Add 버튼 렌더링
     */
    const label = screen.getByText('Add');
    expect(input).toBeInTheDocument();

    /**
     * 스냅샷
     */
    expect(container).toMatchSnapshot();
  });

  test('input and button interation', () => {
    render(<App />);
    /**
     * input 입력
     */
    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    fireEvent.change(input, { target: { value: 'study react 1' } });

    /**
     * button 클릭
     */
    const externalEventList = screen.getByTestId('list');
    const length = externalEventList.childElementCount;
    const button = screen.getByText('Add');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(externalEventList.childElementCount).toBe(length + 2);
  });

  test('draggable element', () => {
    const param = { title: 'my event 1', color: '#0097a7', id: 0 };
    function eventData(param: { title: string, color: string, id: number }) {
      expect(param).toBe({ title: 'my event 1', color: '#0097a7', id: 0 });
    }
  });

  test('isRun', () => {
    const isRun = false;
    expect(isRun).toBeFalsy();
  });
});
