import React from 'react';
import { css } from 'emotion';
import '@hackoregon/component-library/assets/global.styles.css';
import { Header, Hero, Footer } from '@hackoregon/component-library';
import Intro from '../Intro';
import MFISection from '../MFISection';
import InventorySection from '../InventorySection';
import RentalChangeSection from '../RentalChangeSection';

const subTitleClass = css`
`;

const containerClass = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  

  @media (max-width: 640px) {
    padding: 0 15px;
  }
`;

const appClass = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => (
  <div className={appClass}>
    <Header title="Civic"/>
    <Hero >
      <h1>
        Rental Affordability
        <br />
        <span className={subTitleClass}>Great tag line here</span>
      </h1>
    </Hero>
    <div className={containerClass}>
      <Intro />
      <MFISection />
      <RentalChangeSection />
      <InventorySection />
    </div>
    <Footer />
  </div>
);

App.displayName = 'App';

export default App;
