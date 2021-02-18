import React from 'react';
import { Route } from 'react-router-dom';
import Register from './Register/Register';
import styles from '../Authorization/AuthorizationPage.module.scss';
import Login from './Login/Login';

let AuthorizationPage = () => {
    return(
        <div className={styles.authorizationPage}>
            <h1 className={styles.title}>Authorization</h1>
            <Route path={'/authorization/register'} component={Register} />
            <Route path={'/authorization/login'} component={Login} />
        </div>
    )
}

export default AuthorizationPage;