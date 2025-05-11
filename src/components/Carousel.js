import { useState } from "react";
import '../css/component_css/Carousel.css';

const Carousel = (props) => {
    
    const[currentImage, setImage] = useState(0);
    
    return(
        <>
        <div className="container">
            <h1>No Image</h1>
        </div>
        </>
    );
}

export default Carousel