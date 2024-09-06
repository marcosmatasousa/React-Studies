import ProfilePic from "./ProfilePic/ProfilePic";
import InfoBoard from "./InfoBoard/InfoBoard";
import MediaFooter from "./MediaFooter/MediaFooter";

import './styles.css'

function Card() {
    return(
        <div>
            <ProfilePic />
            <InfoBoard />
            <MediaFooter />
        </div>
    )
}

export default Card;