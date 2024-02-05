import './About.css'
import DivText from './DivText'
import Rectangle from './Rectangle'
export default function About(props){
    return(
        <div className={props.class}>
            <DivText class='ABOUT' text ='About'/>
            <Rectangle class='rec1'/>
            <DivText class='text_about1' text ='Dolor sit amet, consectetur adipiscing elit viverra tristique placerat in massa consectetur quisque '/>
            <DivText class='text_about2' text ='Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor.'/>
        </div>
    )
}