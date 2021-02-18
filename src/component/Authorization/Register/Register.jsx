import React from 'react';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import styles from '../../Authorization/AuthorizationPage.module.scss';

let Register = (props) => {
    return(
        <form className={styles.form}>
            <div className={styles.flex}>
                <Field component={'input'} placeholder={'First Name'} name={'register_firstName'} className={styles.firstName}/>    
                <Field component={'input'} placeholder={'Second Name'} name={'register_secondName'} className={styles.secondName}/>    
            </div>  
            <div>
                <Field component={'input'} placeholder={'Email Address'} name={'register_email'} className={styles.email}/>
            </div> 
            <div>
                <Field component={'input'} type={'password'} placeholder={'Set A Password'} name={'register_password'} className={styles.password}/>    
            </div>  
            <div>
                <button className={styles.button}>Get Started</button>
            </div>
            <NavLink to={'login'} className={styles.link}>Login</NavLink>
        </form>
    )
}

export default reduxForm({form: 'add-new-post-form'})(Register);