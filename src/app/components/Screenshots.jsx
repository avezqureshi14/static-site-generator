import React from 'react';

const Screenshots = ({ screenshots }) => {
    return (
        <div>
            <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">Screenshots</h3>
            {screenshots.map((screenshot, index) => (
                <div key={index}>
                    <label htmlFor={`screenshot_${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{screenshot.image.label}</label>
                    <input
                        type={screenshot.image.type}
                        id={`screenshot_${index}`}
                        name={`screenshot_${index}`}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={screenshot.image.placeholder}
                        required
                    />
                    <label htmlFor={`caption_${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{screenshot.caption.label}</label>
                    <input
                        type={screenshot.caption.type}
                        id={`caption_${index}`}
                        name={`caption_${index}`}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={screenshot.caption.placeholder}
                        required
                    />

                </div>
            ))}
        </div>
    );
};

export default Screenshots;
