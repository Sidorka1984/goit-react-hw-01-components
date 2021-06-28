import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../default/default.jpg';
import styles from './Profile.module.css';
import { FaRegGrinTongueWink } from 'react-icons/fa';
import { FaRegFlushed } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';


const Profile = ({ url, name, tag, location, followers, views, likes }) => (
<div className={styles.Profile}>
  <div className={styles.Description}>
    <img
      className={styles.Avatar}
      src={url}
      alt="Аватар пользователя"
      width="500"
    />
            <p className={styles.Name}>{name}</p>
            <p className={styles.Tag}>@{tag}</p>
            <p className={styles.Location}>{location}</p>
  </div>

  <ul className={styles.Stats}>
            <li>
                <FaRegGrinTongueWink />
                <span className={styles.Label}>Followers</span>
                <span className={styles.Quantity}>{ followers }</span>
            </li>
            <li>
                <FaRegFlushed className={styles.icon} size="16" />
                <span className={styles.Label}>Views</span>
                <span className={styles.Quantity}>{ views }</span>
            </li>
            <li>
                <FaRegHeart className={styles.icon} size="16" />
                <span className={styles.Label}>Likes</span>
                <span className={styles.Quantity}>{ likes }</span>
            </li>
  </ul>
</div>
)

Profile.defaultProps = {
    url: defaultImg,
}

Profile.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}


export default Profile;

