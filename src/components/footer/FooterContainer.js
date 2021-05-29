import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function FooterContainer() {
    const connected = useSelector(state => state.webSocket.connected);

    return (
        <div className="footer-container">
            <div>
                <span>
                    <FontAwesomeIcon icon={faCircle} color={connected ? "green" : "red"}></FontAwesomeIcon>
                </span>
                {connected && <span>REAL-TIME</span>}
            </div>
        </div>
    )
}

export default FooterContainer;