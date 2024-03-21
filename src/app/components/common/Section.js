// CombineComponents.js
import React from 'react';
import FormField from '../forms/FormField'; // Corrected the import name to match the actual file name

export const Overview = ({ overviewFields }) => (
    <FormField fields={[{ title: 'Step 1: Overview', fields: overviewFields }]} />
);

export const Developer = ({ developerFields }) => (
    <FormField fields={[{ title: 'Step 2: Developer', fields: developerFields }]} />
);

export const Platform = ({ platforms }) => (
    <FormField fields={[{ title: 'Step 3: Platform', fields: platforms[0] }]} />
);

export const Cover = ({ coverFields }) => (
    <FormField fields={[{ title: 'Step 4: Cover', fields: coverFields }]} />
);

export const SocialMediaLinks = ({ socialMediaLinks }) => (
    <>
        <FormField fields={[{ title: 'Step 5: Social Media Links', fields: socialMediaLinks[0] }]} />
    </>
);

export const InAppPurchases = ({ inAppPurchases }) => (
    <FormField fields={[{ title: 'Step 6: In-App Purchases', fields: inAppPurchases }]} />
);

export const FAQs = ({ faqs }) => (
    <FormField fields={[{ title: 'Step 8: FAQ', fields: faqs[0] }]} />
);

export const Screenshots = ({ screenshots }) => (
    <FormField fields={[{ title: 'Step 7: Screenshots', fields: screenshots[0] }]} />
);

export const ContactInfo = ({ contactInfo }) => (
    <FormField fields={[{ title: 'Step 9: Contact Information', fields: contactInfo }]} />
);

export const DownloadLinks = ({ downloadLinks }) => (
    <FormField fields={[{ title: 'Step 10: Download Links', fields: downloadLinks.links }]} />
);

export const PrivacyPolicyTermsOfService = ({ privacyPolicyTermsOfService }) => (
    <FormField fields={[{ title: 'Step 11: Privacy Policy & Terms of Service', fields: privacyPolicyTermsOfService }]} />
);

export const GameplayVideosTutorials = ({ gameplayVideosTutorials }) => (
    <FormField fields={[{ title: 'Step 12: Game Play Videos Tutorials', fields: gameplayVideosTutorials[0] }]} />
);

export const PressKitMediaResources = ({ pressKitMediaResources }) => (
    <FormField fields={[{ title: 'Step 13: Press Kit & Media Resources', fields: pressKitMediaResources.resources }]} />
);

export const CrossPromotion = ({ crossPromotion }) => {
    return (
        <FormField fields={[{ title: 'Step 14: Cross Promotion Links', fields: crossPromotion[0] }]} />
    );
};

export const FeedbackSurveyForms = ({ feedbackSurveyForms }) => (
    <FormField fields={[{ title: 'Step 15: Feedback Survey forms', fields: feedbackSurveyForms }]} />
);
