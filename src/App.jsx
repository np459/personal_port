import { useState } from "react"
import { profile, education, experience, research, skills, projects } from "./data.js"
import { LinkIcon, ArrowIcon, GithubIcon, LinkedinIcon, MailIcon } from "./components/Icons.jsx"

function Doc({ xp }) {
  return (
    <article className="doc">
      <div className="doc-head">
        <div>
          <h3 className="doc-role">{xp.role}</h3>
          <p className="doc-company">{xp.company}</p>
        </div>
        <span className="doc-period">{xp.period}</span>
      </div>
      <p className="doc-desc">{xp.description}</p>
      <div className="pills">
        {xp.tags.map((tag) => (
          <span className="pill" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      {xp.link && (
        <a className="doc-link" href={xp.link.href} target="_blank" rel="noreferrer">
          <span className="doc-link-icon">
            <LinkIcon />
          </span>
          <span>
            <span className="doc-link-label">{xp.link.label}</span>
            <br />
            <span className="doc-link-sub">{xp.link.sub}</span>
          </span>
        </a>
      )}
    </article>
  )
}

function Folder({ color, tabPos, label, note, open, onToggle, children }) {
  return (
    <section className={`folder f-${color}${open ? " open" : ""}`}>
      <button type="button" className="folder-top" onClick={onToggle} aria-expanded={open}>
        <span className={`folder-tab tab-${tabPos}`}>{label}</span>
        <span className="folder-ind" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
        <span className="folder-note">{note}</span>
      </button>
      <div className="folder-body">
        <div className="folder-inner">
          <div className="paper">{children}</div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [openId, setOpenId] = useState("experience")
  const toggle = (id) => setOpenId((cur) => (cur === id ? null : id))

  return (
    <>
      <header className="site-header container">
        <div className="site-topline">
          <span>houston, tx</span>
          <span>neha prasla</span>
        </div>
        <h1 className="site-name">Hi, I'm Neha</h1>
        <p className="site-script">medicine, research &amp; everything in between</p>
        <p className="site-intro">
          I love <strong>emergency medicine</strong>, <strong>aerospace medicine</strong>,{" "}
          <strong>bioinformatics</strong>, and <strong>AI / machine learning</strong>.{" "}
          <a href={`mailto:${profile.email}`}>say hi →</a>
        </p>
        <p className="site-intro site-intro-sub">
          {education.degree} @ {education.school} · {education.grad}
        </p>
        <p className="site-hint">☞ open a folder</p>
      </header>

      <main className="container stack">
        <Folder
          color="redchai"
          tabPos="left"
          label="experience"
          note="clinical · houston"
          open={openId === "experience"}
          onToggle={() => toggle("experience")}
        >
          {experience.map((xp) => (
            <Doc xp={xp} key={xp.role + xp.company} />
          ))}
        </Folder>

        <Folder
          color="masala"
          tabPos="mid"
          label="research"
          note="chitrala lab · uh"
          open={openId === "research"}
          onToggle={() => toggle("research")}
        >
          {research.map((xp) => (
            <Doc xp={xp} key={xp.role + xp.company} />
          ))}
        </Folder>

        <Folder
          color="cinnamon"
          tabPos="right"
          label="skills"
          note="& certifications"
          open={openId === "skills"}
          onToggle={() => toggle("skills")}
        >
          {Object.entries(skills).map(([group, items]) => (
            <div className="skill-group" key={group}>
              <h4 className="skill-group-title">{group}</h4>
              <div className="pills">
                {items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Folder>

        <Folder
          color="cardamom"
          tabPos="left"
          label="projects"
          note="work in progress"
          open={openId === "projects"}
          onToggle={() => toggle("projects")}
        >
          {projects.map((p) => (
            <article className="doc" key={p.title}>
              <div className="doc-head">
                <div>
                  <h3 className="doc-role">
                    {p.title}
                    {p.href && (
                      <a href={p.href} target="_blank" rel="noreferrer" aria-label={p.title}>
                        {" "}
                        <ArrowIcon size={14} />
                      </a>
                    )}
                  </h3>
                  <p className="doc-company">{p.meta}</p>
                </div>
                <span className="doc-period">{p.period}</span>
              </div>
            </article>
          ))}
        </Folder>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="socials">
            {profile.github !== "#" && (
              <a className="social-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
            )}
            {profile.linkedin !== "#" && (
              <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            )}
            <a className="social-link" href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
            </a>
          </div>
          <span className="footer-updated">updated {profile.updated}</span>
        </div>
      </footer>
    </>
  )
}
