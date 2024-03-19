import React from 'react';
import FormFeild from './Formfeild';

const Cover = ({ coverFields }) => {
    return (
        <FormFeild fields={[
            { title: 'Cover', fields: coverFields }
        ]} />
    );
};

export default Cover;
