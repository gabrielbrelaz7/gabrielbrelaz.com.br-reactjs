import React from 'react';
import { AboutUs } from '../../components/about-us/AboutUs';
import { Skills } from '../../components/skills/Skills';
import { Topo } from '../../components/top/Topo';
import { WhatDo } from '../../components/what-do/WhatDo';

function Homepage() {
  return (
    <div className="App">

      <Topo />
      <AboutUs />
      <WhatDo />
      <Skills />

    </div>
  );
}

export default Homepage;
