import React from 'react';

const ArrayField = ({ fields }) => {
    const title = fields[0].title;
    const field = fields[0].fields;
    return (
        <div>

            <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">{title}</h3>
            <div className="grid gap-4">
                {field.map((fieldGroup, index) => (
                    <>
                        {
                            Object.entries(fieldGroup).map(([fieldName, fieldConfig], fieldIndex) => (
                                <div key={fieldIndex}>
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
                                        <input
                                            type={fieldConfig.type}
                                            id={fieldName}
                                            name={fieldName}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder={fieldConfig.placeholder}
                                            required
                                        />
                                    }
                                </div>
                            ))
                        }
                    </>
                ))}
            </div>
        </div>
    );
};

export default ArrayField;
