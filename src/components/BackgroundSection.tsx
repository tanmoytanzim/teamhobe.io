import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { BrainCircuit } from 'lucide-react';

const BackgroundSection = () => {
  return (
    <section id="background" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <SectionHeading>Why This Project Matters</SectionHeading>
        
        <div className="mt-12 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Brain tumors are among the deadliest forms of cancer, requiring early and precise diagnosis for effective treatment. Manual MRI diagnosis is time-consuming and prone to human error. We were motivated to build an automated deep learning system that can segment tumors and classify them into meningioma, glioma, and pituitary types — improving accuracy and saving lives.
            </p>
            
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Our Objective</h3>
              <p className="leading-relaxed">
                To develop a robust, scalable AI system using U-Net and ConvNeXt-Tiny models that can analyze brain MRI scans and assist doctors in clinical decision-making.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-medium text-blue-600 mb-2">Challenge</h4>
                <p className="text-sm text-gray-600">Manual MRI analysis is time-consuming and subjective</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-medium text-blue-600 mb-2">Approach</h4>
                <p className="text-sm text-gray-600">Deep learning for automated segmentation and classification</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-medium text-blue-600 mb-2">Impact</h4>
                <p className="text-sm text-gray-600">Faster, more accurate diagnoses and improved patient outcomes</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-green-200 rounded-full animate-pulse opacity-70"></div>
              <div className="relative bg-white rounded-full p-12 shadow-lg">
                <BrainCircuit className="h-48 w-48 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;