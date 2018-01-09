import React from 'react';
import { PropTypes } from 'prop-types';
import getQueryString from '../../../../util/getQueryString';
import styles from './index.scss';

const wall = getQueryString('wall');
function Legend({ items }) {
  return (
    <div id={styles.root}>
      {items.map(item => (
        <div className={wall === null ? styles.rootItem : `${styles.rootItem} ${styles.rootItemWall}`}>{item}</div>
      ))}
    </div>
  );
}
Legend.propTypes = {
  // eslint-disable-next-line
  items: PropTypes.array.isRequired,
};
export default Legend;
