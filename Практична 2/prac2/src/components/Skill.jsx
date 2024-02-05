import Rectangle from "./Rectangle";
import DivText from "./DivText";

export default function Skill(props){
    return(
        <div>
            <div className={props.class}>
                <DivText class={props.class1} text={props.text1}/>
            </div>
            <Rectangle class={props.clas3}/>
            <DivText class={props.class2} text={props.text2}/>
        </div>
    )
}