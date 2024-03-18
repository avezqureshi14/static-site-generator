import React from 'react';

const InAppPurchases = ({ inAppPurchases }) => {
    return (
        <div>
            <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">In-App Purchases</h3>
            <div className="grid gap-4">
                {Object.entries(inAppPurchases).map(([key, fieldConfig], index) => (
                    <div key={index}>
                        <label htmlFor={key} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{fieldConfig.label}</label>
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

export default InAppPurchases;
