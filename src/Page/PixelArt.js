import React, {createContext, useContext, useState} from "react";
import '../Styles/PixelArt.css'
const ColorContext = createContext({

})
function ColorPicker () {
    const colors = ['#cd5c5c', '#ff8c00', '#ffdead', '#8fbc8b', '#add8e6', '#d8bfd8']
    const {setColor} = useContext(ColorContext)
    return (
        <div className="content">
            <h2 style={{color: '#ff1493', marginBottom: '10px'}}>Choose a color</h2>
            <div className="colorBtn">
                {colors.map(color => <button className="colorPicker" onClick={() => {setColor(color)}} key={color} style={{backgroundColor: color}}></button>)}
            </div>
        </div>
    )
}

function Pixel () {
    const {color} = useContext(ColorContext)
    const [PixelColor, setPixelColor] = useState('lightGrey')
    return (
       <div onClick={() => {setPixelColor(color)}} style={{width: '20px', height: '20px', backgroundColor: PixelColor, margin: '1px', cursor: 'pointer'}}></div> 
    )
}

function Picxels () {
    const pixels = []
    for (let i =0; i<100; i++) {
        pixels.push(<Pixel/>)
    }
    return (
        <div style={{width: '210px', display: 'Grid', gridTemplateColumns:'repeat(10, 1fr)', margin:'0 auto'}}>
            {pixels}
        </div>
    )
}

export default function PixelColor() {
    const [color, setColor] = useState('lightGrey')
    return (
        <ColorContext.Provider value={{color, setColor}}>
        <ColorPicker/>
        <Picxels/>
        </ColorContext.Provider>
    )
}