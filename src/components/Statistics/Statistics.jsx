import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import { RandomaizerColor } from '../../utils/RandomizerColor';

const Statistics = ({stats, title}) => (
    <section className={styles.Statistics}>
        {title && <h2 className={styles.Title}>{title}</h2>}

        <ul className={styles.StatList}>
            {stats.map(({ id, label, percentage }) => (
                <li className={styles.Item}
                    key={id}
                    style={{ backgroundColor: RandomaizerColor() }}
                >
                    <span className={styles.Label}>{label}</span>
                    <span className={styles.Percentage}>{percentage}%</span>
                </li>
           
            ))}
            
        </ul>
    </section>
)
Statistics.defaultTypes = {
    title: '',
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired,
        }),
    ).isRequired,
}
export default Statistics