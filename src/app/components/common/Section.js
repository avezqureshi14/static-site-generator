import React from 'react';
import FormField from '../forms/FormField'; // Corrected the import name to match the actual file name

export const Overview = ({ overviewFields, updateFormdata }) => (
    <FormField fields={[{ title: 'Step 1: Overview', fields: overviewFields }]} updateFormdata={updateFormdata} />
);

export const Developer = ({ developerFields, updateFormdata }) => (
    <FormField fields={[{ title: 'Step 2: Developer', fields: developerFields }]} updateFormdata={updateFormdata} />
);

export const Platform = ({ platforms, updateFormdata }) => (
    <FormField fields={[{ title: 'Step 3: Platform', fields: platforms[0] }]} updateFormdata={updateFormdata} />
);

export const Cover = ({ coverFields, updateFormdata }) => (
    <FormField fields={[{ title: 'Step 4: Cover', fields: coverFields }]} updateFormdata={updateFormdata} />
);

export const SocialMediaLinks = ({ socialMediaLinks, updateFormdata }) => (
    <FormField fields={[{ title: 'Step 5: Social Media Links', fields: socialMediaLinks[0] }]} updateFormdata={updateFormdata} />
);

export const InAppPurchases = ({ inAppPurchases, updateFormdata }) => (
    <FormField fields={[{ title: 'Step 6: In-App Purchases', fields: inAppPurchases }]} updateFormdata={updateFormdata} />
);

export const FAQs = ({ faqs, updateFormdata }) => (
    <FormField fields={[{ title: 'Step 8: FAQ', fields: faqs[0] }]} updateFormdata={updateFormdata} />
);

export const Screenshots = ({ screenshots, updateFormdata }) => (
    <FormField fields={[{ title: 'Step 7: Screenshots', fields: screenshots[0] }]} updateFormdata={updateFormdata} />
);

export const ContactInfo = ({ contactInfo, updateFormdata }) => (
    <FormField fields={[{ title: 'Step 9: Contact Information', fields: contactInfo }]} updateFormdata={updateFormdata} />
);

export const DownloadLinks = ({ downloadLinks, updateFormdata }) => (
    <FormField fields={[{ title: 'Step 10: Download Links', fields: downloadLinks.links }]} updateFormdata={updateFormdata} />
);

export const PrivacyPolicyTermsOfService = ({ privacyPolicyTermsOfService, updateFormdata }) => (
    <FormField fields={[{ title: 'Step 11: Privacy Policy & Terms of Service', fields: privacyPolicyTermsOfService }]} updateFormdata={updateFormdata} />
);

export const GameplayVideosTutorials = ({ gameplayVideosTutorials, updateFormdata }) => (
    <FormField fields={[{ title: 'Step 12: Game Play Videos Tutorials', fields: gameplayVideosTutorials[0] }]} updateFormdata={updateFormdata} />
);

export const PressKitMediaResources = ({ pressKitMediaResources, updateFormdata }) => (
    <FormField fields={[{ title: 'Step 13: Press Kit & Media Resources', fields: pressKitMediaResources.resources }]} updateFormdata={updateFormdata} />
);

export const CrossPromotion = ({ crossPromotion, updateFormdata }) => {
    return (
        <FormField fields={[{ title: 'Step 14: Cross Promotion Links', fields: crossPromotion[0] }]} updateFormdata={updateFormdata} />
    )
};

export const FeedbackSurveyForms = ({ feedbackSurveyForms, updateFormdata }) => (
    <FormField fields={[{ title: 'Step 15: Feedback Survey forms', fields: feedbackSurveyForms }]} updateFormdata={updateFormdata} />
);