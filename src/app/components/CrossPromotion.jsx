import React from 'react';

const CrossPromotion = ({ crossPromotion }) => {
    return (
        <div>
            <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">Cross Promotion</h3>
            <div className="grid gap-4">
                {crossPromotion.links.map((link, index) => (
                    <div key={index}>
                        <label htmlFor={`cross_promotion_link_${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{link.label}</label>
                        <input
                            type={link.type}
                            id={`cross_promotion_link_${index}`}
                            name={`cross_promotion_link_${index}`}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder={link.placeholder}
                            required
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CrossPromotion;
