import Menu from "./Menu";
import Text from "./Text";
import './LeftSidebar.css'
import SidebarNets from "./SidebarNets";
export default function LeftSidebar(props){
    return(
        <div className={props.class}>
            <Menu class="menu"/>
            <Text class="sidebar_name" text='JOHN DOE'/>
            <SidebarNets class1='sidebar_net' class2='nets'/>
        </div>
    )
}