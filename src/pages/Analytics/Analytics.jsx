import { Col, Row } from 'antd'
import React from 'react';
import StatsCard from './StatsCards';
import { Link } from 'react-router-dom';
import DropDownButtons from '../../utils/DropDownButtons';
import SalesActiveUsersChart from './SalesActiveUsersChart';

const Analytics = () => {
    const topChannelsItems = [
        { label: 'View More', onClick: () => console.log('View More clicked') },
        { label: 'Delete', onClick: () => console.log('Delete clicked') }
    ];

    const topPagesItems = [
        { label: 'View More', onClick: () => console.log('Pages View More') },
        { label: 'Delete', onClick: () => console.log('Pages Delete') },
    ];
    const activeUsersItems = [
        { label: 'View More', onClick: () => console.log('Pages View More') },
        { label: 'Delete', onClick: () => console.log('Pages Delete') },
    ];

    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} lg={8} xl={6}>
                    <StatsCard
                        title="Unique Visitors"
                        value="24.7K"
                        percentage="+20%"
                        comparisonText="Vs last month"
                    />
                </Col>
                <Col xs={24} sm={12} lg={8} xl={6}>
                    <StatsCard
                        title="Total Pageviews"
                        value="55.9K"
                        percentage="+4%"
                        comparisonText="Vs last month"
                    />
                </Col>
                <Col xs={24} sm={12} lg={8} xl={6}>
                    <StatsCard
                        title="Bounce Rate"
                        value="32.5%"
                        percentage="-2%"
                        comparisonText="Vs last month"
                        percentagePositive={false}
                    />
                </Col>
                <Col xs={24} sm={12} lg={8} xl={6}>
                    <StatsCard
                        title="Avg. Session Duration"
                        value="2m 45s"
                        percentage="+12%"
                        comparisonText="Vs last month"
                    />
                </Col>
            </Row>
            <Row gutter={[16, 16]} className='mt-8'>

                <Col xs={24} sm={24} lg={12}>
                    <div className="rounded-2xl h-full border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                        <div className="flex items-start justify-between">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                                Top Channels
                            </h3>
                            <div className="relative inline-block">
                                <DropDownButtons items={topChannelsItems} />
                            </div>
                        </div>
                        <div className="my-6">
                            <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
                                <span className="text-gray-400 text-theme-xs"> Source </span>
                                <span className="text-right text-gray-400 text-theme-xs"> Visitors </span>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                                <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                                    Google
                                </span>
                                <span className="text-right text-gray-500 text-theme-sm dark:text-gray-400">
                                    4.7K
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                                <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                                    Facebook
                                </span>
                                <span className="text-right text-gray-500 text-theme-sm dark:text-gray-400">
                                    3.4K
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                                <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                                    Threads
                                </span>
                                <span className="text-right text-gray-500 text-theme-sm dark:text-gray-400">
                                    2.9K
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                                <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                                    Google
                                </span>
                                <span className="text-right text-gray-500 text-theme-sm dark:text-gray-400">
                                    1.5K
                                </span>
                            </div>
                        </div>
                        <Link
                            className="flex justify-center gap-2 rounded-lg border border-gray-300 bg-white p-2.5 text-theme-sm font-medium !text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
                            to="/"
                            data-discover="true"
                        >
                            Channels Report
                            <svg
                                className="fill-current"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M17.4175 9.9986C17.4178 10.1909 17.3446 10.3832 17.198 10.53L12.2013 15.5301C11.9085 15.8231 11.4337 15.8233 11.1407 15.5305C10.8477 15.2377 10.8475 14.7629 11.1403 14.4699L14.8604 10.7472L3.33301 10.7472C2.91879 10.7472 2.58301 10.4114 2.58301 9.99715C2.58301 9.58294 2.91879 9.24715 3.33301 9.24715L14.8549 9.24715L11.1403 5.53016C10.8475 5.23717 10.8477 4.7623 11.1407 4.4695C11.4336 4.1767 11.9085 4.17685 12.2013 4.46984L17.1588 9.43049C17.3173 9.568 17.4175 9.77087 17.4175 9.99715C17.4175 9.99763 17.4175 9.99812 17.4175 9.9986Z"
                                    fill=""
                                />
                            </svg>
                        </Link>
                    </div>
                </Col>
                <Col xs={24} sm={24} lg={12}>
                    <div className="rounded-2xl h-full border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                        <div className="flex items-start justify-between">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                                Top Pages
                            </h3>
                            <div className="relative inline-block">
                                <DropDownButtons items={topPagesItems} />
                            </div>
                        </div>
                        <div className="my-6">
                            <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
                                <span className="text-gray-400 text-theme-xs"> Source </span>
                                <span className="text-right text-gray-400 text-theme-xs"> Pageview </span>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                                <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                                    admin.com
                                </span>
                                <span className="text-right text-gray-500 text-theme-sm dark:text-gray-400">
                                    4.7K
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                                <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                                    preview.admin.com
                                </span>
                                <span className="text-right text-gray-500 text-theme-sm dark:text-gray-400">
                                    3.4K
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                                <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                                    docs.admin.com
                                </span>
                                <span className="text-right text-gray-500 text-theme-sm dark:text-gray-400">
                                    2.9K
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                                <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                                    admin.com/components
                                </span>
                                <span className="text-right text-gray-500 text-theme-sm dark:text-gray-400">
                                    1.5K
                                </span>
                            </div>
                        </div>
                        <Link
                            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-2.5 text-theme-sm font-medium !text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
                            to="/"
                            data-discover="true"
                        >
                            Channels Report
                            <svg
                                className="fill-current"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M17.4175 9.9986C17.4178 10.1909 17.3446 10.3832 17.198 10.53L12.2013 15.5301C11.9085 15.8231 11.4337 15.8233 11.1407 15.5305C10.8477 15.2377 10.8475 14.7629 11.1403 14.4699L14.8604 10.7472L3.33301 10.7472C2.91879 10.7472 2.58301 10.4114 2.58301 9.99715C2.58301 9.58294 2.91879 9.24715 3.33301 9.24715L14.8549 9.24715L11.1403 5.53016C10.8475 5.23717 10.8477 4.7623 11.1407 4.4695C11.4336 4.1767 11.9085 4.17685 12.2013 4.46984L17.1588 9.43049C17.3173 9.568 17.4175 9.77087 17.4175 9.99715C17.4175 9.99763 17.4175 9.99812 17.4175 9.9986Z"
                                    fill=""
                                />
                            </svg>
                        </Link>
                    </div>
                </Col>
                <Col xs={24} sm={24}>
                    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                        <div className="flex items-start justify-between">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                                Active Users
                            </h3>
                            <div className="relative inline-block">
                                <DropDownButtons items={activeUsersItems} />
                            </div>
                        </div>
                        <div className="mt-6 flex items-end gap-1.5">
                            <div className="flex items-center gap-2.5">
                                <div className="flex items-center justify-center w-5 h-5 rounded-full ripple bg-error-500/10">
                                    <div className="h-1.5 w-1.5 rounded-full bg-error-500 " />
                                </div>
                                <span className="font-semibold text-gray-800 activeUsers text-title-sm dark:text-white/90">
                                    364
                                </span>
                            </div>
                            <span className="block mb-1 text-gray-500 text-theme-sm dark:text-gray-400">
                                Live visitors
                            </span>
                        </div>
                        <div className="my-5 min-h-[155px] rounded-xl bg-gray-50 dark:bg-gray-900">
                            <SalesActiveUsersChart />
                        </div>

                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default Analytics
