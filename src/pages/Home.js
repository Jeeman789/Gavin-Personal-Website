import Carousel from '../components/Carousel';
import Entry from '../components/Entry';

import '../css/Home.css';

import queens_logo from '../images/queens_logo.jpg';
import carfax from '../images/carfax.png';
import queens_bg from '../images/queens.jpg';

function Home(){
    return(
        <>
            <div className='carousel-container'>
            <Carousel image={queens_bg}/>
            </div>
            <div className='home-content'>
                <div id='intro-entries'>
                    <Entry header="Who am I?" text="Hello, I am Gavin Lacy, a computing student, attending Queen's University. 
                                I am proficient in many different programming languages and also have experience in web development. 
                                I am currently on internship from August 2025 to August 2026 with Carfax, which you can read more about below." image={queens_logo}/>
                    <Entry header="What have I been up to?" text="I have recently been employed as a software developer intern for Carfax!
                                I am excited to take on this new role and am excited to learn more about the software development field." image={carfax}/>
                </div>
            </div>
        </>
    );
}
export default Home