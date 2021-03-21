import React from 'react'
import './SongRow.css'

function SongRow({ track }) {
    return (
        <div className="songRow">
            <img className="album_image" src={track.album.images[0].url}/>
            <div className="songRow_info">
                <h2>{track.name}</h2>
                <p>
                    {track.artists.map(artist => <span className="song_artist">{artist.name}<span className="comma">,</span></span>)}
                    {" - "}
                    <span >{track.album.name}</span>
                </p>
            </div>
        </div>
    )
}

export default SongRow
