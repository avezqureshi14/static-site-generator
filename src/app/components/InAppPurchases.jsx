import React from 'react';
import FormFeild from './Formfeild';

const InAppPurchases = ({ inAppPurchases }) => {
    return (
        <FormFeild fields={[
            { title: 'In-App Purchases', fields: inAppPurchases }
        ]} />
    );
};

export default InAppPurchases;
