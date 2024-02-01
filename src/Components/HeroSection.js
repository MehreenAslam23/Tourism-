import { Link, NavLink } from "react-router-dom";
import "./HeroSectionStyle.css";
function HeroSection(props)
{
    return(
        <div>
            <div className={props.cName}>
               <img alt="Hero-image" src={props.heroImg}></img>
            </div>
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a to={props.url} className={props.btnClass} >{props.btnText}</a>
            </div>
        </div>
    )
}
export default HeroSection