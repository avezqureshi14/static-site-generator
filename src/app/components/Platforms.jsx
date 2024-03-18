import React from 'react';

const Platform = ({ platforms }) => {
    return (
        <div>
            <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">Step 3: Platform</h3>
            {platforms.map((platform, index) => (
                <div key={index}>
                    <label htmlFor={`platforms_${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{platform.platforms.label}</label>
                    <input
                        type={platform.platforms.type}
                        id={`platforms_${index}`}
                        name={`platforms_${index}`}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={platform.platforms.placeholder}
                        required
                    />
                    <label htmlFor={`release_date_${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{platform.release_date.label}</label>
                    <input
                        type={platform.release_date.type}
                        id={`release_date_${index}`}
                        name={`release_date_${index}`}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={platform.release_date.placeholder}
                        required
                    />
                </div>
            ))}
        </div>
    );
};

export default Platform;
