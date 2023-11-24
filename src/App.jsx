import Navbar from './components/Navbar'
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import Services from './sections/Services';
import WhyUs from './sections/WhyUs';
import ContactUs from './components/ContactUs';
import Footer from './sections/Footer';
import ServicesCard from './sections/ServicesCard';


 const App = () => (
  
  <main>
         <Navbar />
      <section >
         <Hero />
      </section>
      <section>
         <AboutUs />
      </section>
      <section>
         <ServicesCard />
      </section>
      <section>
         <Services />
      </section>
      <section>
         <WhyUs />
      </section>
      <section>
         <ContactUs />
      </section>
      <section>
         <Footer />
      </section>

  </main>
);

export default App;