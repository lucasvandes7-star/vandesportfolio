import React from 'react';
import { Wrench, Briefcase, Workflow, MessageSquareQuote, HelpCircle } from 'lucide-react';
import { NavBar } from './components/ui/tubelight-navbar';
import CustomCursor from './components/ui/Cursor';
import { BudgetModalProvider } from './context/BudgetModalContext';
import BudgetFormModal from './components/BudgetFormModal';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Process from './components/Process';
import Cases from './components/Cases';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

const navItems = [
  { name: 'Soluções', url: '#servicos', icon: Wrench },
  { name: 'Projetos', url: '#cases', icon: Briefcase },
  { name: 'Processo', url: '#processo', icon: Workflow },
  { name: 'Depoimentos', url: '#depoimentos', icon: MessageSquareQuote },
  { name: 'FAQ', url: '#faq', icon: HelpCircle },
];

export default function App() {
  return (
    <BudgetModalProvider>
      <CustomCursor />
      <div className="min-h-screen bg-[#030408] text-slate-100 font-sans selection:bg-indigo-600 selection:text-white">
        <NavBar items={navItems} />
        <main>
          <Hero />
          <Benefits />
          <Services />
          <Process />
          <Cases />
          <Testimonials />
          <Faq />
          <CtaBanner />
        </main>
        <Footer />
        <BudgetFormModal />
      </div>
    </BudgetModalProvider>
  );
}
