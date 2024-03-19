import React from 'react';
import FormFeild from './Formfeild';

const FeedbackSurveyForms = ({ feedbackSurveyForms }) => {
    return (
        <FormFeild fields={[
            { title: 'Feedback & Survey Forms', fields: feedbackSurveyForms }
        ]} />
    );
};

export default FeedbackSurveyForms;
