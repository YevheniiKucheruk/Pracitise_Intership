import Palette from "./Palette"
import data from '../palette.json'
import './PalettesMain.css'
export default function PalettesMain(props){
    let colours = []
    data.forEach(pal=>{
        if(pal.id===props.ID){
            colours = pal.colors
        }
    })
    return(
        <div className='Palettes1'>
            {colours.map((colour,index)=>(
                <Palette alert_class={props.alert_class} copy_color={colour.color} key={index} ispalette={true} style={{backgroundColor: colour.color}} copy='Copybox' class='Palette1' title_palette ={colour.name} />
            ))}
        </div>
    )
}