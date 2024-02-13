export default function ButtonBack(props){
    return(
        <div onClick={props.func} className={props.class}>
            {props.title}
        </div>
    )
}