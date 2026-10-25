/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NetlifyProvider } from './context/NetlifyContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { InterestsSection } from './components/InterestsSection';
import { GoalsSection } from './components/GoalsSection';
import { Footer } from './components/Footer';
import { NetlifyConfigModal } from './components/NetlifyConfigModal';

export default function App() {
  return (
    <NetlifyProvider>
      <div className="min-h-screen bg-[#050505] text-[#f4f4f5] flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <ProjectsSection />
          <AboutSection />
          <InterestsSection />
          <GoalsSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Netlify Subdomain Configuration Modal */}
        <NetlifyConfigModal />
      </div>
    </NetlifyProvider>
  );
}
