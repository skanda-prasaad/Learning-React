import myImage from "../src/assets/globe.jpg";

export default function Header(){
    return (
        <header className="head">
            <img src={ myImage } alt="globe" />
            <h3>my travel journey.</h3>
        </header>
    )
}