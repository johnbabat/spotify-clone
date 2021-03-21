import React from 'react'
import './SidebarOption.css'

function SiderbarOption({ title, Icon }) {
    return (
        <div className={`sidebarOption ${!Icon ? "sidebarOption_playlist" : ""}`}>
            { Icon && < Icon className="sidebarOption_icon"/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SiderbarOption
