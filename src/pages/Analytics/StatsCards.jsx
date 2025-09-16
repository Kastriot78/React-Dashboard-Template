import React from 'react';

const StatsCard = ({
    title,
    value,
    percentage,
    comparisonText,
    percentagePositive = true
}) => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] h-full">
            <p className="text-gray-500 text-theme-sm dark:text-gray-400">{title}</p>
            <div className="flex items-end justify-between mt-3">
                <div>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">{value}</h4>
                </div>
                <div className="flex items-center gap-1">
                    <span
                        className={`inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-sm ${percentagePositive
                                ? 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500'
                                : 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500'
                            }`}
                    >
                        <span className="text-xs">{percentage}</span>
                    </span>
                    <span className="text-gray-500 text-theme-xs dark:text-gray-400">{comparisonText}</span>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;