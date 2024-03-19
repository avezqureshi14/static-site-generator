"use client";
import { useState } from 'react';
import formData from "../json/config.json";
import * as Section from '../app/components/common/Section';
import "./index.css"
import Footer from './components/common/Footer';

export default function FormField() {
  const [step, setStep] = useState(0);
  // const step = 6;
  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };
  const overviewFields = formData.overview;
  const developerFields = formData.developer;
  const platforms = formData.platforms;
  const coverFields = formData.cover;
  const socialMediaLinks = formData.social_media_links;
  const inAppPurchases = formData.in_app_purchases;
  const screenshots = formData.screenshots;
  const faqs = formData.faqs;
  const contactInfo = formData.contact_info;
  const downloadLinks = formData.download_links;
  const privacyPolicyTermsOfService = formData.privacy_policy_terms_of_service;
  const gameplayVideosTutorials = formData.gameplay_videos_tutorials;
  const pressKitMediaResources = formData.press_kit_media_resources;
  const crossPromotion = formData.cross_promotion;
  const feedbackSurveyForms = formData.feedback_survey_forms;
  const footer = formData.footer;


  const steps = [
    {
      title: 'Overview',
      component: <Section.Overview overviewFields={overviewFields} />,
    },
    {
      title: 'Developer Details',
      component: <Section.Developer developerFields={developerFields} />,
    },
    {
      title: 'Platform Details',
      component: <Section.Platform platforms={platforms} />,
    },
    {
      title: 'Cover',
      component: <Section.Cover coverFields={coverFields} />,
    },
    {
      title: 'Social Media Links',
      component: <Section.SocialMediaLinks socialMediaLinks={socialMediaLinks} />,
    },
    {
      title: 'In-App Purchases',
      component: <Section.InAppPurchases inAppPurchases={inAppPurchases} />,
    },
    {
      title: 'Screenshots',
      component: <Section.Screenshots screenshots={screenshots} />,
    },
    {
      title: 'FAQs',
      component: <Section.FAQs faqs={faqs} />,
    },
    {
      title: 'Contact Info',
      component: <Section.ContactInfo contactInfo={contactInfo} />,
    },
    {
      title: 'Download Links',
      component: <Section.DownloadLinks downloadLinks={downloadLinks} />,
    },
    {
      title: 'Privacy Policy & Terms of Service',
      component: <Section.PrivacyPolicyTermsOfService privacyPolicyTermsOfService={privacyPolicyTermsOfService} />,
    },
    {
      title: 'Gameplay Videos & Tutorials',
      component: <Section.GameplayVideosTutorials gameplayVideosTutorials={gameplayVideosTutorials} />,
    },
    {
      title: 'Press Kit & Media Resources',
      component: <Section.PressKitMediaResources pressKitMediaResources={pressKitMediaResources} />,
    },
    {
      title: 'Cross Promotion',
      component: <Section.CrossPromotion crossPromotion={crossPromotion} />,
    },
    {
      title: 'Feedback & Survey Forms',
      component: <Section.FeedbackSurveyForms feedbackSurveyForms={feedbackSurveyForms} />,
    },
    {
      title: 'Footer',
      component: <Footer footer={footer} />,
    },
  ];


  return (
    <div className="flex">
      <div className="hidden lg:block lg:w-64 lg:flex-shrink-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800" style={{ height: "100vh" }} >
        <div className="px-4 py-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Steps</h2>
          <ol className="space-y-2">
            {steps.map((item, index) => (
              <li key={index} className={`flex items-center space-x-3 ${index === step ? 'font-semibold text-blue-600 dark:text-blue-500' : 'text-gray-600 dark:text-gray-400'}`} style={{ listStyle: "none" }} >
                <div className={`w-2 h-2 rounded-full ${index === step ? 'bg-blue-600 dark:bg-blue-500' : 'bg-gray-400 dark:bg-gray-600'}`}></div>
                <span>{item.title}</span>
                <span className="text-sm">{steps[index].label}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="mx-auto w-full max-h-screen" style={{ maxWidth: "100vh !important", padding: "2rem 3rem" }}>

        {steps[step].component}
        <div className="flex justify-between mt-6">
          {step > 0 && (
            <button type="button" onClick={handlePrevious} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Previous</button>
          )}
          {step < steps.length - 1 && (
            <button type="button" onClick={handleNext} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
          )}
          {step === steps.length - 1 && (
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          )}
        </div>
      </div>
    </div>
  );


}
