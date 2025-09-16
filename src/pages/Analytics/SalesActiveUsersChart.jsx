import React from 'react';
import ReactApexChart from 'react-apexcharts';


const SalesActiveUsersChart = () => {
  const [state] = React.useState({
    series: [
      {
        name: 'Active Users',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      },
      {
        name: 'Sales',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 150,
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true
          }
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 5,
          borderRadiusApplication: 'end',
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        labels: {
          style: {
            colors: '#6B7280',
            fontSize: '12px'
          }
        }
      },
      yaxis: {
        labels: {
          formatter: (value) => {
            return value.toLocaleString();
          },
          style: {
            colors: '#6B7280',
            fontSize: '12px'
          }
        }
      },
      fill: {
        opacity: 1,
        colors: ['#3B82F6', '#10B981']
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val.toLocaleString();
          }
        }
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 300
            }
          }
        }
      ]
    }
  });

  return (
    <div className="bg-white rounded-lg shadow dark:border-gray-800 dark:bg-white/[0.03] p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Monthly Analytics</h3>
        <p className="text-sm text-gray-500">Active Users vs Sales</p>
      </div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default SalesActiveUsersChart;