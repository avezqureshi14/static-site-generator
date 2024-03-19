import React from 'react';
import FormFeild from './Formfeild';

const Overview = ({ overviewFields }) => {
    return (
        <FormFeild fields={[
            { title: 'Step 1: Overview', fields: overviewFields }
        ]} />
    );
};

export default Overview;
