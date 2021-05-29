import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMinus, faPlus, faBell, faCog, faSearchMinus, faSearchPlus } from '@fortawesome/free-solid-svg-icons';

function HeaderContainer(){
    return (
        <div className="header-container">
            <div>
                <FontAwesomeIcon icon={faCaretDown} color="white"></FontAwesomeIcon>
                <span className="title">Order Book</span>
                <span className="title-gray">BTC/USD</span>
            </div>
            <div>
                <span><FontAwesomeIcon icon={faMinus} color="white"></FontAwesomeIcon></span>
                <span><FontAwesomeIcon icon={faPlus} color="white"></FontAwesomeIcon></span>
                <span><FontAwesomeIcon icon={faBell} color="white"></FontAwesomeIcon></span>
                <span><FontAwesomeIcon icon={faCog} color="white"></FontAwesomeIcon></span>
                <span><FontAwesomeIcon icon={faSearchMinus} color="white"></FontAwesomeIcon></span>
                <span><FontAwesomeIcon icon={faSearchPlus} color="white"></FontAwesomeIcon></span>
            </div>
        </div>
    )
}

export default HeaderContainer;