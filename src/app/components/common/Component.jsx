import FormField from "../forms/Formfield";

const Component = ({ formData, updateFormdata }) => {
    return (
        <div>
            {Object.keys(formData).map((sectionKey, index) => (
                <FormField key={index} fields={[{ title: `Step ${index + 1}: ${sectionKey}`, fields: Array.isArray(formData[sectionKey]) ? formData[sectionKey][0] : formData[sectionKey] }]} updateFormdata={updateFormdata} />
            ))}
        </div>
    );
};

export default Component;
