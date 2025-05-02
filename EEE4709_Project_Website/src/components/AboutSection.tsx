import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading>About the Project</SectionHeading>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="lg:w-1/2">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm uppercase text-blue-600 font-medium">Project Title</h4>
                  <p className="text-gray-800">Brain Tumor Segmentation and Multi-Class Classification using Deep Neural Network</p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase text-blue-600 font-medium">Group Members</h4>
                  <ul className="list-disc list-inside text-gray-800">
                    <li>Zakia Zaman (200021302)</li>
                    <li>Tanzim Noor Tanmoy (200021338)</li>
                    <li>Afia Tahsin Chowdhury (200021358)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase text-blue-600 font-medium">Supervisor</h4>
                  <p className="text-gray-800">Md Arefin Rabbi Emon</p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase text-blue-600 font-medium">Institution & Course</h4>
                  <p className="text-gray-800">Artificial Intelligence and Machine Learning (EEE4709)</p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase text-blue-600 font-medium">Submission Date</h4>
                  <p className="text-gray-800">21/03/2025</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <Users className="h-32 w-32 text-blue-400" />
              </div>
              
              <div className="p-8 bg-white flex-1">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project Abstract</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our project develops an automated deep-learning framework for brain tumor segmentation and classification using MRI scans. We integrate U-Net for tumor segmentation and ConvNeXt-Tiny for classifying tumors into meningioma, glioma, and pituitary categories. Using the Figshare dataset of 3,064 T1-weighted MRI images, our segmentation model achieved a 71% Dice score, while the classification model reached 95.43% accuracy. The system demonstrates the potential of deep learning in enhancing medical diagnostics and improving patient outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;