import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { Textarea } from '@/components/ui/textarea';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import initialFormData from "../../../json/config.json"
const FormField = () => {
    const [selectedPlatform, setSelectedPlatform] = useState("");
    const [formData, setFormData] = useState(initialFormData);
    const addFormField = (category) => {
        const newFormData = { ...formData };
        const lastId = newFormData[category][newFormData[category].length - 1].id;
        const newField = { id: lastId + 1 };

        // Initialize the new field's values to empty strings
        if (Array.isArray(newFormData[category])) {
            for (const key in newFormData[category][0]) {
                if (key !== 'id') {
                    newField[key] = { ...newFormData[category][0][key], value: '' };
                }
            }
        } else {
            for (const key in newFormData[category]) {
                newField[key] = { ...newFormData[category][key], value: '' };
            }
        }

        newFormData[category] = [...newFormData[category], newField];
        setFormData(newFormData);
    };
    const handleChange = (category, fieldId, fieldKey, value) => {
        const newFormData = { ...formData };

        if (Array.isArray(newFormData[category])) {
            const fieldIndex = newFormData[category].findIndex(field => field.id === fieldId);
            const updatedField = { ...newFormData[category][fieldIndex], [fieldKey]: { ...newFormData[category][fieldIndex][fieldKey], value: value } };
            const updatedCategory = [...newFormData[category]];
            updatedCategory[fieldIndex] = updatedField;
            newFormData[category] = updatedCategory;
        } else {
            newFormData[category][fieldKey].value = value;
        }

        setFormData(newFormData);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const formattedData = {};

        // Extracting key-value pairs of the 'value' field
        Object.keys(formData).forEach((category) => {
            formattedData[category] = [];
            if (Array.isArray(formData[category])) {
                formData[category].forEach((field) => {
                    const formattedField = {};
                    Object.keys(field).forEach((key) => {
                        if (key !== 'id') {
                            formattedField[key] = field[key].value;
                        }
                    });
                    formattedData[category].push(formattedField);
                });
            } else {
                formattedData[category] = {};
                Object.keys(formData[category]).forEach((key) => {
                    formattedData[category][key] = formData[category][key].value;
                });
            }
        });

        // Convert the formatted data to JSON
        const jsonData = JSON.stringify(formattedData);

        // Create a blob and download the JSON file
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'siteData.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    return (
        <div >
            <div className='flex items-start flex-col m-5 w-full'>
                <h2>Already the App is on Store ? Then enter the app id below</h2>
                <div className='grid' style={{ display: "grid", gridTemplateColumns: "5fr 1fr", alignItems: "center" }} >
                    <Input className="mt-3" placeholder="Enter the app identifier" />
                    <button className='h-9  mx-2 mt-3 px-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90' type='submit' >Fetch</button>
                </div>
            </div>
            <hr />
            <form>
                {
                    Object.keys(formData).map((category) => (
                        <Accordion key={category} type="single" collapsible className="w-full">
                            <AccordionItem value={category}>
                                <AccordionTrigger>{category.replace(/_/g, "-")}</AccordionTrigger>
                                <AccordionContent>
                                    {Array.isArray(formData[category]) ? (
                                        <>
                                            {formData[category].map((fields, index) => (
                                                <div key={index}>
                                                    {Object.keys(fields).map((fieldKey) => (
                                                        fieldKey !== 'id' && (
                                                            <>
                                                                {formData[category][index][fieldKey].type === 'enum' ? (
                                                                    <div key={fieldKey}>
                                                                        <div className='mb-4' >
                                                                            <label htmlFor={fieldKey} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{formData[category][index][fieldKey].label}</label>
                                                                            <DropdownMenu>
                                                                                <DropdownMenuTrigger>{formData[category][index][fieldKey].value || formData[category][index][fieldKey].placeholder}</DropdownMenuTrigger>
                                                                                <DropdownMenuContent>
                                                                                    {formData[category][index][fieldKey].options.map((option, optionIndex) => (
                                                                                        <DropdownMenuItem key={optionIndex} onClick={(e) => handleChange(category, fields.id, fieldKey, option)}>{option}</DropdownMenuItem>
                                                                                    ))}
                                                                                </DropdownMenuContent>
                                                                            </DropdownMenu>
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    <>
                                                                        <label htmlFor={fieldKey} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{formData[category][index][fieldKey].label}</label>
                                                                        <Input
                                                                            key={fieldKey}
                                                                            type={formData[category][index][fieldKey].type}
                                                                            placeholder={formData[category][index][fieldKey].placeholder}
                                                                            value={formData[category][index][fieldKey].value}
                                                                            onChange={(e) => handleChange(category, fields.id, fieldKey, e.target.value)}
                                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2 mb-2"
                                                                        />
                                                                    </>
                                                                )}
                                                            </>
                                                        )
                                                    ))}
                                                </div>
                                            ))}
                                            <button className='h-8 mt-1 px-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90' type="button" onClick={() => addFormField(category)}>Add more options</button>
                                        </>
                                    ) : (
                                        Object.keys(formData[category]).map((fieldKey) => (
                                            <div key={fieldKey}>
                                                {formData[category][fieldKey].type !== "textarea" ? (
                                                    <>
                                                        <label htmlFor={fieldKey} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{formData[category][fieldKey].label}</label>
                                                        <Input
                                                            key={fieldKey}
                                                            type={formData[category][fieldKey].type}
                                                            placeholder={formData[category][fieldKey].placeholder}
                                                            value={formData[category][fieldKey].value}
                                                            onChange={(e) => handleChange(category, 'name', fieldKey, e.target.value)}
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2 mb-2"
                                                        />
                                                    </>
                                                ) : (
                                                    <Textarea
                                                        key={fieldKey}
                                                        placeholder={formData[category][fieldKey].placeholder}
                                                        value={formData[category][fieldKey].value}
                                                        onChange={(e) => handleChange(category, 'name', fieldKey, e.target.value)}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2 mb-2"
                                                    />
                                                )}
                                            </div>
                                        ))
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))
                }

                <button className='h-8 mt-3 px-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90' type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default FormField;
