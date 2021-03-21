import React from 'react';
import './Sidebar.css';
import SiderbarOption from './SiderbarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';


function Sidebar() {

    const [{ playlists }, dispatch ] = useDataLayerValue();

    console.log(playlists)

    return (
        <div className="sidebar">
            <img
                className="sidebar_logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SiderbarOption Icon={HomeIcon} title ="Home" />
            <SiderbarOption Icon={SearchIcon} title ="Search" />
            <SiderbarOption Icon={LibraryMusicIcon} title ="Your Library" />
            <div className="sidebar_playlist">
                <strong className="sidebar_title">PLAYLISTS</strong>
                <hr />

                { playlists?.items?.map(element => (
                    <SiderbarOption title={element.name} />
                )) }
            </div>
                      
        </div>
    )
}

export default Sidebar
