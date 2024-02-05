import Rectangle from "./Rectangle";
import './Menu.css'
export default function Menu(props){
    return(
        <div className={props.class}>
            <Rectangle class="rec1_1"/>
            <Rectangle class="rec1_2"/>
            <Rectangle class="rec1_3"/>
        </div>
    )
}