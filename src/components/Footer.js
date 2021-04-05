import './Footer.css';

// Material UI
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import VolumeDown from '@material-ui/icons/VolumeDown';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';


function Footer() {

    
    return (
        <div className="footer_container">
            <div className="footer">
                <div className="footer_left">
                    <img
                        className="footer_albumlogo"
                        src="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ad/71/ff/ad71ffbb-529d-e516-406d-d1ac5724ad43/mzi.sjrqsmrq.jpg/600x600bf-60.jpg"
                        alt="" 
                    />
                    <div className="footer_songinfo">
                        <h4>Yeah!</h4>
                        <p>Usher</p>
                    </div>
                </div>
                <div className="footer_center">
                    <ShuffleIcon className="footer_icon" />
                    <SkipPreviousIcon className="footer_icon" />
                    <PlayCircleFilledIcon style={{color:"white"}} fontSize="large" className="footer_icon play_icon" />
                    <SkipNextIcon className="footer_icon" />
                    <RepeatIcon className="footer_icon" />
                </div>
                <div className="footer_right">
                    <Grid style={{width:"200px", marginLeft:"auto", marginRight:"25px"}} container spacing={2}>
                        <Grid item >
                            <PlaylistPlayIcon className="footer_icon"/>
                        </Grid>
                        <Grid item className="volume">
                            <VolumeDown className="footer_icon"/>
                        </Grid>
                        <Grid item xs className="slideHoverdiv">
                            <Slider className="slideHover" aria-labelledby="continuous-slider" />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Footer
