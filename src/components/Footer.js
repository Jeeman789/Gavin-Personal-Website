import '../css/component_css/Footer.css';

const Footer = () =>{
    return(
        <>
            <footer id='website-footer'>
                <div className='all-info'>
                    <div className='footer-section'>
                        <h2 className='footer-heading' >Contact Info</h2>
                        <div className='links'>
                            <a className='footer-text' href="mailTo:gavin.r.lacy@gmail.com">gavin.r.lacy@gmail.com</a><br/>
                            <a className='footer-text' href="tel:647-906-0716">647-906-0716</a><br/>
                            <a className='footer-text' rel="noreferrer" target='_blank' href="https://github.com/Jeeman789">GitHub</a>
                        </div>
                    </div>
                    <div className='footer-section'>
                        <h2 className='footer-heading' >Social Media</h2>
                        <div className='links'>
                            <a  className='footer-text' rel="noreferrer" target='_blank' href="http://www.linkedin.com/in/gavin-lacy-5165ba269">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer