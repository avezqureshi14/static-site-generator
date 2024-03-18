import React from 'react';

const Overview = ({ overviewFields }) => {
    return (
        <div>
            <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">Step 1: Overview</h3>
            <div className="grid gap-4">
                {Object.entries(overviewFields).map(([fieldName, fieldConfig]) => (
                    <div key={fieldName}>
                        <label htmlFor={fieldName} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{fieldConfig.label}</label>
                        {fieldConfig.type === "text" ?
                            <input
                                type={fieldConfig.type}
                                id={fieldName}
                                name={fieldName}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder={fieldConfig.placeholder}
                                required
                            />
                            :
                            <textarea
                                id={fieldName}
                                name={fieldName}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder={fieldConfig.placeholder}
                                required
                            ></textarea>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Overview;
