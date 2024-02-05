import DivText from "./DivText";
import Text from "./Text";
import Image from "./Image";
import './Education.css'
import Rectangle from "./Rectangle";
import Timeline from '../images/Timeline.png'

export default function Education(props){
    return(
        <div className={props.class}>
            <DivText class='title_edu' text='Education'/>
            <Rectangle class='rec4'/>
            <Text class='edu_desc' text='<span class="str"><b>Dolor sit amet, consectetur adipiscing elit viverra tristique placerat in massa consectetur quisque</b></span><br><br>Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor.'/>
            <div className="timeline_edu">
                <Text class='y22' text='2022'/>
                <Text class='y24' text='2024'/>
                <Text class='y26' text='2026'/>
                <Text class='y28' text='2028'/>
                <Image class='timeline_img' src={Timeline}/>
                <Text class='y22_t' text='Placerat in massa consectetur quisque. Nunc ac fames lectus in libero aliquet est setera nunc setera.'/>
                <Text class='y24_t' text='Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phaselluse enim aliquam euismod mauris in vitae.'/>
                <Text class='y26_t' text='Nunc amet tristique volutpat adipiscing vulputate phasellus. Eget enim aliquam euismod lorem ispum.'/>
                <Text class='y28_t' text='Eget enim aliquam euismod mauris in vitae viverra blandit lectus faucibus diam consequat maecenas turpis metus sit.'/>
            </div>
        </div>
    )
}