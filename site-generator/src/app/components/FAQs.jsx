import React from 'react';

const FAQs = ({ faqs }) => {
    return (
        <div>
            <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">FAQs</h3>
            {faqs.map((faq, index) => (
                <div key={index}>
                    <label htmlFor={`question_${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{faq.question.label}</label>
                    <input
                        type={faq.question.type}
                        id={`question_${index}`}
                        name={`question_${index}`}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={faq.question.placeholder}
                        required
                    />
                    <label htmlFor={`answer_${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{faq.answer.label}</label>
                    <input
                        type={faq.answer.type}
                        id={`answer_${index}`}
                        name={`answer_${index}`}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={faq.answer.placeholder}
                        required
                    />
                </div>
            ))}
        </div>
    );
};

export default FAQs;
