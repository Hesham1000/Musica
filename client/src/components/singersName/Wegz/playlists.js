import NavbarMusic from '../../../partials/navbarMusic';
import PlaylistHook from "./hookPlaylistsAPI";
import PropsPlaylists from "./propsPlaylists";

const Wegz = () => {
    const playlists = PlaylistHook('http://localhost:8000/api/playlists');
    return(
        <div className="page">
            <NavbarMusic />
            {playlists && <PropsPlaylists playlists={playlists.data} /> }
        </div>
    );
}
export default Wegz;