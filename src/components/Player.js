import './Player.css'

// Components
import Content from './Content';
import Footer from './Footer';
import Sidebar from './Sidebar';


function Player() {
    return (
        <div>
            <div className="player_body">
                <Sidebar />
                <Content />
            </div>
            
            <Footer />
        </div>
    )
}

export default Player
