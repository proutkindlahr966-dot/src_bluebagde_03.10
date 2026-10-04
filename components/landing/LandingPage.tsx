"use client";

import { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    const el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <a className="brand" href="#top">
            Northline Media
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a className="cta" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="Introduction">
          <div className="wrap hero-content">
            <p className="section-label" style={{ color: "rgba(255,255,255,0.7)" }}>
              Communications studio
            </p>
            <h1>Northline Media</h1>
            <p>
              We help organizations shape clear, credible stories across film, digital,
              and press — built for the audiences that matter.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Start a project
              </a>
              <a className="btn btn-ghost" href="#services">
                View services
              </a>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="wrap">
            <p className="section-label">What we do</p>
            <h2 className="section-title">Focused work for modern communicators</h2>
            <p className="section-lead">
              Short engagements or long-term partnerships — always with sharp messaging
              and production that holds up in the real world.
            </p>
            <div className="service-grid">
              <article className="service-item">
                <h3>Brand storytelling</h3>
                <p>
                  Positioning, narrative frameworks, and campaign concepts that stay
                  consistent from brief to delivery.
                </p>
              </article>
              <article className="service-item">
                <h3>Film &amp; digital content</h3>
                <p>
                  Documentary-style films, social edits, and launch assets produced with
                  a calm, editorial eye.
                </p>
              </article>
              <article className="service-item">
                <h3>Media relations</h3>
                <p>
                  Press materials, spokesperson prep, and outreach support for launches,
                  reports, and public moments.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="wrap about-grid">
            <div>
              <p className="section-label">About the studio</p>
              <h2 className="section-title">
                Independent by design. Collaborative in practice.
              </h2>
              <p className="section-lead">
                Northline Media is a small communications team working with founders,
                cultural institutions, and product companies. We favor clarity over noise,
                and craft over trends.
              </p>
            </div>
            <div className="stat-row" aria-label="Studio highlights">
              <div className="stat">
                <strong>12+</strong>
                <span>Years of practice</span>
              </div>
              <div className="stat">
                <strong>80+</strong>
                <span>Projects delivered</span>
              </div>
              <div className="stat">
                <strong>4</strong>
                <span>Markets served</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap">
            <p className="section-label" style={{ color: "rgba(255,255,255,0.55)" }}>
              Get in touch
            </p>
            <h2 className="section-title">Tell us what you need to communicate.</h2>
            <p className="section-lead">
              Share a short brief and we’ll reply with next steps, timing, and a clear
              scope.
            </p>
            <div className="contact-panel">
              <a className="mail" href="mailto:hello@northlinemedia.studio">
                hello@northlinemedia.studio
              </a>
              <a className="btn btn-primary" href="mailto:hello@northlinemedia.studio">
                Email the studio
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <span>
            © <span id="year"></span> Northline Media. All rights reserved.
          </span>
          <span>Independent communications studio</span>
        </div>
      </footer>
    </>
  );
}
