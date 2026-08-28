import { CompareTable } from "@/components/CompareTable";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
import { RosterChart } from "@/components/RosterChart";
import { SiteNav } from "@/components/SiteNav";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-watercolor-image"
          src="/brand/nielseniq-watercolor-header.png"
          alt=""
        />
        <HeroTelemetry />
        <SiteNav />
      </div>

      <div className="report">
        <div className="report-hero">
          <section className="hero">
            <div>
              <p className="eyebrow">A proactive agent for every NielsenIQ seller</p>
              <h1>The agents that work while your reps sell.</h1>
              <p className="hero-intro">
                Grok Bot listens to calls, watches the inbox, and researches
                accounts in the background. Work starts the agent. Not another
                prompt.
              </p>
            </div>
          </section>

          <section className="usecase-framing">
            <p className="eyebrow">Three sample use cases</p>
            <h2>
              Grok Bot gives each seller a fleet of agents that can keep
              approved work moving across the tools they already use.
            </h2>
            <p>
              These are illustrative workflows with sample content. They do
              not use NielsenIQ customer data.
            </p>
          </section>

          <div className="metric-grid">
            {JOBS.map((job) => (
              <a
                key={job.id}
                className="metric-card"
                href={`#${job.id}`}
              >
                <div className="metric-card-top">
                  <p>Sample {String(job.number).padStart(2, "0")}</p>
                </div>
                <h2>{job.title}</h2>
                <p className="metric-trigger">Starts when {job.trigger.toLowerCase()}</p>
              </a>
            ))}
          </div>
        </div>

        <RosterChart />

        <div id="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="orbit-break" aria-hidden />

      <div className="report">
        <CompareTable />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">NielsenIQ x SpaceXAI</p>
          <p>Grok Bot for NielsenIQ sellers</p>
        </div>
        <address className="footer-contact">
          <p>Your Cursor contact</p>
          <strong>Ed Burke</strong>
          <a href="mailto:ed.burke@cursor.com">ed.burke@cursor.com</a>
        </address>
      </footer>
    </main>
  );
}
