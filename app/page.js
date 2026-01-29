'use client';

import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import Hero from '@/components/sections/Hero/Hero';
import Catalog from '@/components/sections/Catalog/Catalog';
import Advantages from '@/components/sections/Advantages/Advantages';
import Pricing from '@/components/sections/Pricing/Pricing';
import Contact from '@/components/sections/Contact/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Advantages />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
