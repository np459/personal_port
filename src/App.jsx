import { useEffect, useState } from "react"
import { profile, education, experience, research, skills, projects } from "./data.js"
import { LinkIcon, ArrowIcon, LinkedinIcon, MailIcon } from "./components/Icons.jsx"

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
      {(Array.isArray(xp.description) ? xp.description : [xp.description]).map((para) => (
        <p className="doc-desc" key={para.slice(0, 40)}>
          {para}
        </p>
      ))}
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

const EKG_CYCLE = "l40,0 l8,-5 l8,5 l14,0 l6,-18 l6,32 l6,-14 l16,-6 l8,6 l38,0"

function Ekg() {
  const d = `M0,30 ${EKG_CYCLE.repeat(8)}`
  return (
    <div className="ekg container" aria-hidden="true">
      <svg width="100%" height="60" viewBox="0 0 600 60" preserveAspectRatio="xMidYMid slice">
        <g className="ekg-line">
          <path d={d} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  )
}

function Vitals() {
  const [hr, setHr] = useState(72)

  useEffect(() => {
    const t = setInterval(() => setHr(68 + Math.floor(Math.random() * 12)), 2000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="vitals">
      <div className="vitals-title">
        <span>pt: n. prasla</span>
        <span className="vitals-live">
          <span className="blink">●</span> live
        </span>
      </div>
      <div className="vitals-row">
        <span>
          <span className="vitals-heart">♥</span> hr
        </span>
        <span>{hr} bpm</span>
      </div>
      <div className="vitals-row">
        <span>bp</span>
        <span>118/76</span>
      </div>
      <div className="vitals-row">
        <span>caffeine</span>
        <span>high ▲</span>
      </div>
      <div className="vitals-row">
        <span>mcat prep</span>
        <span>
          loading<span className="blink">…</span>
        </span>
      </div>
    </div>
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
  const [openId, setOpenId] = useState(null)
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
          {education.degree} @ {education.school}
        </p>
        <p className="site-hint">☞ open a folder</p>
        <Vitals />
      </header>

      <Ekg />

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
