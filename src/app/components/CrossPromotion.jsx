import React from 'react';
import FormFeild from './Formfeild'; // Import the FormFeild component

const CrossPromotion = ({ crossPromotion }) => {
    const fields = crossPromotion.links.map((link, index) => {
        return {
            title: ``,
            fields: [link]
        };
    });

    return (
        <div>
            <h3>Cross Promotion Links</h3>
            <FormFeild fields={fields} />
        </div>
    );
};

export default CrossPromotion;
