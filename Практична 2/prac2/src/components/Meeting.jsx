import Text from "./Text"
import "./Meeting.css"
export default function Meeting(props){
    return(
        <div className={props.class}>
            <Text class = 'meeting' text = 'Hello <br> I’m John <br>Doe'/>
            <Text class = 'description' text = 'A full stack allaround  designer that tristique est placerat in massa <i><strong>consectetur quisque</strong></i> lobortis Vitae faucibus diam consequat maecenas turpis.'/>
        </div>
    )
}