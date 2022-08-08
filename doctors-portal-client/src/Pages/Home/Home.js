import React from 'react';
import Hero from './Hero';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className="px-12">
           <Hero/> 
           <Info/>  
           <Services></Services>
        </div>
    );
};

export default Home;