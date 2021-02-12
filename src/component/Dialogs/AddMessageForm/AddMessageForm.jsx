import React from 'react';
import { Field, reduxForm } from 'redux-form';


import styles from '../AddMessageForm/AddMessageForm.module.scss';

const AddMessageForm = (props) => {
    console.log(props);
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={styles.flex}>
                <div>
                    <Field component={'textarea'} placeholder={'Write Message'} name={'newMessageBody'} className={styles.textarea}/>
                </div>
                <div>
                    <button className={styles.button}>Send</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({form: 'add-new-post-form'})(AddMessageForm);