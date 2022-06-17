import React from 'react';
import { AboutUs } from '../../components/about-us/AboutUs';
import { Contact } from '../../components/contact/Contact';
import { Customers } from '../../components/customers/Customers';
import { Phrase } from '../../components/phrase/Phrase';
import { Services } from '../../components/services/Services';
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
      <Phrase />
      <Services />
      <Customers />
      <Contact />

    </div>
  );
}

export default Homepage;
