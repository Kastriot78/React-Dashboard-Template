import React from 'react'

const RowItem = ({ title, time }) => {
    const [isFilled, setIsFilled] = React.useState(false);
    const [isChecked, setIsChecked] = React.useState(false);
    const toggleStar = () => {
        setIsFilled(!isFilled);
    };
    const handleCheckboxChange = (id) => {
        setIsChecked(!isChecked);
    };
    return (
        <div className="flex cursor-pointer items-center px-4 py-4 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/[0.03]">
            <div className="flex items-center w-1/5">
                <label className="flex items-center space-x-3 group cursor-pointer ">
                    <div className="relative w-5 h-5">
                        <input
                            className={`w-5 h-5 appearance-none ${isChecked ? 'bg-[#465fff]' : ''} cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60`}
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        {isChecked && (
                            <svg
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2"
                                viewBox="0 0 20 20"
                                fill="white"
                            >
                                <path d="M7.629 14.571L3.057 10l-1.543 1.543 6.115 6.114L18.486 5.543 17 4z" />
                            </svg>
                        )}
                    </div>
                </label>
                <span className="ml-3 text-gray-400 cursor-pointer" onClick={toggleStar}>
                    {isFilled ? (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="#FDB022" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99991 3.125L12.2337 7.65114L17.2286 8.37694L13.6142 11.9L14.4675 16.8747L9.99991 14.526L5.53235 16.8747L6.38558 11.9L2.77124 8.37694L7.76613 7.65114L9.99991 3.125Z"></path>
                        </svg>
                    ) : (
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.99993 2.375C10.2854 2.375 10.5461 2.53707 10.6725 2.79308L12.7318 6.96563L17.3365 7.63473C17.619 7.67578 17.8537 7.87367 17.9419 8.14517C18.0301 8.41668 17.9565 8.71473 17.7521 8.914L14.4201 12.1619L15.2067 16.748C15.255 17.0293 15.1393 17.3137 14.9083 17.4815C14.6774 17.6493 14.3712 17.6714 14.1185 17.5386L9.99993 15.3733L5.88137 17.5386C5.62869 17.6714 5.32249 17.6493 5.09153 17.4815C4.86057 17.3137 4.7449 17.0293 4.79316 16.748L5.57974 12.1619L2.24775 8.914C2.04332 8.71473 1.96975 8.41668 2.05797 8.14517C2.14619 7.87367 2.3809 7.67578 2.66341 7.63473L7.2681 6.96563L9.32738 2.79308C9.45373 2.53707 9.71445 2.375 9.99993 2.375ZM9.99993 4.81966L8.4387 7.98306C8.32946 8.20442 8.11828 8.35785 7.874 8.39334L4.38298 8.90062L6.90911 11.363C7.08587 11.5353 7.16653 11.7835 7.1248 12.0268L6.52847 15.5037L9.65093 13.8622C9.86942 13.7473 10.1304 13.7473 10.3489 13.8622L13.4714 15.5037L12.8751 12.0268C12.8333 11.7835 12.914 11.5353 13.0908 11.363L15.6169 8.90062L12.1259 8.39334C11.8816 8.35785 11.6704 8.20442 11.5612 7.98306L9.99993 4.81966Z"
                                fill="currentColor"
                            />
                        </svg>
                    )}
                </span>
                <span className="ml-3 text-sm text-gray-700 truncate dark:text-gray-400">
                    {title}
                </span>
            </div>
            <div className="flex items-center w-3/5 gap-3">
                <p className="text-sm text-gray-500 truncate">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Assumenda dolor dolore esse modi nesciunt, nobis numquam
                    sed sequi sunt totam!
                </p>
                <span className="hidden rounded-full px-2 py-0.5 text-xs font-medium sm:inline-block text-red-700 bg-red-100">
                    Important
                </span>
            </div>
            <div className="w-1/5 text-right">
                <span className="block text-xs text-gray-400">
                    {time}
                </span>
            </div>
        </div>
    )
}

export default RowItem
