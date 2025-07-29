// Next.js Home Page using react-player, framer-motion, next-seo


import React from 'react';
import { NextSeo } from 'next-seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import EventPreview from '../components/EventPreview';
import FeaturedArtist from '../components/FeaturedArtist';
import SocialTeaser from '../components/SocialTeaser';
import MissionStatement from '../components/MissionStatement';


export default function Home() {
  return (
    <>
      <NextSeo title="Spacefather – Home" description="Music, podcasts, events, and more." />
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        <Hero />
        <EventPreview />
        <FeaturedArtist />
        <SocialTeaser />
        <MissionStatement />
      </main>
      <Footer />
    </>
  );
}
