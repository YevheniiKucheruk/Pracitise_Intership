import Text from "./Text"
import ButtonBack from "./ButtonBack"
export default function Header(props){
    return(
        <div className={props.class}>
            {props.text ?
            <Text class={props.title_class} text={props.text}/>
            :
            []
            }
            {props.isButton ? 
            <ButtonBack func={()=>props.func('none')} class={props.but_class} title={props.but_title}/>
            : []
            }
        </div>
    )
}