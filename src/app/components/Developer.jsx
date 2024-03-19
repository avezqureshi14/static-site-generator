import React from 'react';
import FormFeild from './Formfeild';

const Developer = ({ developerFields }) => {
    return (
        <FormFeild fields={[
            { title: 'Step 2: Developer', fields: developerFields }
        ]} />
    );
};

export default Developer;
