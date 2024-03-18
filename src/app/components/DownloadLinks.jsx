import React from 'react';

const DownloadLinks = ({ downloadLinks }) => {
    return (
        <div>
            <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">Download Links</h3>
            <div className="grid gap-4">
                {Object.entries(downloadLinks.links).map(([platform, fieldConfig], index) => (
                    <div key={index}>
                        <label htmlFor={`${platform}_download`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{fieldConfig.label}</label>
                        <input
                            type={fieldConfig.type}
                            id={`${platform}_download`}
                            name={`${platform}_download`}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder={fieldConfig.placeholder}
                            required
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DownloadLinks;
