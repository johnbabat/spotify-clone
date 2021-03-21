import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();

    return (

        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs, or podcasts"
                    type="text"
                />
            </div>
            <div className="header_right">
                <div className="name_and_avatar">
                    <Avatar style={{height: "30px", width: "30px"}} src={user?.images[0]?.url} alt="RQ" />
                    <h4>{user?.display_name}</h4>
                </div>
            </div>
            
        </div>
    )
}

export default Header
