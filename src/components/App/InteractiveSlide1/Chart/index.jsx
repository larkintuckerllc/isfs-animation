import React from 'react';
import { PropTypes } from 'prop-types';
import ChartistGraph from 'react-chartist';
import styles from './index.css';

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
