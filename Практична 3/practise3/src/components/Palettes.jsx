import React from 'react';
import Palette from "./Palette";
import data from '../palette.json';
import './Palettes.css';
import image1 from '../images/mat_ui.png';
import image2 from '../images/flat_ui.png';
import image3 from '../images/flat_dutch.png';
import image4 from '../images/flat_american.png';
import image5 from '../images/flat_aussie.png';
import image6 from '../images/flat_british.png';
import image7 from '../images/flat_spanish.png';
import image8 from '../images/flat_indian.png';
import image9 from '../images/flat_french.png';

export default function Palettes(props){
    const images = [
        {
            "paletteName": "Material UI Colors",
            "image": image1
        },
        {
            "paletteName": "Flat UI Colors v1",
            "image": image2
        },
        {
            "paletteName": "Flat UI Colors Dutch",
            "image": image3
        },
        {
            "paletteName": "Flat UI Colors American",
            "image": image4
        },
        {
            "paletteName": "Flat UI Colors Aussie",
            "image": image5
        },
        {
            "paletteName": "Flat UI Colors British",
            "image": image6
        },
        {
            "paletteName": "Flat UI Colors Spanish",
            "image": image7
        },
        {
            "paletteName": "Flat UI Colors Indian",
            "image": image8
        },
        {
            "paletteName": "Flat UI Colors French",
            "image": image9
        }
    ];

    return (
        <div className='Palettes'>
            {data.map((pal, index) => {
                const matchedImage = images.find(img => img.paletteName === pal.paletteName);
                return (
                    <Palette
                        key={index}
                        style={{ backgroundImage: `url(${matchedImage ? matchedImage.image : ''})`, backgroundSize: 'cover' }}
                        func={() => { props.func(pal.id) }}
                        class='Palette'
                        title_palette={pal.paletteName}
                        id={pal.id}
                    />
                );
            })}
        </div>
    );
}
