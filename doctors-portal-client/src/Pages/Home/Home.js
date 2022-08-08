import React from 'react';
import ExceptionalCard from './ExceptionalCard';
import Hero from './Hero';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';

const Home = () => {
    return (
        <div className="px-12">
           <Hero/> 
           <Info/>  
           <Services></Services>
           <ExceptionalCard></ExceptionalCard>
           <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;