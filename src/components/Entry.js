import '../css/component_css/Entry.css';

const Footer = (props) =>{
    return(
        <>
            <div className='intro-content'>
                <img src={props.image}></img>
                <div className='intro-text'>
                    <h4>{props.header}</h4>
                    <p>
                        {props.text}
                    </p>
                </div>
            </div>
        </>
    );
}
export default Footer