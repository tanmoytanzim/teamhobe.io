import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { Lightbulb, Rocket, Zap, Cloud } from 'lucide-react';

const FutureWorkSection = () => {
  return (
    <section id="future" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <SectionHeading>What's Next</SectionHeading>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <Lightbulb className="h-16 w-16 text-yellow-400" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Enhanced Architecture</h3>
              </div>
              <p className="text-gray-600">
                Add attention mechanisms (e.g., Transformer modules) to improve focus on tumor regions and enhance segmentation boundaries.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-500 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <Rocket className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Expanded Dataset</h3>
              </div>
              <p className="text-gray-600">
                Expand the dataset with multi-modal MRI types (T1, T2, FLAIR, etc.) to improve robustness and generalization across different scan protocols.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-500 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-2 rounded-full mr-4">
                  <Lightbulb className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Explainability Tools</h3>
              </div>
              <p className="text-gray-600">
                Integrate explainability tools like Grad-CAM to provide physicians with insights into model decision-making, improving trust and adoption.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-cyan-500 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-cyan-100 p-2 rounded-full mr-4">
                  <Cloud className="h-5 w-5 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Cloud Deployment</h3>
              </div>
              <p className="text-gray-600">
                Deploy the system in cloud and edge environments for faster clinical use, with HIPAA-compliant data handling and API integration with hospital systems.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-blue-600 text-white rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Long-term Vision</h3>
            <p className="leading-relaxed">
              Our long-term vision is to develop a comprehensive AI-powered diagnostic assistant for neuroradiology that integrates with hospital workflows seamlessly. By continuously improving our models and expanding to other neurological conditions, we aim to create a tool that becomes an essential part of the diagnostic process, saving time for radiologists and improving outcomes for patients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureWorkSection;