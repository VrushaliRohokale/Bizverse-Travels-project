import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const Chart = () => {
  useEffect(() => {
    const option = {
      xAxis: {
        type: 'category',
        data: ['Travelling', 'Hotel', 'Resort', 'Villa', 'Insurance', 'Cab']
      },
      yAxis: {
        type: 'value',
        name: 'Percentage',
        axisLabel: {
          formatter: '{value} %'
        }
      },
      series: [
        {
          data: [25, 20, 15, 10, 18, 12], // Sample percentage data
          type: 'bar',
          showBackground: true,
          itemStyle: {
            color: 'pink' // Set bar color to green
          },
          backgroundStyle: {
            color: 'rgba(240, 202, 202, 0.2)'
          }
        }
      ]
    };

    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom);
    myChart.setOption(option);

    return () => {
      myChart.dispose(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div
      style={{
        padding: '20px',
        textAlign: 'center'
      }}
    >
      <h3 style={{ marginBottom: '10px', fontSize: '1.5rem', color: '#333', fontWeight: '600' }}>
        Travel Service Usage Statistics
      </h3>
      <p style={{ marginBottom: '15px', color: '#666', fontSize: '0.9rem' }}>
        A bar chart representing the percentage usage of different travel-related services.
      </p>
      <div id="main" style={{ width: '115%', height: '260px' }}></div>
    </div>
  );
};

export default Chart;
