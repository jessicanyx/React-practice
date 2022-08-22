import '../Styles/ColorRender.css';
export default function Color({hex, name, setBgColor}) {
    return (
        <button className="color-square" style={{backgroundColor: hex}} onClick={() => {setBgColor(hex)}}>
            <h2 className="color-name">{name}</h2>
        </button>
    )
}