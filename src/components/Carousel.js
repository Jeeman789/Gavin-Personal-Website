import { useState } from "react";
import '../css/component_css/Carousel.css';

const Carousel = (props) => {
    
    const[currentImage, setImage] = useState(0);
    
    return(
        <>
        <img src={props.image}></img>
        </>
    );
}

export default Carousel