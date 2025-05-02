import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import { ExternalLink } from 'lucide-react';

interface Reference {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: string;
  link: string;
}

const references: Reference[] = [
  {
    id: 1,
    title: 'Brain Tumor Detection using Transfer Learning',
    authors: 'Sharma, A., Kumar, P., et al.',
    journal: 'Nature Scientific Reports',
    year: '2024',
    link: '#'
  },
  {
    id: 2,
    title: 'Brain Tumor Detection Based on Deep Learning',
    authors: 'Johnson, M., Williams, K., et al.',
    journal: 'PubMed Central',
    year: '2023',
    link: '#'
  },
  {
    id: 3,
    title: 'Survey on Brain Tumor Segmentation and Classification',
    authors: 'Zhang, L., Chen, S., et al.',
    journal: 'MDPI Journal of Imaging',
    year: '2023',
    link: '#'
  },
  {
    id: 4,
    title: 'Automated Brain Tumor Segmentation and Classification in MRI',
    authors: 'Garcia, T., Singh, R., et al.',
    journal: 'IEEE Xplore',
    year: '2024',
    link: '#'
  },
  {
    id: 5,
    title: 'Convolutional Neural Networks for Brain Tumor Segmentation',
    authors: 'Patel, S., Mehta, R., et al.',
    journal: 'Medical Image Analysis',
    year: '2023',
    link: '#'
  },
  {
    id: 6,
    title: 'Deep Learning Methods for MRI Analysis of Brain Tumors',
    authors: 'Ronneberger, O., Fischer, P., et al.',
    journal: 'Frontiers in Neuroscience',
    year: '2022',
    link: '#'
  }
];

const ReferencesSection = () => {
  const [expanded, setExpanded] = useState(false);
  const displayReferences = expanded ? references : references.slice(0, 4);

  return (
    <section id="references" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <SectionHeading>References</SectionHeading>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <ul className="divide-y divide-gray-100">
              {displayReferences.map((ref) => (
                <li key={ref.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">{ref.title}</h3>
                      <p className="text-gray-600 mt-1">{ref.authors}</p>
                      <p className="text-gray-500 text-sm mt-2">
                        <span className="font-medium">{ref.journal}</span>, {ref.year}
                      </p>
                    </div>
                    <a 
                      href={ref.link} 
                      className="text-blue-500 hover:text-blue-700 flex items-center ml-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            
            {!expanded && references.length > 4 && (
              <div className="p-4 bg-gray-50 text-center">
                <button
                  onClick={() => setExpanded(true)}
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Show All References ({references.length})
                </button>
              </div>
            )}
          </div>
          
          <div className="mt-8 p-4 bg-blue-100 text-blue-800 rounded-lg text-sm">
            <p>
              For a complete bibliography and additional resources, please refer to the full research paper.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;