import DivText from "./DivText";
import Image from "./Image";
import Vector1 from '../images/Vector (1).png'
import Vector2 from '../images/Vector (2).png'
import Vector3 from '../images/Vector (3).png'
import Vector4 from '../images/Vector.png'
import './Footer.css'

export default function Footer(props){
    return(
        <div className={props.class}>
            <div className="btns">
                <Image class='be' src={Vector4}/>
                <Image class='twit'src={Vector1}/>
                <Image class='face' src={Vector2}/>
                <Image class='youtube' src={Vector3}/>
            </div>
            <DivText class='copyright' text='© Carlo CIccarelli 2022.'/>
        </div>
    )
}