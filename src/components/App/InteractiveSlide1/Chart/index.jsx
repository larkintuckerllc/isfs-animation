import React from 'react';
import { PropTypes } from 'prop-types';
import ChartistGraph from 'react-chartist';
import getQueryString from '../../../../util/getQueryString';
import styles from './index.css';

const wall = getQueryString('wall');
function Chart({ series }) {
  const data = {
    series,
  };
  return (
    <div
      id={styles.root}
    >
      <ChartistGraph
        data={data}
        type="Pie"
        options={{
          donut: true,
          donutWidth: wall === null ? 45 : 200,
          showLabel: false,
        }}
      />
    </div>
  );
}
Chart.propTypes = {
  // eslint-disable-next-line
  series: PropTypes.array.isRequired,
};
export default Chart;
