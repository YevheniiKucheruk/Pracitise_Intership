import { useState } from "react"
import Text from "./Text"
import useSound from "use-sound";
import src from '../src_notify.mp3'
export default function Palette(props){
    const [play] = useSound(src)
    const [animationStarted, setAnimationStarted] = useState(false);
    const [isClicked,SetClicked] = useState(false)
    const [isHover, SetHover] = useState(false)
    const handleMouseEnter = ()=>{SetHover(true)}
    const handleMouseLeave = ()=>{SetHover(false)}
    const handleClick = () => {
        if (!animationStarted) {
            setAnimationStarted(true);
            setTimeout(() => {
                setAnimationStarted(false);
                SetClicked(false);
            }, 1000);
            navigator.clipboard.writeText(props.copy_color);
            SetClicked(true);
        }
    };
    return(
        <div onClick={handleClick}>
            <div onmouse onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isPalette={props.ispalette} onClick={props.func} style={props.style} className={props.class}>
                {props.ispalette && isHover
                ?
                <div>
                    <span className={props.copy}>Copy!</span>
                    <div>
                    {isClicked ? (
                        <div style={{backgroundColor:props.copy_color+'ee'}} className="alert_class">
                            {play()}
                            <div style={{backgroundColor:props.copy_color}} className="alert_content">Copied!</div>
                        </div>
                    ) : null}
                    </div>
                    <Text class={props.class_palette} text={props.title_palette}/>
                </div>
                :
                <Text class={props.class_palette} text={props.title_palette}/>
                }
            </div>
        </div>
    )
}