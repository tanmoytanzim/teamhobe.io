import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import ImageGallery from './ui/ImageGallery';

const galleryItems = [
  {
    id: 1,
    title: 'System Architecture',
    description: 'U-Net and ConvNeXt-Tiny classification model workflow with custom head implementation.',
    image: 'https://i.ibb.co.com/ZRcjTCnX/Architecture.png',
  },
  {
    id: 2,
    title: 'MRI Segmentation',
    description: 'Sample MRI scan with tumor segmentation mask.',
    image: 'https://i.ibb.co.com/DDCvqLGC/Masks.png',
  },
  {
    id: 3,
    title: 'Model Comparison',
    description: 'Model accuracy comparison: ConvNeXt-Tiny, EfficientNetV2, InceptionV3.',
    image: 'https://i.ibb.co.com/CKFmTJkt/Model-comparison.png',
  },
  {
    id: 4,
    title: 'Future: Transformer Architecture',
    description: 'Planned implementation of attention mechanisms for improved accuracy.',
    image: 'https://i.ibb.co.com/pvnRXC2C/transformer.png',
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading>Gallery</SectionHeading>
        
        <div className="mt-12">
          <ImageGallery 
            items={galleryItems}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;