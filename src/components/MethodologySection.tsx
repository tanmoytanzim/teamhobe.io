import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import CollapsiblePanel from './ui/CollapsiblePanel';
import { Database, Activity } from 'lucide-react';

const MethodologySection = () => {
  const [activePanel, setActivePanel] = useState<string>('segmentation');

  return (
    <section id="methodology" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading>Methodology</SectionHeading>
        
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <p className="text-gray-700">
            We used the Figshare brain tumor dataset with 3,064 T1-weighted MRI images for training and testing our models.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <CollapsiblePanel
            title="Segmentation"
            icon={<Database className="h-5 w-5 text-blue-500" />}
            isOpen={activePanel === 'segmentation'}
            onToggle={() => setActivePanel(activePanel === 'segmentation' ? '' : 'segmentation')}
          >
            <div className="p-6">
              <h4 className="text-lg font-medium text-gray-800 mb-4">U-Net Architecture</h4>
              <p className="text-gray-600 mb-4">
                We implemented a U-Net model for the pixel-wise segmentation of brain tumors in MRI scans, achieving a Dice score of 71%.
              </p>
              
              <h4 className="text-lg font-medium text-gray-800 mb-4">Backbone Comparison</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Base U-Net: 71% Dice score</li>
                <li>U-Net with VGG16 backbone: 70% Dice score</li>
                <li>U-Net with ResNet50 backbone: 65% Dice score</li>
              </ul>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-700">Key Findings</h5>
                <p className="text-sm text-gray-600 mt-1">
                  The standard U-Net architecture outperformed the models with pre-trained backbones, likely due to the specific nature of MRI segmentation tasks.
                </p>
              </div>
            </div>
          </CollapsiblePanel>
          
          <CollapsiblePanel
            title="Classification"
            icon={<Activity className="h-5 w-5 text-green-500" />}
            isOpen={activePanel === 'classification'}
            onToggle={() => setActivePanel(activePanel === 'classification' ? '' : 'classification')}
          >
            <div className="p-6">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Multi-Class Classification</h4>
              <p className="text-gray-600 mb-4">
                After segmentation, we classified tumors into three types: meningioma, glioma, and pituitary. Our ConvNeXt-Tiny model achieved 95.43% accuracy.
              </p>
              
              <h4 className="text-lg font-medium text-gray-800 mb-4">Model Comparison</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>ConvNeXt-Tiny: 95.43% accuracy</li>
                <li>EfficientNetV2-S: 91.9% accuracy</li>
                <li>InceptionV3: 84.67% accuracy</li>
                <li>ResNet50: 89.2% accuracy</li>
                <li>VGG16: 83.5% accuracy</li>
              </ul>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h5 className="font-medium text-green-700">Key Findings</h5>
                <p className="text-sm text-gray-600 mt-1">
                  Modern architectures like ConvNeXt-Tiny and EfficientNetV2 significantly outperformed older models, highlighting the importance of attention mechanisms and efficient feature extraction.
                </p>
              </div>
            </div>
          </CollapsiblePanel>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Web API Implementation</h3>
          <p className="text-gray-600">
            We built a Flask-based web API for real-time inference on user-uploaded MRI scans. The API integrates both segmentation and classification models, providing a unified interface for clinical use.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Average inference time: 1.2 seconds per scan
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;