'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
    });
  }, []);

  return (
    <section className="hero bg-white py-20" data-aos="fade-up">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-deep-blue mb-6">
          AI Isn&apos;t the Threat. Overwhelm Is.
        </h1>
        <p className="text-dark-text text-lg max-w-2xl mx-auto mb-8">
          The real risk isn&apos;t falling behind on technology—it&apos;s losing your edge to complexity, anxiety, and distraction. I help you reclaim your time, focus, and purpose so technology serves your story, not the other way around.
        </p>
        <button className="bg-primary-orange text-white font-bold py-3 px-8 rounded hover:opacity-90 transition-opacity">
          Book My Free Audit &amp; Reclaim Your Edge.
        </button>
      </div>
    </section>
  );
}
