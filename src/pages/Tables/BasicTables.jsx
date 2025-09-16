import React from 'react'
import DashboardNav from '../../utils/DashboardNav'

const BasicTables = () => {
    return (
        <div>
            <DashboardNav title="Basic Tables" subTitle="Home" text="Basic Tables" />
            <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ">
                <div className="px-6 py-5">
                    <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                        Basic Table 1
                    </h3>
                </div>
                <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                    <div className="space-y-6">
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                            <div className="max-w-full overflow-x-auto">
                                <table className="min-w-full  undefined">
                                    <thead className="border-b border-gray-100 dark:border-white/[0.05]">
                                        <tr>
                                            <th className=" px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                User
                                            </th>
                                            <th className=" px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                Project Name
                                            </th>
                                            <th className=" px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                Team
                                            </th>
                                            <th className=" px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                Status
                                            </th>
                                            <th className=" px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                Budget
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                        <tr>
                                            <td className=" px-5 py-4 sm:px-6 text-start">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 overflow-hidden rounded-full">
                                                        <img
                                                            width={40}
                                                            height={40}
                                                            alt="Lindsey Curtis"
                                                            src="/images/user-17.jpg"
                                                        />
                                                    </div>
                                                    <div>
                                                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                            Lindsey Curtis
                                                        </span>
                                                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                                            Web Designer
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                Agency Website
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                <div className="flex -space-x-2">
                                                    <div className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt="Team member 1"
                                                            className="w-full size-6"
                                                            src="/images/user-20.jpg"
                                                        />
                                                    </div>
                                                    <div className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt="Team member 2"
                                                            className="w-full size-6"
                                                            src="/images/user-17.jpg"
                                                        />
                                                    </div>
                                                    <div className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt="Team member 3"
                                                            className="w-full size-6"
                                                            src="/images/user-18.jpg"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
                                                    Active
                                                </span>
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                3.9K
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" px-5 py-4 sm:px-6 text-start">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 overflow-hidden rounded-full">
                                                        <img
                                                            width={40}
                                                            height={40}
                                                            alt="Kaiya George"
                                                            src="/images/user-19.jpg"
                                                        />
                                                    </div>
                                                    <div>
                                                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                            Kaiya George
                                                        </span>
                                                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                                            Project Manager
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                Technology
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                <div className="flex -space-x-2">
                                                    <div className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt="Team member 1"
                                                            className="w-full size-6"
                                                            src="/images/user-04.jpg"
                                                        />
                                                    </div>
                                                    <div className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt="Team member 2"
                                                            className="w-full size-6"
                                                            src="/images/user-02.jpg"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400">
                                                    Pending
                                                </span>
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                24.9K
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" px-5 py-4 sm:px-6 text-start">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 overflow-hidden rounded-full">
                                                        <img
                                                            width={40}
                                                            height={40}
                                                            alt="Zain Geidt"
                                                            src="/images/user-03.jpg"
                                                        />
                                                    </div>
                                                    <div>
                                                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                            Zain Geidt
                                                        </span>
                                                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                                            Content Writing
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                Blog Writing
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                <div className="flex -space-x-2">
                                                    <div className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt="Team member 1"
                                                            className="w-full size-6"
                                                            src="/images/user-04.jpg"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
                                                    Active
                                                </span>
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                12.7K
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" px-5 py-4 sm:px-6 text-start">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 overflow-hidden rounded-full">
                                                        <img
                                                            width={40}
                                                            height={40}
                                                            alt="Abram Schleifer"
                                                            src="/images/user-20.jpg"
                                                        />
                                                    </div>
                                                    <div>
                                                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                            Abram Schleifer
                                                        </span>
                                                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                                            Digital Marketer
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                Social Media
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                <div className="flex -space-x-2">
                                                    <div className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt="Team member 1"
                                                            className="w-full size-6"
                                                            src="/images/user-04.jpg"
                                                        />
                                                    </div>
                                                    <div className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt="Team member 2"
                                                            className="w-full size-6"
                                                            src="/images/user-18.jpg"
                                                        />
                                                    </div>
                                                    <div className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt="Team member 3"
                                                            className="w-full size-6"
                                                            src="/images/user-20.jpg"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500">
                                                    Cancel
                                                </span>
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                2.8K
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" px-5 py-4 sm:px-6 text-start">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 overflow-hidden rounded-full">
                                                        <img
                                                            width={40}
                                                            height={40}
                                                            alt="Carla George"
                                                            src="/images/user-02.jpg"
                                                        />
                                                    </div>
                                                    <div>
                                                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                            Carla George
                                                        </span>
                                                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                                            Front-end Developer
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                Website
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                <div className="flex -space-x-2">
                                                    <div className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt="Team member 1"
                                                            className="w-full size-6"
                                                            src="/images/user-04.jpg"
                                                        />
                                                    </div>
                                                    <div className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt="Team member 2"
                                                            className="w-full size-6"
                                                            src="/images/user-03.jpg"
                                                        />
                                                    </div>
                                                    <div className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt="Team member 3"
                                                            className="w-full size-6"
                                                            src="/images/user-04.jpg"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
                                                    Active
                                                </span>
                                            </td>
                                            <td className=" px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                4.5K
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mt-6">
                <div className="px-6 py-5">
                    <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                        Basic Table 2
                    </h3>
                </div>
                <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                    <div className="space-y-6">
                        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white pt-4 dark:border-white/[0.05] dark:bg-white/[0.03]">
                            <div className="flex flex-col gap-4 px-6 mb-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                                        Recent Orders
                                    </h3>
                                </div>
                            </div>
                            <div className="max-w-full overflow-x-auto">
                                <table className="min-w-full  undefined">
                                    <thead className="px-6 py-3.5 border-t border-gray-100 border-y bg-gray-50 dark:border-white/[0.05] dark:bg-gray-900">
                                        <tr>
                                            <td className=" px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                                                Customer
                                            </td>
                                            <td className=" px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                                                Product/Service
                                            </td>
                                            <td className=" px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                                                Deal Value
                                            </td>
                                            <td className=" px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                                                Close Date
                                            </td>
                                            <td className=" px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                                                Status
                                            </td>
                                            <td className=" px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                                                Action
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-10 w-10 w-10 h-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                                                        <span className="text-sm font-medium">JS</span>
                                                    </div>
                                                    <div>
                                                        <span className="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400">
                                                            Jane Smith
                                                        </span>
                                                        <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                                                            janesmith@gmail.com
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                                                    Cloud Hosting
                                                </p>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                                                    $12,99.00
                                                </p>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                                                    2024-06-18
                                                </p>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400">
                                                    Pending
                                                </span>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <button>
                                                    <svg
                                                        width="1em"
                                                        height="1em"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="text-gray-700 cursor-pointer size-5 hover:text-error-500 dark:text-gray-400 dark:hover:text-error-500"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M6.54142 3.7915C6.54142 2.54886 7.54878 1.5415 8.79142 1.5415H11.2081C12.4507 1.5415 13.4581 2.54886 13.4581 3.7915V4.0415H15.6252H16.666C17.0802 4.0415 17.416 4.37729 17.416 4.7915C17.416 5.20572 17.0802 5.5415 16.666 5.5415H16.3752V8.24638V13.2464V16.2082C16.3752 17.4508 15.3678 18.4582 14.1252 18.4582H5.87516C4.63252 18.4582 3.62516 17.4508 3.62516 16.2082V13.2464V8.24638V5.5415H3.3335C2.91928 5.5415 2.5835 5.20572 2.5835 4.7915C2.5835 4.37729 2.91928 4.0415 3.3335 4.0415H4.37516H6.54142V3.7915ZM14.8752 13.2464V8.24638V5.5415H13.4581H12.7081H7.29142H6.54142H5.12516V8.24638V13.2464V16.2082C5.12516 16.6224 5.46095 16.9582 5.87516 16.9582H14.1252C14.5394 16.9582 14.8752 16.6224 14.8752 16.2082V13.2464ZM8.04142 4.0415H11.9581V3.7915C11.9581 3.37729 11.6223 3.0415 11.2081 3.0415H8.79142C8.37721 3.0415 8.04142 3.37729 8.04142 3.7915V4.0415ZM8.3335 7.99984C8.74771 7.99984 9.0835 8.33562 9.0835 8.74984V13.7498C9.0835 14.1641 8.74771 14.4998 8.3335 14.4998C7.91928 14.4998 7.5835 14.1641 7.5835 13.7498V8.74984C7.5835 8.33562 7.91928 7.99984 8.3335 7.99984ZM12.4168 8.74984C12.4168 8.33562 12.081 7.99984 11.6668 7.99984C11.2526 7.99984 10.9168 8.33562 10.9168 8.74984V13.7498C10.9168 14.1641 11.2526 14.4998 11.6668 14.4998C12.081 14.4998 12.4168 14.1641 12.4168 13.7498V8.74984Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-10 w-10 w-10 h-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                                                        <span className="text-sm font-medium">MB</span>
                                                    </div>
                                                    <div>
                                                        <span className="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400">
                                                            Michael Brown
                                                        </span>
                                                        <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                                                            michaelbrown@gmail.com
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                                                    Web Domain
                                                </p>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                                                    $9,50.00
                                                </p>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                                                    2024-06-20
                                                </p>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500">
                                                    Cancel
                                                </span>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <button>
                                                    <svg
                                                        width="1em"
                                                        height="1em"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="text-gray-700 cursor-pointer size-5 hover:text-error-500 dark:text-gray-400 dark:hover:text-error-500"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M6.54142 3.7915C6.54142 2.54886 7.54878 1.5415 8.79142 1.5415H11.2081C12.4507 1.5415 13.4581 2.54886 13.4581 3.7915V4.0415H15.6252H16.666C17.0802 4.0415 17.416 4.37729 17.416 4.7915C17.416 5.20572 17.0802 5.5415 16.666 5.5415H16.3752V8.24638V13.2464V16.2082C16.3752 17.4508 15.3678 18.4582 14.1252 18.4582H5.87516C4.63252 18.4582 3.62516 17.4508 3.62516 16.2082V13.2464V8.24638V5.5415H3.3335C2.91928 5.5415 2.5835 5.20572 2.5835 4.7915C2.5835 4.37729 2.91928 4.0415 3.3335 4.0415H4.37516H6.54142V3.7915ZM14.8752 13.2464V8.24638V5.5415H13.4581H12.7081H7.29142H6.54142H5.12516V8.24638V13.2464V16.2082C5.12516 16.6224 5.46095 16.9582 5.87516 16.9582H14.1252C14.5394 16.9582 14.8752 16.6224 14.8752 16.2082V13.2464ZM8.04142 4.0415H11.9581V3.7915C11.9581 3.37729 11.6223 3.0415 11.2081 3.0415H8.79142C8.37721 3.0415 8.04142 3.37729 8.04142 3.7915V4.0415ZM8.3335 7.99984C8.74771 7.99984 9.0835 8.33562 9.0835 8.74984V13.7498C9.0835 14.1641 8.74771 14.4998 8.3335 14.4998C7.91928 14.4998 7.5835 14.1641 7.5835 13.7498V8.74984C7.5835 8.33562 7.91928 7.99984 8.3335 7.99984ZM12.4168 8.74984C12.4168 8.33562 12.081 7.99984 11.6668 7.99984C11.2526 7.99984 10.9168 8.33562 10.9168 8.74984V13.7498C10.9168 14.1641 11.2526 14.4998 11.6668 14.4998C12.081 14.4998 12.4168 14.1641 12.4168 13.7498V8.74984Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-10 w-10 w-10 h-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                                        <span className="text-sm font-medium">AJ</span>
                                                    </div>
                                                    <div>
                                                        <span className="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400">
                                                            Alice Johnson
                                                        </span>
                                                        <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                                                            alicejohnson@gmail.com
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                                                    SSL Certificate
                                                </p>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                                                    $2,30.45
                                                </p>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                                                    2024-06-25
                                                </p>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400">
                                                    Pending
                                                </span>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <button>
                                                    <svg
                                                        width="1em"
                                                        height="1em"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="text-gray-700 cursor-pointer size-5 hover:text-error-500 dark:text-gray-400 dark:hover:text-error-500"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M6.54142 3.7915C6.54142 2.54886 7.54878 1.5415 8.79142 1.5415H11.2081C12.4507 1.5415 13.4581 2.54886 13.4581 3.7915V4.0415H15.6252H16.666C17.0802 4.0415 17.416 4.37729 17.416 4.7915C17.416 5.20572 17.0802 5.5415 16.666 5.5415H16.3752V8.24638V13.2464V16.2082C16.3752 17.4508 15.3678 18.4582 14.1252 18.4582H5.87516C4.63252 18.4582 3.62516 17.4508 3.62516 16.2082V13.2464V8.24638V5.5415H3.3335C2.91928 5.5415 2.5835 5.20572 2.5835 4.7915C2.5835 4.37729 2.91928 4.0415 3.3335 4.0415H4.37516H6.54142V3.7915ZM14.8752 13.2464V8.24638V5.5415H13.4581H12.7081H7.29142H6.54142H5.12516V8.24638V13.2464V16.2082C5.12516 16.6224 5.46095 16.9582 5.87516 16.9582H14.1252C14.5394 16.9582 14.8752 16.6224 14.8752 16.2082V13.2464ZM8.04142 4.0415H11.9581V3.7915C11.9581 3.37729 11.6223 3.0415 11.2081 3.0415H8.79142C8.37721 3.0415 8.04142 3.37729 8.04142 3.7915V4.0415ZM8.3335 7.99984C8.74771 7.99984 9.0835 8.33562 9.0835 8.74984V13.7498C9.0835 14.1641 8.74771 14.4998 8.3335 14.4998C7.91928 14.4998 7.5835 14.1641 7.5835 13.7498V8.74984C7.5835 8.33562 7.91928 7.99984 8.3335 7.99984ZM12.4168 8.74984C12.4168 8.33562 12.081 7.99984 11.6668 7.99984C11.2526 7.99984 10.9168 8.33562 10.9168 8.74984V13.7498C10.9168 14.1641 11.2526 14.4998 11.6668 14.4998C12.081 14.4998 12.4168 14.1641 12.4168 13.7498V8.74984Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-10 w-10 w-10 h-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                                                        <span className="text-sm font-medium">RL</span>
                                                    </div>
                                                    <div>
                                                        <span className="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400">
                                                            Robert Lee
                                                        </span>
                                                        <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                                                            robertlee@gmail.com
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                                                    Premium Support
                                                </p>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                                                    $15,20.00
                                                </p>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                                                    2024-06-30
                                                </p>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
                                                    Complete
                                                </span>
                                            </td>
                                            <td className=" px-4 sm:px-6 py-3.5">
                                                <button>
                                                    <svg
                                                        width="1em"
                                                        height="1em"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="text-gray-700 cursor-pointer size-5 hover:text-error-500 dark:text-gray-400 dark:hover:text-error-500"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M6.54142 3.7915C6.54142 2.54886 7.54878 1.5415 8.79142 1.5415H11.2081C12.4507 1.5415 13.4581 2.54886 13.4581 3.7915V4.0415H15.6252H16.666C17.0802 4.0415 17.416 4.37729 17.416 4.7915C17.416 5.20572 17.0802 5.5415 16.666 5.5415H16.3752V8.24638V13.2464V16.2082C16.3752 17.4508 15.3678 18.4582 14.1252 18.4582H5.87516C4.63252 18.4582 3.62516 17.4508 3.62516 16.2082V13.2464V8.24638V5.5415H3.3335C2.91928 5.5415 2.5835 5.20572 2.5835 4.7915C2.5835 4.37729 2.91928 4.0415 3.3335 4.0415H4.37516H6.54142V3.7915ZM14.8752 13.2464V8.24638V5.5415H13.4581H12.7081H7.29142H6.54142H5.12516V8.24638V13.2464V16.2082C5.12516 16.6224 5.46095 16.9582 5.87516 16.9582H14.1252C14.5394 16.9582 14.8752 16.6224 14.8752 16.2082V13.2464ZM8.04142 4.0415H11.9581V3.7915C11.9581 3.37729 11.6223 3.0415 11.2081 3.0415H8.79142C8.37721 3.0415 8.04142 3.37729 8.04142 3.7915V4.0415ZM8.3335 7.99984C8.74771 7.99984 9.0835 8.33562 9.0835 8.74984V13.7498C9.0835 14.1641 8.74771 14.4998 8.3335 14.4998C7.91928 14.4998 7.5835 14.1641 7.5835 13.7498V8.74984C7.5835 8.33562 7.91928 7.99984 8.3335 7.99984ZM12.4168 8.74984C12.4168 8.33562 12.081 7.99984 11.6668 7.99984C11.2526 7.99984 10.9168 8.33562 10.9168 8.74984V13.7498C10.9168 14.1641 11.2526 14.4998 11.6668 14.4998C12.081 14.4998 12.4168 14.1641 12.4168 13.7498V8.74984Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BasicTables
