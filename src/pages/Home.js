import Carousel from '../components/Carousel';
import '../css/Home.css';

function Home(){
    return(
        <>
            <div className='carousel-container'>
            <Carousel />
            </div>
            <div className='home-content'>
                <div id='intro-entries'>
                    <div className='intro-content'>
                    <image></image>
                    <div className='intro-text'>
                        <h4>Who am I?</h4>
                        <p>
                            Hello, I am Gavin Lacy, a third year computing student, attending Queen's University. 
                            I am proficient in many different programming languages and also have experience in web development. 
                            I am currently seeking an internship for next year with the QUIP program and am eager to providing my 
                            skills to a company that values innovation.
                        </p>
                    </div>
                </div>
                <div className='intro-content'>
                    <image></image>
                    <div className='intro-text'>
                        <h4>What have I been up to?</h4>
                        <p>
                            I have recently been studying for the AWS cloud practioner exam to expand my skills as I believe cloud 
                            computing is an important skill. Along with the AWS exam, I have been learning more about the Unity
                            game engine, and have been designing a prototype version of a game. 
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}
export default Home