import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe("<App/>", () => {
  test("renders correctly", () =>{
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
  })


  test("input and button interation", () => {
    render(<App/>);
    /**
     * input 입력
     */
    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    fireEvent.change(input, { target:{value:'study react 1'}});

    /**
     * button 클릭
     */
    const button = screen.getByText('Add');
    fireEvent.click(button);


  })

})

