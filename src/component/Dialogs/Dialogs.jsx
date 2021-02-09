import React from 'react';
import styles from '../Dialogs/Dialogs';
import AddMessageForm from './AddMessageForm/AddMessageForm';

const Dialogs = () => {
    return(
        <div>
            Messages
            <AddMessageForm />
        </div>
    )
}

export default Dialogs;