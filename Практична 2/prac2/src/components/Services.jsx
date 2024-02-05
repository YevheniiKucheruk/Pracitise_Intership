import Image from "./Image";
import './Services.css'
import Icon_1 from '../images/Icon_1.png'
import Icon_2 from '../images/Icon_2.png'
import Icon_3 from '../images/Icon_3.png'
import Icon_4 from '../images/Icon_4.png'
export default function Services(props){
    return(
        <div className={props.class}>
            <Image class='serve1' src={Icon_1}/>
            <Image class='serve2' src={Icon_2}/>
            <Image class='serve3' src={Icon_3}/>
            <Image class='serve4' src={Icon_4}/>
        </div>
    )
}