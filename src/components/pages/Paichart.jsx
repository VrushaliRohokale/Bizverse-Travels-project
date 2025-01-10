import React from 'react';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const Paichart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          textStyle: {
            color: '#333',
            fontWeight: 'bold'
          }
        },
        series: [
          {
            name: 'Services',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 16,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Travelling' },
              { value: 735, name: 'Hotel' },
              { value: 580, name: 'Resort' },
              { value: 484, name: 'Villa' },
              { value: 300, name: 'Insurance' },
              { value: 200, name: 'Cab' }
            ]
          }
        ]
      };
      myChart.setOption(option);

      return () => {
        myChart.dispose();
      };
    }
  }, []);

  return (
    <div
      style={{
        padding: '20px',
        textAlign: 'center'
      }}
    >
      <h3 style={{ marginBottom: '10px', fontSize: '1.5rem', color: '#333', fontWeight: '600' }}>
        Service Distribution Overview
      </h3>
      <p style={{ marginBottom: '15px', color: '#666', fontSize: '0.9rem' }}>
        A donut pie chart showing the distribution of various travel-related services.
      </p>
      <div ref={chartRef} style={{ width: '100%', height: '260px' }}></div>
    </div>
  );
};

export default Paichart;
