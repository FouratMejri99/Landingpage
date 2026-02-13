import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Products from '@/components/Products';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';

import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <About />
      <Testimonials />
   
      <Footer />
    </main>
  );
}
