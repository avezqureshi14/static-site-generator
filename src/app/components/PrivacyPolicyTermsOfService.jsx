import React from 'react';
import FormFeild from './Formfeild';

const PrivacyPolicyTermsOfService = ({ privacyPolicyTermsOfService }) => {
    return (
        <FormFeild fields={[
            { title: 'Privacy Policy & Terms of Service', fields: privacyPolicyTermsOfService }
        ]} />
    );
};

export default PrivacyPolicyTermsOfService;
