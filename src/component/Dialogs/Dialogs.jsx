import React from 'react';
import styles from '../Dialogs/Dialogs.module.scss';
import AddMessageForm from './AddMessageForm/AddMessageForm';
import { DialogItem } from './Dialog/DialogItem';
import { MessageItem } from './Message/MessageItem';

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsArray = state.dialogs.map(element => <DialogItem id={element.id} name={element.name}/>);
    let messagesArray = state.messages.map(element => <MessageItem id={element.id} message={element.message}/>);
    let newMessageBody = state.newMessageBody

    let addNewMessage = (values) => {
        debugger;
        // console.log();
        props.sendMessage(values.newMessageBody)
    }
    debugger;
    return(
        <div className={styles.dialogsPage}>
            <div className={styles.chat}>
                <div className={styles.dialogsArray}>
                    {dialogsArray}
                </div>
                <div className={styles.messagesArray}>
                    {messagesArray}
                </div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs;