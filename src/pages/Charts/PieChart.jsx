import { Col, Row } from 'antd';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import DashboardNav from '../../utils/DashboardNav';

const PieChart = () => {
    const chartData = {
        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                type: 'donut',
            },
            legend: {
                show: true, 
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: '100%'
                    },
                    legend: {
                        show: false,
                    },
                    dataLabels: {
                        enabled: false 
                    }
                }
            }]
        }
    };

    return (
        <div>
            <DashboardNav title="Pie Chart" subTitle="Home" text="Pie Chart" />
            <Row gutter={[16, 16]} className='justify-center'>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <div className='rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'>
                        <ReactApexChart
                            options={chartData.options}
                            series={chartData.series}
                            type="donut"
                            height={350}
                        />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <div className='rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'>
                        <ReactApexChart
                            options={chartData.options}
                            series={chartData.series}
                            type="donut"
                            height={350}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default PieChart;