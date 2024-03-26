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
import { Button } from '@/components/ui/button';

const FormField = ({ fields, updateFormdata }) => {
    const [selectedPlatform, setSelectedPlatform] = useState("");
    const [sName, setSName] = useState(""); // Moved sName to useState

    useEffect(() => {
        const sectionName = fields.map((fieldGroup, index) => (fieldGroup.title));
        setSName(sectionName[0]?.split(":")[1]?.trim()?.toLowerCase());
    }, [fields]);

    const handleInputChange = (value, section, fieldName, dropdownValue = null) => {
        if (dropdownValue !== null) {
            setSelectedPlatform(dropdownValue);
        }
        updateFormdata(section, fieldName, value); // Call the updateFormData function
    };


    return (
        <div>
            {/* Render regular fields */}
            <Accordion type="single" collapsible>
                {fields.map((fieldGroup, index) => (
                    <AccordionItem key={index} value={`section-${index}`} >
                        <div key={index}>
                            <AccordionTrigger>{fieldGroup.title}</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid gap-4">
                                    {Object.entries(fieldGroup.fields).map(([fieldName, fieldConfig]) => (
                                        <div key={fieldName}>
                                            <label htmlFor={fieldName} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{fieldConfig.label}</label>
                                            {(() => {
                                                switch (fieldConfig.type) {
                                                    case "textarea":
                                                        return (
                                                            <Textarea
                                                                id={fieldName}
                                                                name={fieldName}
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                placeholder={fieldConfig.placeholder}
                                                                required
                                                                onChange={(e) => handleInputChange(e.target.value, sName, fieldName)}
                                                            />
                                                        );
                                                    case "dropdown":
                                                        return (
                                                            <DropdownMenu>
                                                                <DropdownMenuTrigger>{selectedPlatform || "Select Platform"}</DropdownMenuTrigger>
                                                                <DropdownMenuContent>
                                                                    {fieldConfig.options.map((item, index) => (
                                                                        <DropdownMenuItem key={index} onClick={(e) => handleInputChange(item, sName, fieldName, item)}>{item}</DropdownMenuItem>
                                                                    ))}
                                                                </DropdownMenuContent>
                                                            </DropdownMenu>
                                                        );

                                                    default:
                                                        return (
                                                            <Input
                                                                id={fieldName}
                                                                name={fieldName}
                                                                type={fieldConfig.type}
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                placeholder={fieldConfig.placeholder}
                                                                required
                                                                onChange={(e) => handleInputChange(e.target.value, sName, fieldName)}
                                                            />
                                                        );
                                                }
                                            })()}

                                        </div>

                                    ))}



                                </div>
                            </AccordionContent>
                        </div>
                    </AccordionItem>

                ))}

            </Accordion>
        </div>
    );
};

export default FormField;
