import React from 'react';
import Footer from '../Shared/Footer';
import ContactUs from './ContactUs';
import ExceptionalCard from './ExceptionalCard';
import Hero from './Hero';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className="px-12">
           <Hero/> 
           <Info/>  
           <Services></Services>
           <ExceptionalCard></ExceptionalCard>
           <MakeAppointment></MakeAppointment>
           <Testimonials></Testimonials>
           <ContactUs></ContactUs>
           <Footer></Footer>
        </div>
    );
};

export default Home;