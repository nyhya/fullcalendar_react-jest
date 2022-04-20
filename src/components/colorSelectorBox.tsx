import React from 'react';
import styled, { css } from "styled-components";

const ColorBox = styled.div`
&{
    display:inline-block;
    padding:5px;
    cursor:pointer;
}

&:first-child{
    padding-left:0;
}

div.colorBox{
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:
    ${props => props.color};
}
`;


interface IColorSelectorProps {
    color: string;
    click: (color: string) => void;
}




function ColorSelectorBox(props: IColorSelectorProps): JSX.Element {
    const { color, click } = props;
    const selectColor = () => {
        click(color)
    }
    return (
        <>
            <ColorBox color={color}>
                <div className="colorBox" onClick={selectColor}></div>
            </ColorBox>
        </>
    )
}

export default ColorSelectorBox;