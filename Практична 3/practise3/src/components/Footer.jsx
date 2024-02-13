import Text from "./Text"
import './Footer.css'
export default function Footer(props){
    return(
        <div className='Footer'>
            <Text class='Desc_foo' text='Цей сайт був розроблений на виробничу практику'/>
            <Text class='Author_foo' text='Made by Yevhenii Kucheruk'/>
        </div>
    )
}