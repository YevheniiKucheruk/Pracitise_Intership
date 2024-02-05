import DivText from "./DivText";

export default function Input(props){
    return(
        <div className={props.class}>
            <DivText class={props.class1} text={props.text1}/>
            <DivText class={props.class2} text={props.text2}/>
            <DivText class={props.class3} text={props.text3}/>
        </div>
    )
}