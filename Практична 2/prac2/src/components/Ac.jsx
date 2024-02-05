import Text from "./Text"
export default function Ac(props){
    const flexstyle = {
        display: 'flex',
    }
    return(
        <div className={props.class}>
            <div style={flexstyle}>
                <Text class={props.class1} text={props.text1}/>
                <Text class={props.class2} text={props.text2}/>
            </div>
            {props.text &&props.textclass ? <Text class={props.textclass} text={props.text}/> : []}
        </div>
    )
}