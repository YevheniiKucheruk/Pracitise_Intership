import "./Hero.css"
import img1 from '../images/img1.png'
import Meeting from "./Meeting"
import Button from "./Button"
import Image from "./Image"
export default function Hero(props){
    return(
        <div className={props.class}>
            <Meeting class="hero_text" />
            <Button class ="hero_but" title ="Download CV"/>
            <Image class = "hero_img" src = {img1} />
        </div>
    )
}