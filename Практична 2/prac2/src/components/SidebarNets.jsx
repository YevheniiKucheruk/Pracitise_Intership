import Li from "./Li";
export default function SidebarNets(props){
    return(
        <div className={props.class1}>
            <ul className={props.class2}>
                <Li text='FACEBOOK'/>
                <Li text='INSTAGRAM'/>
                <Li text='TWITTER'/>
                <Li text='LINKEDIN'/>
            </ul>
        </div>
    )
}