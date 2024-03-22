"use client";
import { useState } from 'react';
import formData from "../json/config.json";
import * as Section from '../app/components/common/Section';
import "./index.css"
import Footer from './components/common/Footer';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [step, setStep] = useState(0);
  const [siteData, setSiteData] = useState({})
  // const step = 15;
  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleUpdateFormData = (section, fieldName, value) => {
    // Update the form data state
    setSiteData(prevState => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [fieldName]: value
      }
    }));
  };

  const handleSubmit = () => {
    console.log(siteData);
    const jsonData = JSON.stringify(siteData);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'siteData.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
      component: <Section.Overview overviewFields={overviewFields} updateFormdata={handleUpdateFormData} />,
    },
    {
      title: 'Developer Details',
      component: <Section.Developer developerFields={developerFields} updateFormdata={handleUpdateFormData} />,
    },
    {
      title: 'Platform Details',
      component: <Section.Platform platforms={platforms} updateFormdata={handleUpdateFormData} />,
    },
    {
      title: 'Cover',
      component: <Section.Cover coverFields={coverFields} updateFormdata={handleUpdateFormData} />,
    },
    {
      title: 'Social Media Links',
      component: <Section.SocialMediaLinks socialMediaLinks={socialMediaLinks} updateFormdata={handleUpdateFormData} />,
    },
    {
      title: 'In-App Purchases',
      component: <Section.InAppPurchases inAppPurchases={inAppPurchases} updateFormdata={handleUpdateFormData} />,
    },
    {
      title: 'Screenshots',
      component: <Section.Screenshots screenshots={screenshots} updateFormdata={handleUpdateFormData} />,
    },
    {
      title: 'FAQs',
      component: <Section.FAQs faqs={faqs} updateFormdata={handleUpdateFormData} />,
    },
    {
      title: 'Contact Info',
      component: <Section.ContactInfo contactInfo={contactInfo} updateFormdata={handleUpdateFormData} />,
    },
    {
      title: 'Download Links',
      component: <Section.DownloadLinks downloadLinks={downloadLinks} updateFormdata={handleUpdateFormData} />,
    },
    {
      title: 'Privacy Policy & Terms of Service',
      component: <Section.PrivacyPolicyTermsOfService privacyPolicyTermsOfService={privacyPolicyTermsOfService} updateFormdata={handleUpdateFormData} />,
    },
    {
      title: 'Gameplay Videos & Tutorials',
      component: <Section.GameplayVideosTutorials gameplayVideosTutorials={gameplayVideosTutorials} updateFormdata={handleUpdateFormData} />,
    },
    {
      title: 'Press Kit & Media Resources',
      component: <Section.PressKitMediaResources pressKitMediaResources={pressKitMediaResources} updateFormdata={handleUpdateFormData} />,
    },
    {
      title: 'Cross Promotion',
      component: <Section.CrossPromotion crossPromotion={crossPromotion} updateFormdata={handleUpdateFormData} />,
    },
    {
      title: 'Feedback & Survey Forms',
      component: <Section.FeedbackSurveyForms feedbackSurveyForms={feedbackSurveyForms} updateFormdata={handleUpdateFormData} />,
    }
  ]

  return (
    <div className="flex dark:bg-black">
      <div className="hidden lg:block lg:w-64 lg:flex-shrink-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800" style={{ height: "100vh" }} >
        <div className="px-4 py-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Steps</h2>
          <ol className="space-y-2">
            {steps.map((item, index) => (
              <li key={index} className={`flex items-center space-x-3 ${index === step ? 'font-semibold text-gray-600 dark:text-gray-500' : 'text-gray-600 dark:text-gray-400'}`} style={{ listStyle: "none" }} >
                <div className={`w-2 h-2 rounded-full ${index === step ? 'bg-gray-600 dark:bg-gray-500' : 'bg-gray-400 dark:bg-gray-600'}`}></div>
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
            <Button onClick={handlePrevious}  >Previous</Button>
          )}
          {step < steps.length - 1 && (
            <Button onClick={handleNext}  >Next</Button>
          )}
          {step === steps.length - 1 && (
            <Button onClick={handleSubmit}  >Submit</Button>
          )}
        </div>
      </div>
    </div>
  );


}
