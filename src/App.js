import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainPage } from './components/main-page';
import TopHeader from './components/top-header';
import CaseStudies from './components/case-studies';
import Services from './components/services';
import Industries from './components/industries';
import ContactUs from './components/contact-us';
import LetsTalk from './components/lets-talk';

import './App.css';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="services" element={<Services name=""/>} />
            <Route path="industries" element={<Industries name=""/>}/>
            <Route path="case-studies" element={<CaseStudies name=""/>} />
            <Route path="contact-us" element={<ContactUs name=""/>}/>
            <Route path="lets-talk" element={<LetsTalk name=""/>}/>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
