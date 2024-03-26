import React, { useState } from 'react';

function App() {
    const [inputFields, setInputFields] = useState([{ value: '' }]);

    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ value: '' });
        setInputFields(values);
    };

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        values[index].value = event.target.value;
        setInputFields(values);
    };

    const handleRemoveFields = index => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    return (
        <div>
            <button onClick={handleAddFields}>Add</button>
            {inputFields.map((inputField, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={inputField.value}
                        onChange={event => handleInputChange(index, event)}
                    />
                    <button onClick={() => handleRemoveFields(index)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default App;
