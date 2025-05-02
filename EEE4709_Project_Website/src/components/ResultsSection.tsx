import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { CheckCircle, BarChart3 } from 'lucide-react';

const ResultsSection = () => {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading>Results</SectionHeading>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Segmentation Performance</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">U-Net</span>
                <div className="w-2/3 flex items-center">
                  <div className="h-4 bg-blue-200 rounded-full flex-1">
                    <div 
                      className="h-4 bg-blue-600 rounded-full" 
                      style={{ width: '71%' }}
                    ></div>
                  </div>
                  <span className="ml-4 font-medium text-blue-800">71%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700">U-Net with VGG16</span>
                <div className="w-2/3 flex items-center">
                  <div className="h-4 bg-blue-200 rounded-full flex-1">
                    <div 
                      className="h-4 bg-blue-600 rounded-full" 
                      style={{ width: '70%' }}
                    ></div>
                  </div>
                  <span className="ml-4 font-medium text-blue-800">70%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700">U-Net with ResNet50</span>
                <div className="w-2/3 flex items-center">
                  <div className="h-4 bg-blue-200 rounded-full flex-1">
                    <div 
                      className="h-4 bg-blue-600 rounded-full" 
                      style={{ width: '65%' }}
                    ></div>
                  </div>
                  <span className="ml-4 font-medium text-blue-800">65%</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-sm text-gray-600">
              <p><span className="font-medium">Metric:</span> Dice Similarity Coefficient</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800">Classification Performance</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">ConvNeXt-Tiny</span>
                <div className="w-2/3 flex items-center">
                  <div className="h-4 bg-green-200 rounded-full flex-1">
                    <div 
                      className="h-4 bg-green-600 rounded-full" 
                      style={{ width: '95.43%' }}
                    ></div>
                  </div>
                  <span className="ml-4 font-medium text-green-800">95.43%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700">EfficientNetV2-S</span>
                <div className="w-2/3 flex items-center">
                  <div className="h-4 bg-green-200 rounded-full flex-1">
                    <div 
                      className="h-4 bg-green-600 rounded-full" 
                      style={{ width: '91.9%' }}
                    ></div>
                  </div>
                  <span className="ml-4 font-medium text-green-800">91.9%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700">InceptionV3</span>
                <div className="w-2/3 flex items-center">
                  <div className="h-4 bg-green-200 rounded-full flex-1">
                    <div 
                      className="h-4 bg-green-600 rounded-full" 
                      style={{ width: '84.67%' }}
                    ></div>
                  </div>
                  <span className="ml-4 font-medium text-green-800">84.67%</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-sm text-gray-600">
              <p><span className="font-medium">Metric:</span> Classification Accuracy</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Integrated System Performance</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-medium text-blue-600 mb-2">End-to-End Accuracy</h4>
              <p className="text-3xl font-bold text-gray-800">89.2%</p>
              <p className="text-sm text-gray-600 mt-2">Combined segmentation and classification</p>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-medium text-blue-600 mb-2">Processing Time</h4>
              <p className="text-3xl font-bold text-gray-800">1.2s</p>
              <p className="text-sm text-gray-600 mt-2">Average per MRI scan</p>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-medium text-blue-600 mb-2">Clinical Validation</h4>
              <p className="text-3xl font-bold text-gray-800">94%</p>
              <p className="text-sm text-gray-600 mt-2">Agreement with radiologists</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;