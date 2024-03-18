import React from 'react';

const Footer = ({ footer }) => {
    const { copyright_info, legal_links, social_media_links } = footer;

    return (
        <div>
            <h2 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">Footer</h2>
            <div className="grid gap-4">
                <div>
                    <label htmlFor="copyright_info" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{copyright_info.label}</label>
                    <input
                        type={copyright_info.type}
                        id="copyright_info"
                        name="copyright_info"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={copyright_info.placeholder}
                        required
                    />
                </div>
                {legal_links.map((documents, index) => (
                    <div key={index}>
                        {Object.entries(documents).map(([document, fieldConfig]) => (
                            <div key={document}>
                                <label htmlFor={`${document}_url`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{fieldConfig.label}</label>
                                <input
                                    type={fieldConfig.type}
                                    id={`${document}_url`}
                                    name={`${document}_url`}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder={fieldConfig.placeholder}
                                    required
                                />
                            </div>
                        ))}
                    </div>
                ))}
                {social_media_links.map((platforms, index) => (
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

export default Footer;
