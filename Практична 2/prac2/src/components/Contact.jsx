import DivText from "./DivText";
import Rectangle from "./Rectangle";
import Button from "./Button";
import Input from "./Input";
import './Contact.css'

export default function Contact(props){
    return(
        <div className={props.class}>
            <DivText class='contact_title' text='Contact'/>
            <Rectangle class='rec7'/>
            <DivText class='contact_text' text='
            <span style="font-weight: 700;">Consectetur adipiscing elit viverra tristique placerat in massa consectetur </span>
            <br>
            <br>
            Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam lorem est persetera
            <br>
            <br>
            <span style="font-weight: 600; font-size: 20px;">EMAIL:</span> company@youremail.com
            <br>
            <span style="font-weight: 600; font-size: 20px;">WEBSITE:</span> www.yourwebsite.com'/>
            <Input class='INPUT' class1='name' text1='name' class2='email' text2='email' class3='message' text3='message'/>
            <Button class='button_send' title='SEND MESSAGE'/>
        </div>
    )
}