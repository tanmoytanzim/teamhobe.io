import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';

const TestSection = () => {
  const [showTumorResult, setShowTumorResult] = useState(false);
  const [showNormalResult, setShowNormalResult] = useState(false);

  return (
    <section id="test" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading>Test Our Model</SectionHeading>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group cursor-pointer" onClick={() => setShowTumorResult(!showTumorResult)}>
            <img 
              src={showTumorResult 
                ? "https://i.ibb.co.com/NgvYsfyh/Pitiutary-tumor.png"
                : "https://i.ibb.co.com/NgvYsfyh/Pitiutary-tumor.png"
              }
              alt="Tumorous MRI"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            {showTumorResult && (
              <div className="mt-4 p-4 bg-red-50 rounded-lg">
                <p className="text-red-700 font-semibold">Brain Tumor: Positive</p>
                <p className="text-gray-700">Class: Pituitary</p>
              </div>
            )}
          </div>

          <div className="relative group cursor-pointer" onClick={() => setShowNormalResult(!showNormalResult)}>
            <img 
              src={showNormalResult
                ? "https://i.ibb.co.com/DPT30Qt3/Helathy-Brain.jpg"
                : "https://i.ibb.co.com/DPT30Qt3/Helathy-Brain.jpg"
              }
              alt="Normal MRI"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            {showNormalResult && (
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-green-700 font-semibold">Brain Tumor: Negative</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          Click on any image to see the analysis result
        </div>
      </div>
    </section>
  );
};

export default TestSection;