import React from 'react';

const FormField = ({ fields }) => {
    const isArray = fields.length > 0 && Array.isArray(fields[0].fields);
    console.log(fields + "hey")
    return (
        <div>
            {/* Render array-type fields */}
            {isArray && fields.map((fieldGroup, index) => (
                <div key={index}>
                    <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">{fieldGroup.title}</h3>
                    <div className="grid gap-4">
                        {fieldGroup.fields.map((field, fieldIndex) => (
                            <div key={fieldIndex}>
                                <label htmlFor={field.name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{field.label}</label>
                                {field.type === "text" ?
                                    <input
                                        type={field.type}
                                        id={field.name}
                                        name={field.name}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={field.placeholder}
                                        required
                                    />
                                    :
                                    <textarea
                                        id={field.name}
                                        name={field.name}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={field.placeholder}
                                        required
                                    ></textarea>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Render regular fields */}
            {!isArray && fields.map((fieldGroup, index) => (
                <div key={index}>
                    <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">{fieldGroup.title}</h3>
                    <div className="grid gap-4">
                        {Object.entries(fieldGroup.fields).map(([fieldName, fieldConfig]) => (
                            <div key={fieldName}>
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
            ))}
        </div>
    );
};

export default FormField;
