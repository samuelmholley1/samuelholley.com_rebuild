import Layout from '@/app/layout'
import HeroSection from './HeroSection'
import Image from 'next/image'

export default function HomePage() {
  return (
    <Layout>
      <HeroSection>
        <section className="hero" data-aos="fade-up">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-deep-blue">
              AI Isn&apos;t the Threat. Overwhelm Is.
            </h1>
            <p className="mt-6 text-lg text-dark-text max-w-2xl mx-auto">
              I help anxious, intelligent professionals and teams transform AI complexity into a strategic advantage and reclaim 5–10+ hours of focused time each week.
            </p>
            <button className="cta mt-8">Book My Free 30-Min AI Audit</button>
          </div>
        </section>
      </HeroSection>
      {/* Promise Section */}
      <section className="promise bg-light-bg py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-deep-blue mb-4">
            It’s Not About Mastering AI. It’s About Reclaiming What’s Human.
          </h2>
          <p className="text-dark-text max-w-3xl mx-auto mb-12">
            The endless race to keep up with technology is a distraction from what truly matters.
            The real work isn’t about learning more tools; it’s about building a life and a business
            that technology serves, not the other way around.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Time */}
            <div className="promise-item p-6 bg-white rounded-lg shadow">
              <svg
                className="mx-auto mb-4"
                width="48"
                height="48"
                fill="none"
                stroke="var(--deep-blue)"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <h3 className="text-xl font-medium text-deep-blue mb-2">Reclaim Your Time</h3>
              <p className="text-dark-text text-sm">
                Your most finite resource is being drained by repetitive tasks, administrative drag,
                and the mental energy it takes to manage it all. We will design intelligent systems
                to eliminate the busywork, giving you back hours in your week—not for more work, but
                for more of what truly matters.
              </p>
            </div>
            {/* Focus */}
            <div className="promise-item p-6 bg-white rounded-lg shadow">
              <svg
                className="mx-auto mb-4"
                width="48"
                height="48"
                fill="none"
                stroke="var(--deep-blue)"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              <h3 className="text-xl font-medium text-deep-blue mb-2">Reclaim Your Focus</h3>
              <p className="text-dark-text text-sm">
                Information overload creates strategic fog, making it impossible to distinguish the
                urgent from the important. We will cut through the noise to clarify your
                highest-leverage priorities, protecting your focus and turning complexity into
                confident, clear decision-making.
              </p>
            </div>
            {/* Story */}
            <div className="promise-item p-6 bg-white rounded-lg shadow">
              <svg
                className="mx-auto mb-4"
                width="48"
                height="48"
                fill="none"
                stroke="var(--deep-blue)"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 21s3-7 9-13a9 9 0 0 1 9 9c-6 6-13 9-13 9z" />
                <path d="M9 15l-3 6" />
              </svg>
              <h3 className="text-xl font-medium text-deep-blue mb-2">Reclaim Your Purpose</h3>
              <p className="text-dark-text text-sm">
                In the age of AI, the greatest risk is allowing your purpose and voice to be
                dictated by the algorithms of others. This is the deepest work we do. We use AI as a
                cognitive partner to amplify your unique insights and values, ensuring that
                technology serves your story.
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
              src="https://via.placeholder.com/320x400?text=Your+Photo"
              alt="Samuel Holley"
              width={320}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="guide-text">
            <h3 className="text-3xl font-semibold text-deep-blue mb-4">Your Guide Through the Noise</h3>
            <p className="text-dark-text leading-relaxed">
              I’m Samuel Holley. I’m not just another tech consultant.
              <br />
              <span className="font-semibold text-deep-blue">
                I am an expert at helping anxious, intelligent people master complex, intimidating systems under pressure.
              </span>
              <br />
              For over a decade, my work in elite test prep and EdTech was about one thing: giving
              humans a framework to conquer overwhelming systems. I coached brilliant students and
              professionals, not just to pass a test, but to manage their anxiety, build their
              confidence, and reclaim their sense of control.
              <br />
              After my own journey through caregiver burnout forced me to rebuild my life from the ground up, I became my own first client. Now, I apply that unique blend
              of empathetic coaching, ethical strategy, and systems design to the most overwhelming
              system of our time: Artificial Intelligence.
            </p>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="testimonial bg-light-bg py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h3 className="text-2xl font-medium text-deep-blue mb-4">From AI Anxiety to Strategic Asset</h3>
          <blockquote className="italic text-lg text-dark-text mb-4">
            &ldquo;Working with Samuel was more than learning how to use a tool; it was learning how to
            think again. I went from feeling constantly behind to feeling like the most
            forward-thinking person in the room. I didn&apos;t just reclaim hours in my week; I reclaimed
            my confidence.&rdquo;
          </blockquote>
          <cite className="block text-sm text-dark-text">&mdash; Elizabeth C., Non-Profit Executive &amp; B2C Coaching Client</cite>
        </div>
      </section>
      {/* Final CTA */}
      <section className="final-cta py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-deep-blue mb-4">Ready to Reclaim Your Edge?</h3>
          <p className="text-dark-text max-w-2xl mx-auto mb-8 leading-relaxed">
            Let&apos;s find out if my approach is right for you. Book a complimentary, no-pressure
            30-minute AI Audit. In this single session, we will diagnose the #1 friction point in
            your current workflow and map out one actionable step you can take today to begin
            reclaiming your time and focus. This is a strategy session, not a sales pitch.
          </p>
          <button className="cta">Book My Free Audit &amp; Reclaim Your Edge.</button>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 bg-white">
        <div className="container mx-auto px-6 text-center text-sm text-dark-text">
          <p>
            Samuel Holley &copy; 2025 |{' '}
            <a
              href="https://linkedin.com/in/samuelholley"
              target="_blank"
              rel="noreferrer"
              className="text-primary-orange hover:underline"
            >
              LinkedIn
            </a>{' '}
            |{' '}
            <a href="#privacy" className="text-primary-orange hover:underline">
              Privacy Policy
            </a>
          </p>
          <small className="block mt-2">
            Privacy Policy: This website respects your privacy. No personal data is collected or
            stored beyond what is necessary for basic site functionality and analytics. For more
            details, please contact us.
          </small>
        </div>
      </footer>
    </Layout>
  )
}
