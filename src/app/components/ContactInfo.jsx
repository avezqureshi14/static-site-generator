import React from 'react';
import FormFeild from './Formfeild';

const ContactInfo = ({ contactInfo }) => {

    return (
        <FormFeild fields={[
            { title: 'Contact Information', fields: contactInfo }
        ]} />
    );
};

export default ContactInfo;
