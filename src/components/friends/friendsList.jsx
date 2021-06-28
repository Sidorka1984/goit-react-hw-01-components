import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';
import Friends from './Friends';

const FriendsList = ({ friends }) => (
    <ul className={styles.FriendsList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
            <Friends key={id} avatar={avatar} name={name} isOnline={isOnline} />
        ))}
    </ul>
);
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
        })
        
    )
}
export default FriendsList;