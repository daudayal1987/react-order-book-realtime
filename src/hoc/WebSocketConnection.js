import { Component } from 'react';
import { connect } from 'react-redux';

import { wsConnect } from './../store/websocket/Actions';

class WebSocketConnection extends Component {
    componentDidMount() {
        this.props.dispatch(wsConnect())
    }
    
    render() {
        return this.props.children;
    }
}

export default connect()(WebSocketConnection);