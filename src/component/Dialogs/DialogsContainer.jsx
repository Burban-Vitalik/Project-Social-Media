import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs'

let DialogsContainer = (props) => {
    return <Dialogs {...props.dialogsPage}/>
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);