import React from 'react';
import ArrayField from '../forms/Arrayfield';

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
            </div>
        </div>
    );
};

export default Footer;
