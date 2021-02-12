import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs'

let DialogsContainer = (props) => {
    return <Dialogs {...props}/>
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);