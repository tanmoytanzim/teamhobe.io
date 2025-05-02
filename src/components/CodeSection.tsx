import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { Github, FileCode, ExternalLink } from 'lucide-react';

const CodeSection = () => {
  return (
    <section id="code" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <SectionHeading>Implementation</SectionHeading>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <Github className="h-6 w-6 text-gray-700 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">GitHub Repository</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Explore our complete implementation including model architectures, training scripts, and the web interface.
            </p>
            <a 
              href="https://github.com/tanmoytanzim/Brain-Tumor-Classification--UNet-and-ConvNextTiny" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              View Repository <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Implementation Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-blue-600 mb-2">Data Processing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Image preprocessing</li>
                <li>Augmentation techniques</li>
                <li>Normalization methods</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-600 mb-2">Model Training</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Loss functions</li>
                <li>Optimization strategies</li>
                <li>Training protocols</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-600 mb-2">Evaluation Metrics</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Dice coefficient</li>
                <li>Classification accuracy</li>
                <li>Confusion matrix</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;