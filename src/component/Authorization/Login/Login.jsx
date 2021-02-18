import React from 'react';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import styles from '../../Authorization/AuthorizationPage.module.scss';

let Login = (props) => {
    return(
        <form className={styles.form}>
            <div>
                <Field component={'input'} placeholder={'Email Address'} name={'login_email'} className={styles.email}/>
            </div> 
            <div>
                <Field component={'input'} placeholder={'Set A Password'} name={'login_password'} className={styles.password}/>    
            </div>  
            <div>
                <button className={styles.button}>Login</button>
            </div>
            <NavLink to={'register'} className={styles.link}>Register</NavLink>
        </form>
    )
}


export default reduxForm({form: 'add-new-post-form'})(Login);