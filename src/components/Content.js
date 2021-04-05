import { useDataLayerValue } from '../context/DataLayer';

import './Content.css';

// Components
import Header from './Header';
import SongRow from './SongRow'

// Material UI
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


function Content() {

    const [{ discover_weekly }] = useDataLayerValue();

    function timeConvert(n) {
        var num = n/60000;
        if (num > 1440000) {
            return "over 24 hr"
        }
        var hour = Math.floor(num/60);
        var min = (num/60 - hour) * 60;
        var sec = (min % Math.floor(min)) * 60
        return `${hour? hour + " hr ": ""}
                ${min? (hour? Math.round(min): Math.floor(min)) + " min ": ""}
                ${Boolean(sec)&(!Boolean(hour))? Math.round(sec) + " sec": ""}`;
    }


    return (
        <div className="content">
            < Header />
            <div className="content_info">
                <img src={ discover_weekly?.images[0].url } alt="banner" />
                <div className="content_infoText">
                    <strong>PLAYLIST</strong>
                    <h1>Discover Weekly</h1>
                    <p>{discover_weekly?.description}</p>
                    <p className="info_bottom">
                        <strong>{discover_weekly?.owner?.display_name}</strong>
                        <span className="bullet_decor">
                            {discover_weekly?.tracks?.total} {"songs, "}
                            {
                                timeConvert(discover_weekly?.tracks?.items.reduce( (prev, cur) => {
                                    return prev + cur.track.duration_ms;
                                }, 0))
                            }
                        </span>
                    </p>
                </div>
            </div>

            <div className="content_songs">
                <div className="content_icons">
                    <PlayCircleFilledIcon style={{color: "#1DB954"}} className="big_playBtn" />
                    <FavoriteIcon style={{color: "#1DB954"}} />
                    <MoreHorizIcon className="moreOptions" />
                </div>

                <div>
                    {discover_weekly?.tracks?.items.map((item, index) => (
                        < SongRow track={item.track} index={index} key={item.track.id} />
                    ))}
                </div>
                <div className="bottom_space"></div>
            </div>
        </div>
    )
}

export default Content