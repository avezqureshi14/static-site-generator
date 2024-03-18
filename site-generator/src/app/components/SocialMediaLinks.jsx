import React from 'react';

const SocialMediaLinks = ({ socialMediaLinks }) => {
    return (
        <div>
            <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">Social Media Links</h3>
            <div className="grid gap-4">
                {socialMediaLinks.map((platforms, index) => (
                    <div key={index}>
                        {Object.entries(platforms).map(([platform, fieldConfig]) => (
                            <div key={platform}>
                                <label htmlFor={`${platform}_link`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{fieldConfig.label}</label>
                                <input
                                    type={fieldConfig.type}
                                    id={`${platform}_link`}
                                    name={`${platform}_link`}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder={fieldConfig.placeholder}
                                    required
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialMediaLinks;
