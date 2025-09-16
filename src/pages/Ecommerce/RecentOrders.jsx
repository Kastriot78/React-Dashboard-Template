import React from 'react'

const RecentOrders = () => {
    return (
        <div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
                <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                            Recent Orders
                        </h3>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                            <svg
                                className="stroke-current fill-white dark:fill-gray-800"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.29004 5.90393H17.7067"
                                    stroke=""
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17.7075 14.0961H2.29085"
                                    stroke=""
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                                    fill=""
                                    stroke=""
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                                    fill=""
                                    stroke=""
                                    strokeWidth="1.5"
                                />
                            </svg>
                            Filter
                        </button>
                        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                            See all
                        </button>
                    </div>
                </div>
                <div className="max-w-full overflow-x-auto">
                    <table className="min-w-full  undefined">
                        <thead className="border-gray-100 dark:border-gray-800 border-y">
                            <tr>
                                <th className=" py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Products
                                </th>
                                <th className=" py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Category
                                </th>
                                <th className=" py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Price
                                </th>
                                <th className=" py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            <tr className="">
                                <td className=" py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                                            <img
                                                className="h-[50px] w-[50px]"
                                                alt="MacBook Pro 13”"
                                                src="/images/product-01.jpg"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                MacBook Pro 13”
                                            </p>
                                            <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                                                2 Variants
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className=" py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    $2399.00
                                </td>
                                <td className=" py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    Laptop
                                </td>
                                <td className=" py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
                                        Delivered
                                    </span>
                                </td>
                            </tr>
                            <tr className="">
                                <td className=" py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                                            <img
                                                className="h-[50px] w-[50px]"
                                                alt="Apple Watch Ultra"
                                                src="/images/product-02.jpg"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                Apple Watch Ultra
                                            </p>
                                            <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                                                1 Variant
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className=" py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    $879.00
                                </td>
                                <td className=" py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    Watch
                                </td>
                                <td className=" py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400">
                                        Pending
                                    </span>
                                </td>
                            </tr>
                            <tr className="">
                                <td className=" py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                                            <img
                                                className="h-[50px] w-[50px]"
                                                alt="iPhone 15 Pro Max"
                                                src="/images/product-03.jpg"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                iPhone 15 Pro Max
                                            </p>
                                            <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                                                2 Variants
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className=" py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    $1869.00
                                </td>
                                <td className=" py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    SmartPhone
                                </td>
                                <td className=" py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
                                        Delivered
                                    </span>
                                </td>
                            </tr>
                            <tr className="">
                                <td className=" py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                                            <img
                                                className="h-[50px] w-[50px]"
                                                alt="iPad Pro 3rd Gen"
                                                src="/images/product-04.jpg"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                iPad Pro 3rd Gen
                                            </p>
                                            <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                                                2 Variants
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className=" py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    $1699.00
                                </td>
                                <td className=" py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    Electronics
                                </td>
                                <td className=" py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500">
                                        Canceled
                                    </span>
                                </td>
                            </tr>
                            <tr className="">
                                <td className=" py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                                            <img
                                                className="h-[50px] w-[50px]"
                                                alt="AirPods Pro 2nd Gen"
                                                src="/images/product-05.jpg"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                AirPods Pro 2nd Gen
                                            </p>
                                            <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                                                1 Variant
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className=" py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    $240.00
                                </td>
                                <td className=" py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    Accessories
                                </td>
                                <td className=" py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
                                        Delivered
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default RecentOrders
