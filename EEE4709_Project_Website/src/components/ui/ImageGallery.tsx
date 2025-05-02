import React from 'react';
import { X, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ImageGalleryProps {
  items: GalleryItem[];
  selectedImage: number | null;
  setSelectedImage: (id: number | null) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  items, 
  selectedImage,
  setSelectedImage 
}) => {
  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const selectedItem = selectedImage !== null 
    ? items.find(item => item.id === selectedImage)
    : null;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-200 mt-2">{item.description}</p>
            </div>
            <button
              onClick={() => openModal(item.id)}
              className="absolute top-4 right-4 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label={`View larger image of ${item.title}`}
            >
              <ZoomIn className="h-5 w-5 text-gray-800" />
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/80 p-2 rounded-full z-10"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 text-gray-800" />
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 bg-gray-100">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="md:w-1/3 p-6">
                <h3 className="text-2xl font-bold text-gray-800">{selectedItem.title}</h3>
                <p className="mt-4 text-gray-600">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;