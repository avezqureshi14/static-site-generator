import React from 'react';

const DownloadLinks = ({ downloadLinks }) => {
    return (
        <FormFeild fields={[
            { title: 'Download Links', fields: downloadLinks.links }
        ]} />
    );
};

export default DownloadLinks;
