import { useEffect, useState } from 'react'

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const projects = [
  {
    n: '01',
    title: 'LLM-Based CI Failure Classifier',
    org: 'Capital One',
    year: '2025',
    blurb:
      'Built a GenAI pipeline that classifies CI/CD pipeline failures across hundreds of daily builds, routing actionable failures to owners and suppressing flakes. Reduced triage time and freed engineers from log-spelunking.',
    stack: ['Python', 'AWS Bedrock', 'LangChain', 'Jenkins', 'OpenSearch'],
  },
  {
    n: '02',
    title: 'Datadog Observability Migration',
    org: 'Capital One',
    year: '2024',
    blurb:
      'Led migration of legacy logging stack to Datadog across multiple Java microservices. Standardized structured logging, custom metrics, and SLO dashboards — cutting MTTR on production incidents.',
    stack: ['Instana', 'Datadog', 'Terraform'],
  },
  {
    n: '03',
    title: 'Real-Time Fraud Detection Pipeline',
    org: 'Personal · System Design',
    year: '2025',
    blurb:
      'Designed an end-to-end fraud scoring system: Kafka ingestion, online feature store, ONNX-served ML scoring with SHAP explanations, and canary deployment. Sub-100ms p99 inference budget.',
    stack: ['Kafka', 'Redis', 'ONNX', 'Kubernetes', 'Python'],
  },
  {
    n: '04',
    title: 'Interest Refund Bug — Production Fix',
    org: 'Capital One',
    year: '2024',
    blurb:
      'Diagnosed and patched a rounding edge case in interest refund calculations affecting a small but measurable cohort of customer accounts. Wrote a backfill job and added regression tests.',
    stack: ['Java', 'PostgreSQL', 'JUnit'],
  },
  {
    n: '05',
    title: 'C# → Java Platform Migration',
    org: 'S&S Activewear',
    year: '2023',
    blurb:
      'Migrated a core inventory service from a legacy C#/.NET stack to Java/Spring Boot. Designed contract tests to keep downstream consumers green throughout cutover.',
    stack: ['Java', 'Spring Boot', 'C#', 'Pact'],
  },
]

const skills = {
  Languages: ['Java', 'Python','GO', 'TypeScript', 'C#', 'SQL'],
  'Frameworks & Runtimes': ['Spring Boot', 'React', 'Node.js', '.NET'],
  'Cloud & Infra': ['AWS (Certified Dev Assoc.)', 'Kubernetes', 'Terraform', 'Docker'],
  'Data & Streaming': ['Kafka', 'PostgreSQL', 'Redis', 'OpenSearch'],
  'AI / ML': ['Bedrock', 'LangChain', 'ONNX', 'Prompt Engineering (AWS AI Practitioner)'],
}

export default function App() {
  const [yr, setYr] = useState('')
  useEffect(() => {
    setYr(new Date().getFullYear())
  }, [])

  return (
    <div className="page">
      <div className="grain" aria-hidden="true" />

      <header className="topbar">
        <div className="mark">N<span className="mark-dot">·</span></div>
        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="resume-btn" href="/Nithin_reddy_resume.pdf" target="_blank" rel="noreferrer">
          Résumé →
        </a>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-meta">
              <span>Software Engineer</span>
              <span>Chicago, IL</span>
              <span>Available · Open to SDE 2 roles</span>
            </div>
            <h1 className="hero-title">
              Building what runs in production — <em>backend systems</em>, <em>pipelines</em>, and <em>applied AI</em>.
            </h1>
            <p className="hero-sub">
              I'm Nithin. I've built and scaled backend systems at Capital One, Discover, and S&S Activewear — spanning distributed architecture, observability, and applied AI. AWS-certified.Outside of my career, you can usually find me playing pickleball, tennis, chess, poker, ... you name it. I love competition
            </p>
          </div>
          <div className="hero-photo">
            <img src="/Profile.JPG" alt="Nithin" />
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-head">
          <span className="section-num">/ 01</span>
          <h2>Selected Work</h2>
        </div>

        <ul className="projects">
          {projects.map((p) => (
            <li className="project" key={p.n}>
              <div className="project-num">{p.n}</div>
              <div className="project-body">
                <div className="project-title">
                  <h3>{p.title}</h3>
                  <span className="project-org">
                    {p.org} · {p.year}
                  </span>
                </div>
                <p className="project-blurb">{p.blurb}</p>
                <ul className="stack">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className="section about">
        <div className="section-head">
          <span className="section-num">/ 02</span>
          <h2>About</h2>
        </div>
        <div className="about-grid">
          <p>
            I'm a software engineer at <strong>Capital One</strong> in Chicago, where I work on
            backend services, CI/CD reliability, and a growing slate of GenAI tooling. Before that
            I shipped Java services at S&amp;S Activewear and consulted at DXC Technology.
          </p>
          <p>
            I studied at <strong>Stony Brook University</strong> and hold AWS Developer Associate
            and AWS AI Practitioner certifications. I care a lot about clean abstractions,
            structured observability, and writing the kind of code that the on-call engineer at
            3 a.m. will actually thank you for.
          </p>

        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-head">
          <span className="section-num">/ 03</span>
          <h2>Stack</h2>
        </div>
        <dl className="skills">
          {Object.entries(skills).map(([k, v]) => (
            <div className="skill-row" key={k}>
              <dt>{k}</dt>
              <dd>{v.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="contact" className="section contact">
        <div className="section-head">
          <span className="section-num">/ 04</span>
          <h2>Contact</h2>
        </div>
        <div className="contact-grid">
          <a className="contact-card" href="mailto:nithinreddysbu@gmail.com">
            <span className="cc-icon"><EmailIcon /></span>
            <span className="cc-label">Email</span>
            <span className="cc-value">nithinreddysbu@gmail.com</span>
            <span className="cc-arrow">→</span>
          </a>
          <a className="contact-card" href="https://www.linkedin.com/in/nithin-reddy-b341a8158" target="_blank" rel="noreferrer">
            <span className="cc-icon"><LinkedInIcon /></span>
            <span className="cc-label">LinkedIn</span>
            <span className="cc-value">/in/Nithin</span>
            <span className="cc-arrow">→</span>
          </a>
          <a className="contact-card" href="https://github.com/NITHINREDI" target="_blank" rel="noreferrer">
            <span className="cc-icon"><GitHubIcon /></span>
            <span className="cc-label">GitHub</span>
            <span className="cc-value">@Nithin</span>
            <span className="cc-arrow">→</span>
          </a>
        </div>
      </section>

      <footer className="foot">
        <span>© {yr} Nithin</span>
        <span>Built with React · Vite · Deployed on Netlify</span>
      </footer>
    </div>
  )
}
