import { Link } from 'react-router-dom';
import playPhoto from '../../../photos/pause-play.png';

const PropsPlaylists = (props) => {
    const playlists = props.playlists;
    return (
        <div className="playlist">
                    <h1>playlists</h1>
                    <div class="songs">
                        {playlists.map(playlist => (
                            <div className="card" key={playlist._id}>
                                <img src={require(`../../../../../server/public/photos/${playlist.image}`)} alt="not found" />
                                <div className="content">
                                    <Link to={playlist.url}><img src={playPhoto} alt="not found" /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
        </div>
    );
}

export default PropsPlaylists;