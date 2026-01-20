
import React, { useState } from 'react';
import Layout from './components/Layout';
import ArtAnalyzer from './components/ArtAnalyzer';
import ArtHistorian from './components/ArtHistorian';
import ArtGenerator from './components/ArtGenerator';
import { AppTab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.ANALYZER);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.ANALYZER:
        return <ArtAnalyzer />;
      case AppTab.EXPLORER:
        return <ArtHistorian />;
      case AppTab.GENERATE:
        return <ArtGenerator />;
      default:
        return <ArtAnalyzer />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="animate-in fade-in duration-700">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default App;
