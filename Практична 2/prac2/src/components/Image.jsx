export default function Image(props){
    return(
        <div className={props.class}>
            <img src={props.src} alt="" srcset="" />
        </div>
    )
}