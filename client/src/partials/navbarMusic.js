import logo from '../photos/i-removebg-preview.png';
import home from '../photos/home (3).png';
import music from '../photos/audio-waves.png';
import video from '../photos/film-editor.png';
import playlist from '../photos/album (1).png';
import { Link } from 'react-router-dom';


const NavbarMusic = () => {
    return(
            <div className="side">
                <div className="logo">
                    <Link href=""><i className="fa-solid fa-arrow-left"></i></Link>
                    <img src={logo} alt="" />
                    <h3>musica</h3>
                </div>
                <div className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="search" placeholder="Search" />
                </div>
                <div className="links">
                    <div>
                        <img src={home} alt="" />
                        <Link to={'/'}>home</Link>
                    </div>
                    <div>
                        <img src={music} alt="" />
                        <Link href="#3">music</Link>
                    </div>
                    <div>
                        <img src={video} alt="" />
                        <Link href="#4">video</Link>
                    </div>
                    <div>
                        <img src={playlist} alt="" />
                        <Link href="#5">playlist</Link>
                    </div>
                </div>
            </div>
    );
}
export default NavbarMusic;