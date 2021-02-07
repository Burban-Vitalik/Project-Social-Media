import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import styles from '../Navbar/Navbar.module.scss';

const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <div className={styles.item}><HomeIcon /><NavLink to={'/profile'} activeClassName={styles.activeLink}>Profile</NavLink></div>
            <div className={styles.item}><EmailIcon /><NavLink to={'/messages'} activeClassName={styles.activeLink}>Messages</NavLink></div>
            <div className={styles.item}><PeopleAltIcon /><NavLink to={'/users'} activeClassName={styles.activeLink}>Users</NavLink></div>
        </nav>
    )
}

export default Navbar;