import logo from '../photos/i-removebg-preview.png';
import { Link } from 'react-router-dom';

const Header = () => {
    // let toggle = document.querySelector('.toggle');
    // let menu = document.querySelector('.menu');
    // toggle.onclick = () => {
    //     menu.classList.toggle('active');
    // }
    return(
        <header>
            <img src={logo} alt="not found" />
            <div className='menu'>
                <div className='toggle'>
                    <i className="fa-solid fa-compact-disc" ></i>
                </div>
                <li>
                    <Link to={'/'}><i className="fa-solid fa-house-chimney-crack"></i></Link>
                </li>
                <li>
                    <Link to={'/musica/login'}><i className="fa-solid fa-address-card"></i></Link>
                </li>
                <li>
                    <Link to={''}><i className="fa-solid fa-circle-play"></i></Link>
                </li>
                <li>
                    <Link to={''}><i className="fa-solid fa-music"></i></Link>
                </li>
        </div>
        </header>
    );
}
export default Header;