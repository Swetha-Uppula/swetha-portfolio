import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ServerCog,
  Sparkles,
  Monitor,
  Terminal,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import "./styles.css";

const contacts = [
  { label: "Email", value: "swethauppulak@gmail.com", href: "mailto:swethauppulak@gmail.com", icon: Mail },
  { label: "Phone", value: "(385) 865-5548", href: "tel:+13858655548", icon: Phone },
  { label: "LinkedIn", value: "LinkedIn", href: "https://www.linkedin.com/in/swetha-uppula-16492b19b/", icon: Linkedin },
  { label: "GitHub", value: "GitHub", href: "https://github.com/Swetha-Uppula", icon: Github },
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Python", "Java", "C#", "JavaScript", "TypeScript", "PHP", "C"],
  },
  {
    title: "AI & ML",
    icon: Sparkles,
    items: ["LangChain", "RAG", "AI Agents", "FAISS", "Embeddings", "LLM Fine-Tuning", "Prompt engineering", "OpenAI API", "Gemini API", "Vertex AI"],
  },
  {
    title: "Frontend",
    icon: Monitor,
    items: ["React", "Angular", "Redux", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Backend & Frameworks",
    icon: ServerCog,
    items: ["Spring Boot", "Spring MVC", "Flask", "Jinja2", "Gunicorn/WSGI", "Dapper ORM"],
  },
  {
    title: "Databases & Cloud",
    icon: Cloud,
    items: ["MySQL", "PostgreSQL", "SQL Server", "BigQuery", "SQLite", "AWS", "GCP", "Azure", "Google Colab"],
  },
  {
    title: "DevOps & Infrastructure",
    icon: Terminal,
    items: ["Linux", "Cron Jobs", "GitHub", "GitLab"],
  },
  {
    title: "APIs & Security",
    icon: ShieldCheck,
    items: ["REST APIs", "XML-RPC", "OAuth 2.0", "OpenID"],
  },
  {
    title: "ERP & Reporting",
    icon: Database,
    items: ["Odoo addons", "QWeb reporting", "XML", "SMTP/Email Automation"],
  },
  {
    title: "Testing & Dev Tools",
    icon: Wrench,
    items: ["Selenium", "Postman", "PyCharm", "Visual Studio", "Sourcetree", "Jira", "NPM"],
  },
];


const experiences = [
  {
    company: "NetDiverse",
    location: "Salt Lake City, UT",
    description: "NetDiverse LLC is an Internet, Voice, and Managed Network Services provider serving commercial, education, and government clients across 19+ states. The company specializes in E-Rate, a federal program administered by USAC that funds broadband and telecom infrastructure for K-12 schools and libraries. NetDiverse runs its core business operations on Odoo ERP, managing everything from client services to billing and workflows through the platform.",
    roles: [
      {
        role: "Senior Software Developer",
        period: "May 2026 - Present",
        highlights: [
          "Architected NeuroPod, an AI-powered E-Rate procurement platform processing 8,000+ bids per funding year for schools and libraries.",
          "Engineered the core AI pipeline with multi-model fine-tuning, dataset preparation, FAISS product matching, and semantic classification, reducing manual effort by ~80%",
          "Developed FAISS‑based RAG pipelines to surface historical bid data, enhancing both accuracy and explainability of AI recommendations.",
          "Led the Odoo 15-to-19 upgrade for 10+ custom addons with zero-downtime migration planning.",
          "Drove cross-team alignment on automation strategy, accelerating delivery across backend and ERP workstreams.",
        ],
      },
      {
        role: "Software Developer",
        period: "Jan 2024 - May 2026",
        highlights: [
          "Reduced cloud infrastructure costs by 50% through AWS database consolidation and performance tuning.",
          "Architected Jidou-gu, Dealio, and Updater, eliminating manual workflows and reducing effort by 60-70%.",
          "Built Odoo integrations for cost fetching, product imports, FCC rate updates, and RFP link auditing.",
          "Delivered a Flask internal portal for self-serve database tools, AI prompts, and deal-processing dashboards.",
          "Maintained 25+ custom Odoo addons supporting sales, approvals, projects, helpdesk, and service tracking.",
        ],
      },
    ],
  },
  {
    company: "ACS Solutions",
    location: "Hyderabad, India",
    description: "ACS Solutions (now Innova Solutions) is a global digital transformation and IT services company offering technology, talent, and managed solutions across industries. During my time there, I worked on the AMS (Advanced Medical Strategies) project, a US-based healthcare analytics platform that provides payment integrity, risk management, and business intelligence solutions to help health plans, payers, and underwriters identify excessive claims, prevent overpayments, and manage high-cost claimants.",
    roles: [
      {
        role: "Associate Software Engineer",
        period: "Feb 2021 - Nov 2022",
        highlights: [
          "Developed user-centric features for a healthcare insurance platform while reducing application errors by 50%.",
          "Built Azure Cognitive Search modules for intelligent hospital preference matching.",
          "Optimized platform architecture to cut processing time by 60% and improve scalability.",
          "Collaborated with product and QA teams in Agile delivery cycles.",
        ],
      },
    ],
  },
];

const projects = [
  {
    name: "NeuroPod",
    subtitle: "AI-Powered E-Rate Automation Platform",
    company: "NetDiverse",
    impact: "Automates Form 470 RFP analysis using multi‑model LLMs, FAISS‑based product matching, RAG retrieval, workflow classification, and automated Odoo ERP write‑back.",
    stack: ["Python", "OpenAI", "Gemini", "Vertex AI", "RAG", "FAISS", "MySQL", "Odoo XML-RPC"],
  },
  {
    name: "Jidou-gu",
    subtitle: "Automated E-Rate Sales Order Generator",
    company: "NetDiverse",
    impact: "Parses USAC Form 470 data and generates structured Odoo sales orders with logistics-aware classification.",
    stack: ["C#", ".NET 6", "MySQL", "AWS RDS", "Dapper", "Cron"],
  },
  {
    name: "Dealio",

    subtitle: "Automated Deal Sync & Cascade Integration",
    company: "NetDiverse",
    impact: "Synchronizes discount data, screenshots, Excel attachments, Odoo fields, stages, and audit notes.",
    stack: ["Python", "Selenium", "Odoo XML-RPC", "MySQL", "Pillow", "smtplib"],
  },
  {
    name: "Odoo-NetDiverse",
    subtitle: "Custom ERP Suite for E-Rate Operations",
    company: "NetDiverse",
    impact: "A suite of 10 custom Odoo ERP addons tailored around NetDiverse's E-Rate operations, covering deal registration, sales pipeline, helpdesk, VoIP/PBX, and distributor API integration.",
    stack: ["Python", "PostgreSQL", "XML", "QWeb", "JavaScript", "pandas"],
  },
  {
    name: "NetDiverse Internal Website",
    subtitle: "Operational Staff Portal",
    company: "NetDiverse",
    impact: "Centralizes LangChain‑powered multi‑model AI workflows, database operations, automated Google Drive backups, Odoo validation reporting, and deal lookup into one unified automation platform for non-technical staff.",
    stack: ["Flask", "Python", "MySQL", "Jinja2", "Gunicorn", "Google Drive API", "OpenAI"],
  },
  {
    name: "Advanced Medical Strategies (AMS)",
    subtitle: "Healthcare analytics & Insurance Reimbursement",
    company: "ACS Solutions (now Innova Solutions)",
    impact: "Healthcare modules for reimbursement accuracy, hospital matching, and OAuth-secured platform access.",
    stack: ["Spring Boot", "Java", "Angular", "MySQL", "Azure", "OAuth 2.0"],
  },
];

const certifications = [
  "Generative AI: Prompt Engineering Basics (2025)",
  "AWS Certified Developer - Associate (2023)",
  "Advanced React (2023)",
  "Oracle Certified Associate, Java SE 8 Programmer (2019)",
  "Python (2019)",
];

const education = [
  "Master's in Information Systems - University of Utah, Jan 2023 - Dec 2023",
  "Bachelor of Technology in Computer Science - Keshav Memorial Institute of Technology, Jun 2016 - Jun 2020",
];

const contactCards = [
  { label: "Email", value: "swethauppulak@gmail.com", href: "mailto:swethauppulak@gmail.com", icon: Mail },
  { label: "Phone", value: "(385) 865-5548", href: "tel:+13858655548", icon: Phone },
  { label: "LinkedIn", value: "Swetha Uppula", href: "https://www.linkedin.com/in/swetha-uppula-16492b19b/", icon: Linkedin },
];

const socialCards = [
  { label: "GitHub", href: "https://github.com/Swetha-Uppula", icon: Github },
  { label: "Portfolio", href: "#top", icon: Globe },
];

function App() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -80px 0px" },
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index * 55, 420)}ms`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 40);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <main>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Swetha Uppula home">
          SU
        </a>
        <nav aria-label="Primary navigation">
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-content" data-reveal>
          <p className="eyebrow">Senior Software Developer</p>
          <h1>Swetha Uppula</h1>
          <br />
          <p className="hero-copy">
            Full Stack Engineer focused on AI automation and enterprise-scale solutions. I bridge complex business logic with scalable engineering to deliver unified platforms, intelligent integrations, and systems optimized for growth.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              <Mail size={18} aria-hidden="true" />
              Contact Me
            </a>
            <a className="secondary-button" href="#projects">
              <ExternalLink size={18} aria-hidden="true" />
              View Work
            </a>
          </div>
          {/* <a className="scroll-cue" href="#skills" aria-label="Scroll to skills">
            <span>Scroll</span>
            <b aria-hidden="true">v</b>
          </a> */}
        </div>
        <aside className="hero-panel" aria-label="Career highlights" data-reveal>
          <div>
            <span>4+</span>
            <p>Years building full-stack and automation systems</p>
          </div>
          <div>
            <span>80%</span>
            <p>Reduction in manual review effort via AI pipelines</p>
          </div>
          <div>
            <span>60%</span>
            <p>Reduction in system processing time through code optimization</p>
          </div>
        </aside>
      </section>

      <section className="contact-strip" aria-label="Contact links" data-reveal>
        {contacts.map((item) => {
          const Icon = item.icon;
          const content = (
            <>
              <Icon size={18} aria-hidden="true" />
              <span>{item.value}</span>
            </>
          );
          return item.href ? (
            <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {content}
            </a>
          ) : (
            <span key={item.label}>
              {content}
            </span>
          );
        })}
      </section>

      <section className="section intro-section">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Profile</p>
          <h2>Engineering for systems where accuracy, speed, and usability all matter.</h2>
        </div>
        <p className="lead" data-reveal>
          <br />
          The hardest part of software isn't the code, it's closing the gap between how a business works and what the system does. I've built AI pipelines, ERP workflows, healthcare platforms, and internal tools across the full stack to solve exactly that problem.
          <br />
          <br />
          For the last 2.5 years as a sole developer, I worked directly with a startup founder, translating niche business logic into automated workflows that cut processing time from 30 minutes to under 2 minutes.
        </p>
      </section>

      <section className="section" id="skills">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Technical Skills</p>
          <h2>A growing stack built through real project experience.</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article className="skill-card" key={group.title} data-reveal>
                <div className="card-title">
                  <Icon size={22} aria-hidden="true" />
                  <h3>{group.title}</h3>
                </div>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section timeline-section" id="experience">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Experience</p>
          <h2>Built under real constraints, for real businesses.</h2>
        </div>
        <div className="experience-tabs" data-reveal>
          <div className="experience-tab-list" aria-label="Experience selector">
            {experiences.map((job, index) => (
              <button
                className={activeExperience === index ? "is-active" : ""}
                key={job.company}
                onClick={() => setActiveExperience(index)}
                type="button"
              >
                <span>{job.company}</span>
                <small>{job.location}</small>
              </button>
            ))}
          </div>
          <article className="experience-panel" key={activeExperience}>
            <p className="company-description">
              {experiences[activeExperience].description}
            </p>
            {experiences[activeExperience].roles.map((role) => (
              <div className="role-block" key={role.role}>
                <div className="timeline-meta">
                  <CalendarDays size={18} aria-hidden="true" />
                  <span>{role.period}</span>
                </div>
                <div className="timeline-content">
                  <h3>{role.role}</h3>
                  <ul>
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </article>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Projects</p>
          <h2>Proof of scope, impact, and technical range.</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name} data-reveal>
              <div>
                <BriefcaseBusiness size={24} aria-hidden="true" />
                <h3>{project.name}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <span className="project-company-badge">{project.company}</span>
              </div>
              <p>{project.impact}</p>
              <div className="stack-list">
                {project.stack.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section credentials-section" id="education">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Education & Certificates</p>
          <h2>Academic background supported by industry certifications.</h2>
        </div>
        <div className="credentials-grid">
          <article data-reveal>
            <div className="card-title">
              <GraduationCap size={22} aria-hidden="true" />
              <h3>Education</h3>
            </div>
            <ul className="plain-list">
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article data-reveal>
            <div className="card-title">
              <Award size={22} aria-hidden="true" />
              <h3>Certifications</h3>
            </div>
            <ul className="plain-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-heading contact-heading" data-reveal>
          <p className="eyebrow">Contact</p>
          <h2>Let's talk about roles, teams, and software worth building.</h2>
          <p className="lead">
            I am open to opportunities across full-stack engineering, AI automation,
            cloud-backed systems, and ERP integrations.
          </p>
        </div>
        <div className="contact-card-grid">
          {contactCards.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <span className="contact-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <small>{item.label}</small>
                <strong>{item.value}</strong>
              </>
            );
            return item.href ? (
              <a className="contact-card" href={item.href} key={item.label} data-reveal>
                {content}
              </a>
            ) : (
              <article className="contact-card" key={item.label} data-reveal>
                {content}
              </article>
            );
          })}
        </div>
        <div className="social-row" data-reveal>
          {socialCards.map((item) => {
            const Icon = item.icon;
            return (
              <a
                href={item.href}
                key={item.label}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={item.label}
              >
                <Icon size={20} aria-hidden="true" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </section>

      <footer>
        <a href="mailto:swethauppulak@gmail.com">swethauppulak@gmail.com</a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
