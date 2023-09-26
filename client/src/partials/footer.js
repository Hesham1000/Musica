import logo from '../photos/i-removebg-preview.png'



const Footer = () => {
    return(
        <footer id="foot">
        <div className="row">
            <div className="col">
                <img src={logo} alt="" className="log" />
                <p>Subscribe Easy Tutorials Youtube Channel To Watch More Videos On Website Development</p>
            </div>
            <div className="col">
                <h3>Office <div className="underl"><span></span></div></h3>
                <p>ITPL Road</p>
                <p>Hesham Tarek, Front-End</p>
                <p>Kafr-Elshikh, Egypt</p>
                <p className="email-id">heshamtarek@gmail.com</p>
                <h4>+20 - 01118872859 <i className="fa-brands fa-whatsapp"></i></h4>
            </div>
            <div className="col">
                <h3>Links <div className="underl"><span></span></div></h3>
                <ul>
                    <li><a href="#1">Home</a></li>
                    <li><a href="#2">Services</a></li>
                    <li><a href="#3">About Us</a></li>
                    <li><a href="#4">Features</a></li>
                    <li><a href="#5">Contacts</a></li>
                </ul>
            </div>
            <div className="col">
                <h3>Call Us <div className="underl"><span></span></div></h3>
                <form>
                    <i className="fa-regular fa-envelope"></i>
                    <input type="email" placeholder="Enter your email" required />
                    <button title="Send" type="submit"><i className="fa-solid fa-arrow-right"></i></button>
                </form>
                
                <div className="social">
                    <a href="https://www.facebook.com/hesham.tarek.7547"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#6"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#7"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#8"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="#9"><i className="fa-brands fa-pinterest"></i></a>
                </div>
            </div>
        </div>
        {/* <hr> */}
        <p className="cr">hesham tarek @ <span id="year"></span> - all rights reserved</p>
    </footer>
    );
}
export default Footer;