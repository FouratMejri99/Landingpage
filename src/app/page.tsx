import Navbar from '@/page/Navbar';
import Hero from '@/page/Hero';
import Features from '@/page/Features';
import Products from '@/page/Products';
import About from '@/page/About';
import Testimonials from '@/page/Testimonials';

import Footer from '@/page/Footer';

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
