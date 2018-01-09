import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './index.scss';

function Legend({ items }) {
  return (
    <div id={styles.root}>
      {items.map(item => (
        <div className={styles.rootItem}>{item}</div>
      ))}
    </div>
  );
}
Legend.propTypes = {
  // eslint-disable-next-line
  items: PropTypes.array.isRequired,
};
export default Legend;
