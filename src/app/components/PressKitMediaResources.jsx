import React from 'react';
import FormFeild from './Formfeild';

const PressKitMediaResources = ({ pressKitMediaResources }) => {
    return (
        <FormFeild fields={[
            { title: 'Press Kit & Media Resources', fields: pressKitMediaResources.resources }
        ]} />
    );
};

export default PressKitMediaResources;
