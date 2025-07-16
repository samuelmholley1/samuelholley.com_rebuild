import HeroSection from '../components/HeroSection';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Promise Section */}
      <section className="promise bg-light-bg py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-deep-blue mb-4">
            It’s Not About Mastering AI. It’s About Reclaiming What’s Human.
          </h2>
          <p className="text-dark-text max-w-3xl mx-auto mb-12">
            The endless race to keep up with technology is a distraction from what truly matters. The real work isn’t about learning more tools; it’s about building a life and a business that technology serves, not the other way around.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Time */}
            <div className="promise-item p-6 bg-white rounded-lg shadow">
              <svg className="h-12 w-12 mx-auto mb-4 text-deep-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-medium text-deep-blue mb-2">Reclaim Your Time</h3>
              <p className="text-dark-text text-sm">
                Your most finite resource is being drained by repetitive tasks, administrative drag, and the mental energy it takes to manage it all. We will design intelligent systems to eliminate the busywork, giving you back hours in your week—not for more work, but for more of what truly matters.
              </p>
            </div>
            {/* Focus */}
            <div className="promise-item p-6 bg-white rounded-lg shadow">
              <svg className="h-12 w-12 mx-auto mb-4 text-deep-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12C3.5 7.5 7.5 4.5 12 4.5s8.5 3 9.75 7.5c-1.25 4.5-5.25 7.5-9.75 7.5s-8.5-3-9.75-7.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-medium text-deep-blue mb-2">Reclaim Your Focus</h3>
              <p className="text-dark-text text-sm">
                Information overload creates strategic fog, making it impossible to distinguish the urgent from the important. We will cut through the noise to clarify your highest-leverage priorities, protecting your focus and turning complexity into confident, clear decision-making.
              </p>
            </div>
            {/* Story */}
            <div className="promise-item p-6 bg-white rounded-lg shadow">
              <svg className="h-12 w-12 mx-auto mb-4 text-deep-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h3 className="text-xl font-medium text-deep-blue mb-2">Reclaim Your Purpose</h3>
              <p className="text-dark-text text-sm">
                In the age of AI, the greatest risk is allowing your purpose and voice to be dictated by the algorithms of others. This is the deepest work we do. We use AI as a cognitive partner to amplify your unique insights and values, ensuring that technology serves your story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="guide py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="guide-photo">
            <Image
              src="/samuel_holley_logo_transparent.png"
              alt="Samuel Holley"
              width={320}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          <div className="guide-text">
            <h3 className="text-3xl font-semibold text-deep-blue mb-4">Your Guide Through the Noise</h3>
            <p className="text-dark-text leading-relaxed">
              I’m Samuel Holley. I’m not just another tech consultant.
              <br /><br />
              <span className="font-semibold text-deep-blue">
                I am an expert at helping anxious, intelligent people master complex, intimidating systems under pressure.
              </span>
              <br /><br />
              For over a decade, my work in elite test prep and EdTech was about one thing: giving humans a framework to conquer overwhelming systems. I coached brilliant students and professionals, not just to pass a test, but to manage their anxiety, build their confidence, and reclaim their sense of control.
              <br /><br />
              After my own journey through caregiver burnout forced me to rebuild my life from the ground up, I became my own first client. Now, I apply that unique blend of empathetic coaching, ethical strategy, and systems design to the most overwhelming system of our time: Artificial Intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial bg-light-bg py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h3 className="text-2xl font-medium text-deep-blue mb-4">From AI Anxiety to Strategic Asset</h3>
          <blockquote className="italic text-lg text-dark-text mb-4">
            “Working with Samuel was more than learning how to use a tool; it was learning how to think again. I went from feeling constantly behind to feeling like the most forward-thinking person in the room. I didn&apos;t just reclaim hours in my week; I reclaimed my confidence.”
          </blockquote>
          <cite className="block text-sm text-dark-text not-italic">— Elizabeth C., Non-Profit Executive & B2C Coaching Client</cite>
        </div>
      </section>
      {/* Final CTA */}
      <section className="final-cta py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-deep-blue mb-4">Ready to Reclaim Your Edge?</h3>
          <p className="text-dark-text max-w-2xl mx-auto mb-8 leading-relaxed">
            Let&apos;s find out if my approach is right for you. Book a complimentary, no-pressure 30-minute AI Audit. In this single session, we will diagnose the #1 friction point in your current workflow and map out one actionable step you can take today to begin reclaiming your time and focus. This is a strategy session, not a sales pitch.
          </p>
          <button className="bg-primary-orange text-white font-bold py-3 px-6 rounded hover:opacity-90 transition-opacity">
            Book My Free Audit & Reclaim Your Edge.
          </button>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 bg-white border-t">
        <div className="container mx-auto px-6 text-center text-sm text-dark-text">
          <p>
            Samuel Holley © 2025 |{' '}
            <a
              href="https://linkedin.com/in/samuelholley"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-orange hover:underline"
            >
              LinkedIn
            </a>{' '}
            |{' '}
            <a href="#privacy" className="text-primary-orange hover:underline">
              Privacy Policy
            </a>
          </p>
          <small className="block mt-2 text-gray-500">
            Privacy Policy: This website respects your privacy. No personal data is collected or stored beyond what is necessary for basic site functionality and analytics.
          </small>
        </div>
      </footer>
    </>
  );
}
