import Color from './Color'
import '../Styles/ColorRender.css';
import { useState } from 'react';

const colors = [
  {
    hex: "#cd5c5c",
    name: "red",
  },
  {
    hex: "#ff8c00",
    name: "orange",
  },
  {
    hex: "#ffdead",
    name: "yellow",
  },
  {
    hex: "#8fbc8b",
    name: "green",
  },
  {
    hex: "#add8e6",
    name: "blue",
  },
  {
    hex: "#d8bfd8",
    name: "purple",
  },
];

function ColorRender() {
  const [backgroundColor, setBgColor] = useState('white')
  return (
    <div className="colorRender" style={{backgroundColor}}>
        {colors.map(color => <Color key={color.hex} hex={color.hex} name={color.name} setBgColor={setBgColor}/>)}
    </div>
  );
}

export default ColorRender;
