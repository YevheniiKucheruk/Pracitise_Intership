import Rectangle from "./Rectangle";
import Ac from "./Ac";
import Text from "./Text";
import './Experience.css'

export default function Experience(props){
    return(
        <div className={props.class}>
            <Text class='EXPERIENCE' text='Experience'/>
            <Rectangle class='rec2'/>
            <Ac class='ac1' class1='title_ac1' text1='Team Leader' class2='ac1-' text2='-' textclass='ac1_desc' text='<b>2019-present</b><br>Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor.'/>
            <Ac class='ac2' class1='ac2_title' text1='Product Designer' class2='ac2-' text2='+'/>
            <Ac class='ac3' class1='ac3_title' text1='Senior UX Designer' class2='ac3-' text2='+'/>
            <Ac class='ac4' class1='ac4_title' text1='UX Designer' class2='ac4-' text2='+'/>
            <Ac class='ac5' class1='ac5_title' text1='Junior Designer' class2='ac5-' text2='+'/>
        </div>
    )
}