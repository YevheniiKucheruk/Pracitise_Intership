import DivText from "./DivText";
import Rectangle from "./Rectangle";
import './CoverLetter.css'

export default function CoverLetter(props){
    return(
        <div className={props.class}>
            <DivText class='letter_title' text='Cover Letter'/>
            <Rectangle class='rec6'/>
            <DivText class='text_letter' text='<span style="font-size: 20px; font-weight: 600;">Dolor sit amet, consectetur adipiscing elit viverra tristique placerat in massa consectetur quisque  
            </span>
            <br>
            <br>
            Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate est phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor. Eget enim aliquam euismod mauris in vitae viverra blandit lectus. Diam feugiat are mattis metus, parturient ipsum id nibh tortor tincidunt. Quam facilisi nunc faucibus diam consequat maecenas lorem ipsum donec.
            <br>
            <br>
            Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus diam consequat lorem ipsum estera maecenas. '/>
        </div>
    )
}