// CombineComponents.js
import React from 'react';
import FormField from '../forms/FormField'; // Corrected the import name to match the actual file name
import ArrayField from '../forms/Arrayfield'; // Corrected the import name to match the actual file name

export const Overview = ({ overviewFields }) => (
    <FormField fields={[{ title: 'Step 1: Overview', fields: overviewFields }]} />
);

export const Developer = ({ developerFields }) => (
    <FormField fields={[{ title: 'Step 2: Developer', fields: developerFields }]} />
);

export const Platform = ({ platforms }) => (
    <ArrayField fields={platforms} />
);

export const Cover = ({ coverFields }) => (
    <FormField fields={[{ title: 'Cover', fields: coverFields }]} />
);

export const SocialMediaLinks = ({ socialMediaLinks }) => (
    <ArrayField fields={socialMediaLinks} />
);

export const InAppPurchases = ({ inAppPurchases }) => (
    <FormField fields={[{ title: 'In-App Purchases', fields: inAppPurchases }]} />
);

export const FAQs = ({ faqs }) => (
    <ArrayField fields={faqs} />
);

export const Screenshots = ({ screenshots }) => (
    <ArrayField fields={screenshots} />
);

export const ContactInfo = ({ contactInfo }) => (
    <FormField fields={[{ title: 'Contact Information', fields: contactInfo }]} />
);

export const DownloadLinks = ({ downloadLinks }) => (
    <FormField fields={[{ title: 'Download Links', fields: downloadLinks.links }]} />
);

export const PrivacyPolicyTermsOfService = ({ privacyPolicyTermsOfService }) => (
    <FormField fields={[{ title: 'Privacy Policy & Terms of Service', fields: privacyPolicyTermsOfService }]} />
);

export const GameplayVideosTutorials = ({ gameplayVideosTutorials }) => (
    <ArrayField fields={gameplayVideosTutorials} />
);

export const PressKitMediaResources = ({ pressKitMediaResources }) => (
    <FormField fields={[{ title: 'Press Kit & Media Resources', fields: pressKitMediaResources.resources }]} />
);

export const CrossPromotion = ({ crossPromotion }) => {
    const fields = crossPromotion.links.map((link, index) => ({
        title: '',
        fields: [link]
    }));

    return (
        <div>
            <h3>Cross Promotion Links</h3>
            <FormField fields={fields} />
        </div>
    );
};

export const FeedbackSurveyForms = ({ feedbackSurveyForms }) => (
    <FormField fields={[{ title: 'Feedback & Survey Forms', fields: feedbackSurveyForms }]} />
);
