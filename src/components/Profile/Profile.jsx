import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../default/default.jpg';
import stales from './Profile.module.css';
import { FaRegGrinTongueWink } from 'react-icons/fa';
import { FaRegFlushed } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';


const Profile = ({ url, name, tag, location, followers, views, likes }) => (
<div className={stales.Profile}>
  <div className={stales.Description}>
    <img
      className={stales.Avatar}
      src={url}
      alt="Аватар пользователя"
      width="500"
    />
            <p className={stales.Name}>{name}</p>
            <p className={stales.Tag}>@{tag}</p>
            <p className={stales.Location}>{location}</p>
  </div>

  <ul className={stales.Stats}>
            <li>
                <FaRegGrinTongueWink />
                <span className={stales.Label}>Followers</span>
                <span className={stales.Quantity}>{ followers }</span>
            </li>
            <li>
                <FaRegFlushed className={stales.icon} size="16" />
                <span className={stales.Label}>Views</span>
                <span className={stales.Quantity}>{ views }</span>
            </li>
            <li>
                <FaRegHeart className={stales.icon} size="16" />
                <span className={stales.Label}>Likes</span>
                <span className={stales.Quantity}>{ likes }</span>
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

