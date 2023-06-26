import React from 'react';
import { Navbar, Hero, Memory, Explore, Footer, Advertise, Pricings, Banner, Newslatter }from './Components';
import { hero, navlinks, memory, placesAPI, brands, pricingapi,bannerAPI, footerAPI } from './data/travigodata';

const App = () => {
  return (
    <>
    <Navbar navlinks={navlinks} />
    <Hero hero={hero}/>
    <Memory memory={memory} />
    <Explore title="" placesAPI={placesAPI} />
    <Advertise brands={brands} />
    <Pricings pricingapi={pricingapi} />
    <Banner bannerAPI={bannerAPI} />
    <Newslatter />
    <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App