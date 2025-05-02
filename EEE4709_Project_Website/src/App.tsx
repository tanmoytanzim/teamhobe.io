import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import BackgroundSection from './components/BackgroundSection';
import GallerySection from './components/GallerySection';
import MethodologySection from './components/MethodologySection';
import ResultsSection from './components/ResultsSection';
import TestSection from './components/TestSection';
import CodeSection from './components/CodeSection';
import FutureWorkSection from './components/FutureWorkSection';
import ReferencesSection from './components/ReferencesSection';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <AboutSection />
        <BackgroundSection />
        <GallerySection />
        <MethodologySection />
        <ResultsSection />
        <TestSection />
        <CodeSection />
        <FutureWorkSection />
        <ReferencesSection />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;