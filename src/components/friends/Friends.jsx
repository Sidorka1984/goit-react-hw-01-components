import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Friends.module.css';
import defaultImg from '../default/default.jpg';

const Friends = ({ id, avatar = defaultImg, name, isOnline }) => (

    <li className={styles.Item} key={id}>
        <span className={isOnline ? styles.StatusOnline : styles.StatusOffline}>
            ⬤{isOnline}
        </span>
        <img className={styles.Avatar} src={avatar} alt={name} width="48" />
        <p className={styles.Name}>{name}</p>
    </li>

);


export default Friends;