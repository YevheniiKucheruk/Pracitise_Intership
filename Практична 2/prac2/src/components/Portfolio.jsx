import Text from "./Text";
import Image from "./Image";
import DivText from "./DivText";
import './Portfolio.css'
import Rectangle from "./Rectangle";
import Images from '../images/Images.png'

export default function Portfolio(props){
    return(
        <div className={props.class}>
            <div>
                <Text class='title_port' text='Portfolio'/>
                <Rectangle class='rec3'/>
            </div>
            <div className="ac_port">
                <Image class='port_image' src={Images}/>
                <DivText class='list1' text='<span class="num">01</span> Fashion'/>
                <DivText class='list2' text='<span class="num">02</span> Art'/>
                <DivText class='list3' text='<span class="num">03</span> Design'/>
                <DivText class='list4' text='<span class="num">04</span> Styling'/>
            </div>
        </div>
    )
}