import DivText from "./Text";
import Rectangle from "./Rectangle";
import Skill from "./Skill";
import './Skills.css'

export default function Skills(props){
    return(
        <div className={props.class}>
            <DivText class='skills_title' text='Skills'/>
            <Rectangle class='rec5'/>
            <div className='recs'>
                <Skill class='rec_li_1' class1='rec_li_1_title' text1='PHOTOSHOP' class2='rec_1_num' text2='62%' class3='rec_1_line'/>
                <Skill class='rec_li_2' class1='rec_li_2_title' text1='ILLUSTRATOR' class2='rec_2_num' text2='84%' class3='rec_2_line'/>
                <Skill class='rec_li_3' class1='rec_li_3_title' text1='MARKETING' class2='rec_3_num' text2='78%' class3='rec_3_line'/>
                <Skill class='rec_li_4' class1='rec_li_4_title' text1='SUPER MARIO' class2='rec_4_num' text2='92%' class3='rec_4_line'/>
                <Skill class='rec_li_5' class1='rec_li_5_title' text1='DIGITAL PAINTING' class2='rec_5_num' text2='58%' class3='rec_5_line'/>
            </div>
        </div>
    )
}