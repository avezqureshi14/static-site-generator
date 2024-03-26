"use client";
import { useState } from 'react';
import formData from "../json/config.json";
import { Button } from '@/components/ui/button';
import Component from './components/common/Component'; // Import the Component
import "./index.css"
import App from './components/common/App';

export default function Home() {
  const [siteData, setSiteData] = useState({});
  const [step, setStep] = useState(0); // Use state for managing step

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

  const steps = [
    {
      component: <Component formData={formData} updateFormdata={handleUpdateFormData} />, // Use Component here
    }
  ];
  const isArray = (value) => {
    return Array.isArray(value);
  };

  // Function to print true for array fields
  const printArrayStatus = (data) => {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        console.log(`${key}: ${isArray(data[key])}`);
      }
    }
  };

  console.log(formData); // Log the formData

  // Call the function to print array status
  printArrayStatus(formData);
  return (
    <div className="flex dark:bg-black">
      <div className="mx-auto w-full" style={{ maxWidth: "100vh !important", padding: "2rem 3rem" }}>
        {steps[step].component}
        <div className="flex justify-between mt-6">
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
}
