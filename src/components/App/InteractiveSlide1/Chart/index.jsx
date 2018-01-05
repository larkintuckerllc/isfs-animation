import React from 'react';
import ChartistGraph from 'react-chartist';
import styles from './index.css';

function Chart() {
  const data = {
    series: [5, 3, 4],
  };
  return (
    <div
      id={styles.root}
    >
      <ChartistGraph data={data} type="Pie" />
    </div>
  );
}
export default Chart;
